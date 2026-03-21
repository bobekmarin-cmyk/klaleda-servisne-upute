#Requires -Version 5.1
<#
  Jednokratno: gh auth login -h github.com -p https -w
  Zatim u PowerShellu iz korijena projekta:
    .\scripts\publish-to-github.ps1
  Ili s drugim imenom repozitorija:
    .\scripts\publish-to-github.ps1 -RepoName "moj-repo"
#>
param(
  [string]$RepoName = "klaleda-servisne-upute"
)

$ErrorActionPreference = "Stop"

function Get-GhExe {
  $cmd = Get-Command gh -ErrorAction SilentlyContinue
  if ($cmd) { return $cmd.Source }
  $p = Join-Path ${env:ProgramFiles} "GitHub CLI\gh.exe"
  if (Test-Path $p) { return $p }
  throw "Nije pronađen gh.exe. Instaliraj GitHub CLI ili dodaj ga u PATH."
}

$gh = Get-GhExe
$root = Split-Path $PSScriptRoot -Parent
Set-Location $root

Write-Host "Koristim: $gh"
& $gh auth status 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) {
  Write-Host ""
  Write-Host "Nisi prijavljen na GitHub. Pokreni u terminalu:" -ForegroundColor Yellow
  Write-Host "  & `"$gh`" auth login -h github.com -p https -w" -ForegroundColor Cyan
  Write-Host ""
  exit 1
}

$login = (& $gh api user -q .login).Trim()
if (-not $login) { throw "Nije moguće pročitati GitHub korisnika." }
$fullName = "$login/$RepoName"
Write-Host "GitHub korisnik: $login  ->  repo: $fullName"

$originUrl = ""
try {
  $originUrl = (git config --get remote.origin.url 2>$null)
} catch {}

if (-not $originUrl) {
  Write-Host "Kreiram repozitorij i push na origin..."
  & $gh repo create $RepoName --public --source=. --remote=origin --push `
    --description "Servisne upute – vatrogasni aparati (Vite/React)"
  if ($LASTEXITCODE -ne 0) {
    Write-Host "Repo create nije uspio (npr. ime već postoji). Povezujem origin i push..." -ForegroundColor Yellow
    $url = "https://github.com/$fullName.git"
    if (git config --get remote.origin.url 2>$null) {
      git remote set-url origin $url
    } else {
      git remote add origin $url
    }
    git push -u origin main
    if ($LASTEXITCODE -ne 0) { throw "git push nije uspio." }
  }
} else {
  Write-Host "Postoji remote origin: $originUrl"
  git push -u origin main
  if ($LASTEXITCODE -ne 0) { throw "git push nije uspio." }
}

Write-Host "Pokušavam uključiti GitHub Pages (izvor: GitHub Actions)..."
$pagesErr = $null
try {
  & $gh api -X POST "repos/$fullName/pages" -f build_type=workflow 2>&1 | Tee-Object -Variable pagesOut | Out-Host
  if ($LASTEXITCODE -ne 0) { $pagesErr = "$pagesOut" }
} catch {
  $pagesErr = $_.Exception.Message
}

if ($pagesErr) {
  Write-Host "POST pages (očekivano ako stranica već postoji): $pagesErr" -ForegroundColor DarkYellow
  & $gh api -X PATCH "repos/$fullName/pages" -f build_type=workflow 2>&1 | Out-Host
}

$pageUrl = "https://$login.github.io/$RepoName/"
Write-Host ""
Write-Host "Gotovo. Nakon što Actions završi deploy:" -ForegroundColor Green
Write-Host "  $pageUrl"
Write-Host ""
Write-Host "Ako stranica ne radi: Repo -> Settings -> Pages -> Source = GitHub Actions." -ForegroundColor DarkGray

# Servisne upute – vatrogasni aparati

React (Vite) aplikacija. **Javna adresa nakon deploya:**  
`https://<tvoj-github-user>.github.io/<ime-repoa>/`

Putanja `/ime-repoa/` postavlja se automatski u GitHub Actions prema stvarnom imenu repozitorija.

## Prvi put na GitHub + online

### Automatski (GitHub CLI)

1. **Jednokratna prijava** (PowerShell):

   ```powershell
   & "C:\Program Files\GitHub CLI\gh.exe" auth login -h github.com -p https -w
   ```

   Otvori link u pregledniku, zalijepi kod uređaja, potvrdi.

2. **Objavi repozitorij, push i Pages** iz korijena projekta:

   ```powershell
   cd D:\CURSOR\KLALEDA
   .\scripts\publish-to-github.ps1
   ```

   Skripta kreira javni repo `klaleda-servisne-upute` (ili `-RepoName "drugo-ime"`), pusha `main` i pokuša uključiti GitHub Pages (workflow). Ako API za Pages zakaže, u **Settings → Pages** ručno postavi izvor na **GitHub Actions**.

3. U repozitoriju: **Actions** — pričekaj zeleni **Deploy to GitHub Pages**.  
   Adresa: `https://<user>.github.io/<ime-repoa>/`

Ako `gh` nije u PATH-u, koristi punu stazu iz koraka 1.

### Ručno

1. Na GitHubu: **New repository** (npr. ime `klaleda-servisne-upute` ili bilo koje drugo — workflow prilagođava `base` prema imenu).
2. U Cursoru: **Source Control** → **Publish Branch** / poveži `origin` i **push** grane `main`.  
   Ili u terminalu (nakon što postoji prazan repo na GitHubu):

   ```bash
   git remote add origin https://github.com/TVOJ_USER/IME_REPOA.git
   git push -u origin main
   ```

3. Na GitHubu: **Settings** → **Pages** → **Build and deployment** → **Source: GitHub Actions** (ne „Deploy from branch”).
4. Otvori **Actions** — pričekaj da zeleno prođe workflow **Deploy to GitHub Pages**.  
   Link stranice bit će u završnom koraku deploya ili u **Settings → Pages**.

## Lokalno

```bash
npm install
npm run dev
```

Build kao na Pages (opcionalno test):

```bash
set BASE_PATH=/ime-tvog-repoa/
npm run build
```

Na Windows PowerShellu: `$env:BASE_PATH="/ime-repoa/"; npm run build`

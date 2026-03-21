import { useState, useMemo, useEffect } from 'react'
import { extinguishers, MEDIUM_GROUPS } from './data/extinguishers'
import { SchemaPanel } from './components/SchemaPanel'
import { LoginPage } from './components/LoginPage'
import { splitPrimarySecondarySpecs } from './utils/splitSpecs'
import './App.css'

function extinguisherMatchesQuery(ex, q) {
  const n = q.trim().toLowerCase()
  if (!n) return true
  const blob = [ex.shortLabel, ex.title, ex.subtitle, ex.id].filter(Boolean).join(' ').toLowerCase()
  return blob.includes(n)
}

function buildInitialPartVariants() {
  return Object.fromEntries(
    extinguishers.filter((e) => e.partVariants?.length).map((e) => [e.id, e.defaultPartVariant]),
  )
}

function ServiceSections({ sections }) {
  const [openIdx, setOpenIdx] = useState(() => {
    const i = sections.findIndex((s) => s.defaultOpen)
    return i >= 0 ? i : 0
  })

  return (
    <div className="service-accordion">
      {sections.map((section, i) => (
        <details
          key={section.heading}
          className="service-details"
          open={openIdx === i}
        >
          <summary
            className="service-details__summary"
            onClick={(e) => {
              e.preventDefault()
              setOpenIdx((prev) => (prev === i ? -1 : i))
            }}
          >
            {section.heading}
          </summary>
          <div className="service-details__body">
            {section.blocks.map((block, i) => (
              <div key={i} className="block">
                {block.subheading && <h3 className="block__sub">{block.subheading}</h3>}
                {block.paragraphs?.map((p, j) => (
                  <p key={j} className="block__p">
                    {p}
                  </p>
                ))}
                {block.bullets && (
                  <ul className="block__list">
                    {block.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
                {block.note && <p className="block__note">{block.note}</p>}
              </div>
            ))}
          </div>
        </details>
      ))}
    </div>
  )
}

function MainApp({ onLogout }) {
  const [activeId, setActiveId] = useState(extinguishers[0].id)
  const [partVariantById, setPartVariantById] = useState(buildInitialPartVariants)
  const [sidebarQuery, setSidebarQuery] = useState('')

  const active = extinguishers.find((e) => e.id === activeId) ?? extinguishers[0]

  const selectedPartVariant = active.partVariants?.length
    ? partVariantById[active.id] ?? active.defaultPartVariant
    : null

  const displaySpecs =
    active.specsByVariant && selectedPartVariant
      ? active.specsByVariant[selectedPartVariant] ?? []
      : active.specs ?? []

  const { heroSpecs, secondarySpecs } = splitPrimarySecondarySpecs(displaySpecs)

  const setPartVariant = (key) => {
    setPartVariantById((prev) => ({ ...prev, [active.id]: key }))
  }

  const hasPartVariants = Boolean(active.partVariants?.length)

  const visibleByGroup = useMemo(() => {
    const map = new Map()
    for (const g of MEDIUM_GROUPS) {
      const list = extinguishers.filter(
        (ex) => ex.mediumGroup === g.key && extinguisherMatchesQuery(ex, sidebarQuery),
      )
      map.set(g.key, list)
    }
    return map
  }, [sidebarQuery])

  const firstVisibleId = useMemo(() => {
    for (const g of MEDIUM_GROUPS) {
      const list = visibleByGroup.get(g.key) ?? []
      if (list.length > 0) return list[0].id
    }
    return null
  }, [visibleByGroup])

  useEffect(() => {
    if (firstVisibleId == null) return
    const stillVisible = extinguishers.some(
      (ex) => ex.id === activeId && extinguisherMatchesQuery(ex, sidebarQuery),
    )
    if (!stillVisible) setActiveId(firstVisibleId)
  }, [sidebarQuery, firstVisibleId, activeId])

  const sidebarEmpty =
    firstVisibleId == null && Boolean(sidebarQuery.trim())

  return (
    <div className="layout">
      <header className="app-topbar">
        <h1 className="app-topbar__title">
          Servisne upute za TOTAL vatrogasne aparate
        </h1>
        <div className="app-topbar__logo-wrap">
          <img
            className="app-topbar__logo"
            src="/images/neuruppin-logo.png"
            alt="Neuruppin"
            width={160}
            height={48}
            decoding="async"
          />
        </div>
        <div className="app-topbar__tools">
          <label className="app-topbar__search-sr" htmlFor="topbar-search">
            Traži aparat
          </label>
          <input
            id="topbar-search"
            className="app-topbar__search-input"
            type="search"
            placeholder="Traži aparat…"
            value={sidebarQuery}
            onChange={(e) => setSidebarQuery(e.target.value)}
            autoComplete="off"
            spellCheck="false"
          />
          <button type="button" className="app-topbar__logout" onClick={onLogout}>
            Odjava
          </button>
        </div>
      </header>

      <div className="layout__body">
      <aside className="sidebar" aria-label="Odabir tipa aparata">
        <nav className="sidebar__nav" aria-label="Aparati po mediju">
          {sidebarEmpty ? (
            <p className="sidebar__empty" role="status">
              Nema rezultata za „{sidebarQuery.trim()}“.
            </p>
          ) : (
            MEDIUM_GROUPS.map((g) => {
              const inGroup = visibleByGroup.get(g.key) ?? []
              if (inGroup.length === 0) return null
              return (
                <div key={g.key} className="sidebar__category">
                  <h2 className="sidebar__category-title">{g.label}</h2>
                  <ul className="sidebar__category-list">
                    {inGroup.map((ex) => (
                      <li key={ex.id} className="sidebar__category-item">
                        <button
                          type="button"
                          className={`nav-item ${ex.id === activeId ? 'nav-item--active' : ''}`}
                          onClick={() => setActiveId(ex.id)}
                          aria-current={ex.id === activeId ? 'page' : undefined}
                        >
                          <span className="nav-item__label">{ex.shortLabel}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })
          )}
        </nav>
      </aside>

      <main className="main">
        <header className="main__header main__header--full">
          <h2 className="main__device-title">{active.title}</h2>
          <p className="main__subtitle">{active.subtitle}</p>
        </header>

        {hasPartVariants && selectedPartVariant != null && (
          <div
            className="variant-toggle variant-toggle--above-specs"
            role="group"
            aria-label="Točan tip aparata za kataloške brojeve"
          >
            {active.partVariants.map((v) => (
              <button
                key={v.key}
                type="button"
                className={`variant-toggle__btn ${selectedPartVariant === v.key ? 'variant-toggle__btn--active' : ''}`}
                onClick={() => setPartVariant(v.key)}
              >
                {v.label}
              </button>
            ))}
          </div>
        )}

        <div className="content-grid content-grid--thirds">
          <div className="content-grid__col content-grid__col--schema">
            <SchemaPanel
              heroImage={active.heroImage}
              productPhoto={
                selectedPartVariant != null && active.productPhotos?.[selectedPartVariant]
                  ? active.productPhotos[selectedPartVariant]
                  : active.productPhoto
              }
              extraFigures={active.extraFigures}
              parts={active.parts ?? []}
              partVariants={active.partVariants}
              selectedVariant={selectedPartVariant}
              onVariantChange={setPartVariant}
              panelTitle="Shema i dijelovi"
            />
          </div>

          <div className="content-grid__col content-grid__col--detail">
            <section className="specs-overview" aria-label="Osnovni podaci">
              <h2 className="col-section-title col-section-title--plain">Osnovni podaci</h2>
              <div className="card card--compact specs-overview__card" aria-live="polite">
                {heroSpecs.length > 0 ? (
                  <div className="specs-highlight specs-overview__hero">
                    <div className="hero-metrics">
                      {heroSpecs.map((row) => (
                        <div key={row.key} className="hero-metric">
                          <span className="hero-metric__kicker">{row.label}</span>
                          <span className="hero-metric__value">{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="specs-overview__empty">Nema osnovnih podataka za ovaj prikaz.</p>
                )}
              </div>
            </section>
            <h2 className="col-section-title">Ostali podaci</h2>
            <div className="card card--compact specs-card specs-card--secondary" aria-live="polite">
              {secondarySpecs.length > 0 ? (
                <table className="spec-table spec-table--secondary">
                  <tbody>
                    {secondarySpecs.map((row) => (
                      <tr key={row.label}>
                        <th scope="row">{row.label}</th>
                        <td>{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="specs-secondary-empty">Nema dodatnih podataka u tablici.</p>
              )}
            </div>
            {active.warnings?.length > 0 && (
              <div className="warnings warnings--compact" role="note">
                {active.warnings.map((w) => (
                  <p key={w}>{w}</p>
                ))}
              </div>
            )}
            <div className="detail-service-block">
              <h2 className="col-section-title">Servisne upute</h2>
              <p className="service-hint">Otvorite odjeljak koji trebate (periodični / unutarnji pregled).</p>
              <ServiceSections key={active.id} sections={active.sections} />
            </div>
          </div>
        </div>
        <p className="main__footnote">
          Informativni prikaz. Za službenu primjenu koristite aktualni dokument proizvođača / KLALEDA.
        </p>
      </main>
      </div>
    </div>
  )
}

export default function App() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem('klaleda_authed') === '1')

  const handleLogin = () => setAuthed(true)

  const handleLogout = () => {
    sessionStorage.removeItem('klaleda_authed')
    setAuthed(false)
  }

  if (!authed) {
    return <LoginPage onLogin={handleLogin} />
  }

  return <MainApp onLogout={handleLogout} />
}

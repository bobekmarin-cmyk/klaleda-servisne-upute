import { useState, useEffect, useCallback, useMemo } from 'react'

function mediaIsPlaceholder(img) {
  return Boolean(img?.placeholder) || !img?.src
}

function partCatalogText(part, variantKey) {
  if (part.line != null) return part.line
  if (!part.code || !variantKey) return '—'
  return part.code[variantKey] ?? '—'
}

function PartRow({ p, hasVariants, selectedVariant }) {
  return (
    <li>
      <div className="parts-list__row parts-list__row--static">
        <span className="parts-list__no">
          {p.ref != null ? `${p.ref}.` : '\u00a0'}
        </span>
        <span className="parts-list__body">
          <span className="parts-list__name">{p.name}</span>
          <span className="parts-list__code">
            {hasVariants && <span className="parts-list__code-label">Kat. br.</span>}
            {hasVariants && ' '}
            {partCatalogText(p, selectedVariant)}
          </span>
        </span>
      </div>
    </li>
  )
}

export function SchemaPanel({
  heroImage,
  productPhoto,
  extraFigures,
  parts,
  partVariants,
  selectedVariant,
  onVariantChange,
  panelTitle,
}) {
  const [lightbox, setLightbox] = useState(null)

  const closeLightbox = useCallback(() => setLightbox(null), [])

  const [partsLeft, partsRight] = useMemo(() => {
    const mid = Math.ceil(parts.length / 2)
    return [parts.slice(0, mid), parts.slice(mid)]
  }, [parts])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [lightbox, closeLightbox])

  if (!heroImage) return null

  const hasVariants = partVariants?.length > 0
  const twoCols = Boolean(productPhoto)

  const photoIsPh = productPhoto ? mediaIsPlaceholder(productPhoto) : true
  const schemaIsPh = mediaIsPlaceholder(heroImage)

  const openPhotoLb = () => {
    if (!productPhoto || photoIsPh) return
    setLightbox({
      src: productPhoto.src,
      alt: productPhoto.alt,
      caption: productPhoto.caption,
      ariaLabel: 'Povećana fotografija aparata',
    })
  }

  const openSchemaLb = () => {
    if (schemaIsPh) return
    setLightbox({
      src: heroImage.src,
      alt: heroImage.alt,
      caption: heroImage.caption,
      ariaLabel: 'Povećana shema',
    })
  }

  const openExtraLb = (fig) => {
    if (!fig?.src) return
    setLightbox({
      src: fig.src,
      alt: fig.alt || '',
      caption: fig.caption,
      ariaLabel: fig.ariaLabel || 'Povećana stranica iz upute',
    })
  }

  return (
    <div className="schema-panel">
      {panelTitle && <h2 className="col-section-title">{panelTitle}</h2>}

      <div className={`visual-row ${twoCols ? 'visual-row--two' : 'visual-row--one'}`}>
        {productPhoto && (
          <div className="visual-row__col visual-row__col--photo">
            <span className="visual-row__label">Fotografija</span>
            <figure className="diagram-figure diagram-figure--visual">
              {photoIsPh ? (
                <div
                  className="media-zoom-trigger media-zoom-trigger--static"
                  aria-label={productPhoto.alt || 'Rezervirano mjesto za fotografiju'}
                >
                  <div className="visual-media-frame visual-media-frame--placeholder">
                    <span className="visual-media-frame__placeholder-kicker">Fotografija</span>
                    <span className="visual-media-frame__placeholder-text">
                      {productPhoto.caption || productPhoto.alt || 'Umetnite sliku u /public/images i ažurirajte putanju u podacima.'}
                    </span>
                  </div>
                  <span className="media-zoom-trigger__hint media-zoom-trigger__hint--muted">
                    Rezervirano mjesto
                  </span>
                </div>
              ) : (
                <button
                  type="button"
                  className="media-zoom-trigger"
                  onClick={openPhotoLb}
                  aria-label="Otvori veću fotografiju"
                  title="Klik za veću fotografiju"
                >
                  <div className="visual-media-frame">
                    <img
                      src={productPhoto.src}
                      alt={productPhoto.alt}
                      className="visual-media-frame__img"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span className="media-zoom-trigger__hint">Klik za povećanje</span>
                </button>
              )}
              {!photoIsPh && productPhoto.caption && (
                <figcaption className="diagram-figure__cap">{productPhoto.caption}</figcaption>
              )}
            </figure>
          </div>
        )}

        <div
          className={`visual-row__col visual-row__col--schema ${!productPhoto ? 'visual-row__col--only' : ''}`}
        >
          <span className="visual-row__label">Shema</span>
          <figure className="diagram-figure diagram-figure--visual">
            {schemaIsPh ? (
              <div
                className={`media-zoom-trigger media-zoom-trigger--static ${!twoCols ? 'media-zoom-trigger--narrow' : ''}`}
                aria-label={heroImage.alt || 'Rezervirano mjesto za shemu'}
              >
                <div
                  className={`visual-media-frame visual-media-frame--placeholder ${!twoCols ? 'visual-media-frame--solo' : ''}`}
                >
                  <span className="visual-media-frame__placeholder-kicker">Shema</span>
                  <span className="visual-media-frame__placeholder-text">
                    {heroImage.caption ||
                      heroImage.alt ||
                      'Umetnite sliku sheme u /public/images i ažurirajte putanju u podacima.'}
                  </span>
                </div>
                <span className="media-zoom-trigger__hint media-zoom-trigger__hint--muted">
                  Rezervirano mjesto
                </span>
              </div>
            ) : (
              <button
                type="button"
                className={`media-zoom-trigger ${!twoCols ? 'media-zoom-trigger--narrow' : ''}`}
                onClick={openSchemaLb}
                aria-label="Otvori veću shemu"
                title="Klik za veću shemu"
              >
                <div
                  className={`visual-media-frame ${!twoCols ? 'visual-media-frame--solo' : ''}`}
                >
                  <img
                    src={heroImage.src}
                    alt={heroImage.alt}
                    className="visual-media-frame__img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span className="media-zoom-trigger__hint">Klik za povećanje</span>
              </button>
            )}
            {!schemaIsPh && heroImage.caption && (
              <figcaption className="diagram-figure__cap">{heroImage.caption}</figcaption>
            )}
          </figure>
        </div>
      </div>

      {extraFigures?.length > 0 && (
        <div className="figure-gallery">
          <h3 className="figure-gallery__title">Još stranica iz PDF upute</h3>
          <ul className="figure-gallery__grid">
            {extraFigures.map((fig) => (
              <li key={fig.src} className="figure-gallery__item">
                <span className="figure-gallery__label">{fig.label || 'Stranica'}</span>
                <button
                  type="button"
                  className="figure-gallery__thumb-btn"
                  onClick={() => openExtraLb(fig)}
                  aria-label={fig.ariaLabel || fig.alt || 'Otvori veću sliku'}
                >
                  <img
                    src={fig.src}
                    alt={fig.alt || ''}
                    className="figure-gallery__thumb"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
                {fig.caption && (
                  <p className="figure-gallery__cap">{fig.caption}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {lightbox && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.ariaLabel}
        >
          <button
            type="button"
            className="lightbox__backdrop"
            aria-label="Zatvori"
            onClick={closeLightbox}
          />
          <div className="lightbox__content">
            <button
              type="button"
              className="lightbox__close"
              onClick={closeLightbox}
              aria-label="Zatvori"
            >
              ×
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="lightbox__img"
            />
            {lightbox.caption && <p className="lightbox__caption">{lightbox.caption}</p>}
          </div>
        </div>
      )}

      <h3 className="parts-list__heading">Rezervni dijelovi</h3>
      <div className="parts-split">
        <ul className="parts-list parts-list--split-col">
          {partsLeft.map((p) => (
            <PartRow
              key={p.ref != null ? String(p.ref) : p.name}
              p={p}
              hasVariants={hasVariants}
              selectedVariant={selectedVariant}
            />
          ))}
        </ul>
        <ul className="parts-list parts-list--split-col">
          {partsRight.map((p) => (
            <PartRow
              key={p.ref != null ? String(p.ref) : p.name}
              p={p}
              hasVariants={hasVariants}
              selectedVariant={selectedVariant}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

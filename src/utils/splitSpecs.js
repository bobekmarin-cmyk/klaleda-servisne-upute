/**
 * Hero (puna širina): samo Tip i Medij. Sve ostalo, uključujući Kapacitet i pogonski/tlak, u secondary.
 */
export function splitPrimarySecondarySpecs(rows) {
  if (!rows?.length) return { heroSpecs: [], secondarySpecs: [] }

  const used = new Set()

  const take = (predicate) => {
    const i = rows.findIndex((r, idx) => !used.has(idx) && predicate(r))
    if (i >= 0) used.add(i)
    return i >= 0 ? rows[i] : null
  }

  const tip = take((r) => r.label === 'Tip')
  const medij = take((r) => r.label === 'Medij')
  const kap = take((r) => r.label === 'Kapacitet gašenja')

  const heroSpecs = []
  if (tip) heroSpecs.push({ key: 'tip', label: 'Tip', value: tip.value })
  if (medij) heroSpecs.push({ key: 'medij', label: 'Medij', value: medij.value })

  const secondarySpecs = rows.filter((_, i) => !used.has(i))
  if (kap) secondarySpecs.unshift(kap)

  return { heroSpecs, secondarySpecs }
}

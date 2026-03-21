/** Gradi tablicu dijelova s istim nazivima kao u uputama; kataloške brojeve nadopuniti iz PDF-a. */

export function dash(keys) {
  return Object.fromEntries(keys.map((k) => [k, '—']))
}

export function partsHandheldPowder(keys) {
  const d = dash(keys)
  return [
    { ref: 1, name: 'Zaštitna kapa ventila komplet', code: d },
    { ref: 2, name: 'Plastična uvodnica', code: d },
    { ref: 3, name: 'Mlaznica', code: d },
    { ref: 4, name: 'Manometer', code: d },
    { ref: 5, name: 'O-brtva manometra', code: d },
    { ref: 6, name: 'Ventil komplet s manometrom, bez usponske cijevi', code: d },
    { ref: 7, name: 'O-brtva ventila', code: d },
    { ref: 8, name: 'Vijak s križnim utorom', code: d },
    { ref: 9, name: 'Naljepnica', code: d },
    { ref: 10, name: 'Usponska cijev', code: d },
    { ref: 11, name: 'Nosač', code: d },
    { ref: null, name: 'Obujmica', code: d },
    { ref: 12, name: 'Sigurnosni ventil', code: d },
    { ref: null, name: 'Sredstvo za gašenje (ABC prah, prema tipu)', line: '—' },
  ]
}

export function partsHosePowder(keys) {
  const d = dash(keys)
  return [
    { ref: 1, name: 'Osigurač', code: d },
    { ref: 2, name: 'Ventil s manometrom', code: d },
    { ref: 4, name: 'O-brtva ventila', code: d },
    { ref: 5, name: 'Usponska cijev', code: d },
    { ref: 6, name: 'Crijevo mlaznice', code: d },
    { ref: null, name: 'Nosač zidni', code: d },
    { ref: 9, name: 'Naljepnica', code: d },
    { ref: null, name: 'Sredstvo za gašenje (prah, prema tipu)', line: '—' },
  ]
}

export function partsHoseLiquid(keys, agentLine) {
  const d = dash(keys)
  return [
    { ref: 1, name: 'Osigurač', code: d },
    { ref: 2, name: 'Ventil s manometrom', code: d },
    { ref: 3, name: 'O-brtva ventila', code: d },
    { ref: 4, name: 'Usponska cijev', code: d },
    { ref: 5, name: 'Crijevo / mlaznica', code: d },
    { ref: 6, name: 'Naljepnica', code: d },
    { ref: null, name: 'Nosač', code: d },
    { ref: null, name: agentLine, line: '—' },
  ]
}

export function partsLargeMobile(keys) {
  const d = dash(keys)
  return [
    { ref: 1, name: 'Ventil / armatura', code: d },
    { ref: 2, name: 'Manometar', code: d },
    { ref: 3, name: 'Crijevo visokog kapaciteta', code: d },
    { ref: 4, name: 'Točkovi / nosivi okvir', code: d },
    { ref: 5, name: 'Naljepnica / natpis', code: d },
    { ref: null, name: 'Sredstvo za gašenje (prema tipu PG 50 LM)', line: '—' },
  ]
}

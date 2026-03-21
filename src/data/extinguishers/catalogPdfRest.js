/**
 * Ostatak kataloga – dijelovi, specifikacije i slike iz KLALEDA upute 2026.
 * Servisne upute (`sections`): zasebni modul po tipu u `sections/*.js` (uzorak: `sSkSections.js`).
 */

import { SECTIONS_PG_TANDEM } from './sections/pgTandemSections.js'
import { SECTIONS_KS2_BG } from './sections/ks2BgSections.js'
import { SECTIONS_KS5_BG } from './sections/ks5BgSections.js'
import { SECTIONS_WD_F500 } from './sections/wdF500Sections.js'
import { SECTIONS_S_DN } from './sections/sDnSections.js'
import { SECTIONS_FLUORINEFREE_FSP } from './sections/fluorineFreeSections.js'
import { SECTIONS_F2L } from './sections/f2lSections.js'
import { SECTIONS_F6L } from './sections/f6lSections.js'
import { SECTIONS_W6_WNA } from './sections/w6WnaSections.js'
import { SECTIONS_PG50_LM } from './sections/pg50LmSections.js'
import { SECTIONS_P1 } from './sections/p1Sections.js'
import { SECTIONS_P_SERIES_TZ } from './sections/pSeriesSections.js'
import { SECTIONS_S_SK } from './sSkSections.js'

const W = [
  'Servis dopušten samo kompetentnim, kvalificiranim ovlaštenim osobama (DIN 14406-4 i odgovarajući hrvatski propisi).',
  'Koristiti isključivo odobrena sredstva za gašenje, pogonski plin i originalne FLN rezervne dijelove prema ovoj uputi.',
]

function r(ref, name, codeMap) {
  return { ref, name, code: codeMap }
}

/** PG 6 / PG 12 Tandem */
export const pgTandemParts = [
  r(1, 'Osigurač', { pg6: '142 101', pg12t: '142 101' }),
  r(2, 'Manometar', { pg6: '501 820', pg12t: '501 820' }),
  r(3, 'Vreteno s O-prstenom', { pg6: '501 942', pg12t: '501 942' }),
  r(4, 'Ventil s ispitnim ventilom', { pg6: '726 002', pg12t: '726 002' }),
  r(5, 'O-brtva 26 × 3', { pg6: '727 009', pg12t: '727 009' }),
  r(6, 'Usponska cijev', { pg6: '501 758', pg12t: '501 774' }),
  r(7, 'Crijevo bez ručke', { pg6: '550 664', pg12t: '551 405' }),
  r(8, 'Stezaljka za crijevo', { pg6: '551 405', pg12t: '551 405' }),
  r(9, 'Brtva manometra', { pg6: '727 017', pg12t: '727 017' }),
  r(10, 'Zidni držač', { pg6: '200 007', pg12t: '200 007' }),
  r(11, 'Sprinkler', { pg6: '738 178', pg12t: '738 181' }),
  r(12, 'Naljepnica', { pg6: '092 933', pg12t: '092 934' }),
  r(13, 'Ispitni ventil', { pg6: '502 402', pg12t: '502 402' }),
  r(14, 'Poklopac za zaštitu od prašine', { pg6: '502 404', pg12t: '502 404' }),
  r(15, 'Posebno ljepilo, otporno na vibracije', { pg6: '730 037', pg12t: '730 037' }),
  r(null, 'Plastična podnica', { pg6: '201 122', pg12t: '201 149' }),
  r(null, 'Neutrex super 6 kg / 25 kg', { pg6: '313 654', pg12t: '313 656' }),
]

export const pgTandemExtinguisher = {
  id: '05-pg-tandem',
  shortLabel: 'PG 6 / 12 Tandem',
  title: 'PG 6, PG 12 Tandem',
  subtitle: 'Nosivi aparati s prahom – tandem (PDF str. 26–31)',
  partVariants: [
    { key: 'pg6', label: 'PG 6 Tandem' },
    { key: 'pg12t', label: 'PG 12 Tandem' },
  ],
  defaultPartVariant: 'pg6',
  parts: pgTandemParts,
  heroImage: {
    src: '/images/pg-tandem-shema.png',
    alt: 'OPIS SHEME – PG 6 Tandem, PG 12 Tandem.',
    caption:
      'Shema / sljedeća stranica nakon naslovnice (str. 27; fotografija str. 26). Momenti: ventil 35–40 Nm, crijevo 20 Nm, sprinkler bočna stijenka 40 Nm. Tablica OPIS SHEME u PDF-u može biti na daljnjoj stranici.',
  },
  productPhotos: {
    pg6: {
      src: '/images/pg-tandem-cover.png',
      alt: 'PG 6, PG 12 Tandem – naslovnica poglavlja.',
      caption: 'Ilustracija poglavlja (str. 26).',
    },
    pg12t: {
      src: '/images/pg-tandem-cover.png',
      alt: 'PG 6, PG 12 Tandem – naslovnica poglavlja.',
      caption: 'Isto poglavlje; PG 12 Tandem – razlike u tablici dijelova i natpisu.',
    },
  },
  specsByVariant: {
    pg6: [
      { label: 'Tip', value: 'PG 6 Tandem' },
      { label: 'Broj odobrenja (tip)', value: 'SP-13/92' },
      { label: 'Kapacitet gašenja', value: '43A 233B C' },
      { label: 'Sredstvo za gašenje', value: 'Neutrex super SP 89/08 (samo kao aparat za gašenje požara)' },
      { label: 'Pogonski plin', value: 'Dušik; punjenje 15 +0,5 bar pri 20 °C; rosište min. −40 °C' },
      { label: 'Punjenje praha', value: 'Neutrex super 6 kg (kat. 313 654) – prema tablici u PDF-u' },
      { label: 'Umnožak tlaka × volumen', value: '< 1000 L·bar; unutarnji pregled 4 godine; tlačna proba prema pravilniku' },
    ],
    pg12t: [
      { label: 'Tip', value: 'PG 12 Tandem' },
      { label: 'Broj odobrenja (tip)', value: 'SP-58/93' },
      { label: 'Kapacitet gašenja', value: '55A 233B C' },
      { label: 'Sredstvo za gašenje', value: 'Neutrex super SP 89/08' },
      { label: 'Pogonski plin', value: 'Dušik; 15 +0,5 bar pri 20 °C; rosište min. −40 °C' },
      { label: 'Punjenje praha', value: 'Neutrex super 25 kg (kat. 313 656) – prema tablici u PDF-u' },
      { label: 'Umnožak tlaka × volumen', value: '< 1000 L·bar; unutarnji pregled 4 godine' },
    ],
  },
  warnings: [
    ...W,
    'Kod tandem izvedbe paziti na položaj sprinklera za bočnu stijenku nasuprot spojnici za vješanje; O-brtve 26×3 zamijeniti pri servisu; manometar O-brtva 7,65×1,78 i Loctite 648 prema uputi.',
  ],
  sections: SECTIONS_PG_TANDEM,
}

/** KS 2 BG – čelik / aluminij (dva stupca u PDF-u) */
export const ks2BgParts = [
  r(1, 'Ventil s polugom bez uzlazne cijevi', { ks2Steel: '726 043', ks2Alu: '726 068' }),
  r(2, 'Osigurač', { ks2Steel: '142 101', ks2Alu: '142 101' }),
  r(3, 'Osiguranje od prsnuća – tlačna i signalna pločica', { ks2Steel: '411 221', ks2Alu: '411 437' }),
  r(5, 'Cijela mlaznica za pjenu / raspršivač', { ks2Steel: '411 065', ks2Alu: '411 065' }),
  r(6, 'Usponska cijev', { ks2Steel: '411 367', ks2Alu: '411 370' }),
  r(7, 'Naljepnica', { ks2Steel: '095 204', ks2Alu: '095 204' }),
  r(8, 'Okrugli prsten 25 × 3,55', { ks2Steel: '727 046', ks2Alu: '727 046' }),
  r(9, 'Žičani nosač', { ks2Steel: '411 416', ks2Alu: '411 363' }),
  r(null, 'Boca: čelik Ø105 mm / aluminij Ø111 mm M25×2', { ks2Steel: '—', ks2Alu: '—' }),
]

export const ks2BgExtinguisher = {
  id: '06-ks2bg',
  shortLabel: 'KS 2 BG',
  title: 'KS 2 BG',
  subtitle: 'CO₂ aparat (čelična ili aluminijska boca) – PDF str. 32–37',
  partVariants: [
    { key: 'ks2Steel', label: 'KS 2 BG čelik Ø105 mm' },
    { key: 'ks2Alu', label: 'KS 2 BG Al Ø111 mm M25×2' },
  ],
  defaultPartVariant: 'ks2Steel',
  parts: ks2BgParts,
  heroImage: {
    src: '/images/ks2bg-shema.png',
    alt: 'OPIS SHEME – KS 2 BG.',
    caption:
      'Shema (str. 33; naslovnica str. 32). *Raspršivač – priključak pomaknut 90°. Momenti: ventil/čelik 135 Nm, ventil/Al 108 Nm, Al M25×2 75 Nm; ploča protiv pucanja i mlaznica 25 Nm.',
  },
  productPhotos: {
    ks2Steel: {
      src: '/images/ks2bg-cover.png',
      alt: 'KS 2 BG – naslovnica poglavlja.',
      caption: 'Str. 32 PDF-a.',
    },
    ks2Alu: {
      src: '/images/ks2bg-cover.png',
      alt: 'KS 2 BG – naslovnica poglavlja.',
      caption: 'Isto poglavlje; odaberite stupac Al u tablici dijelova.',
    },
  },
  specsByVariant: {
    ks2Steel: [
      { label: 'Tip', value: 'KS 2 BG (čelik)' },
      { label: 'Broj dopuštenja primjene', value: 'P1-50/93 (K2-30) / P1-2/93 (K2-30) – prema tipskoj tablici' },
      { label: 'Volumen / učinak', value: '21 B / 34 B CO₂ – prema izvedbi na natpisu' },
      { label: 'Medij', value: 'CO₂; kontrola mase ±5 % nazivne; punjenje 2 kg −100 g' },
      { label: 'Umnožak', value: '< 1000 L·bar; tlačna proba prema pravilniku' },
    ],
    ks2Alu: [
      { label: 'Tip', value: 'KS 2 BG (aluminij M25×2)' },
      { label: 'Broj dopuštenja primjene', value: 'SP-40/95 (prema stupcu u PDF-u)' },
      { label: 'Medij', value: 'CO₂ – ista uputa; posebna pozornost na sigurnosna upozorenja za određene Al boce Tyco u PDF-u' },
      { label: 'Umnožak', value: '< 1000 L·bar' },
    ],
  },
  warnings: [
    ...W,
    'U PDF-u su opširna upozorenja za aluminijske CO₂ aparate 2 kg / 5 kg (Tyco, razdoblje proizvodnje) – provjeriti seriju i natpis prije servisa.',
  ],
  sections: SECTIONS_KS2_BG,
}

export const ks5BgParts = [
  r(1, 'Ventil bez usponske cijevi', { ks5bg: '726 043', ks5bgeuro: '726 068' }),
  r(2, 'Zaštitni zatik', { ks5bg: '142 101', ks5bgeuro: '142 101' }),
  r(3, 'Sigurnosni ventil s tlačnom i signalnom pločom', { ks5bg: '411 221', ks5bgeuro: '411 437' }),
  r(4, 'Brtvilo', { ks5bg: '727 030', ks5bgeuro: '727 030' }),
  r(5, 'Usponska cijev', { ks5bg: '411 366', ks5bgeuro: '411 371' }),
  r(6, 'Zatezna traka', { ks5bg: '201 160', ks5bgeuro: '201 173' }),
  r(7, 'Mlaznica s cijevi', { ks5bg: '411 368', ks5bgeuro: '411 368' }),
  r(8, 'Naljepnica', { ks5bg: '095 229', ks5bgeuro: '095 229' }),
  r(9, 'Držač', { ks5bg: '200 007', ks5bgeuro: '200 007' }),
  r(null, 'Držač za auto', { ks5bg: '200 596', ks5bgeuro: '200 509' }),
]

export const ks5BgExtinguisher = {
  id: '07-ks5bg',
  shortLabel: 'KS 5 BG / EURO',
  title: 'KS 5 BG, KS 5 BG EURO',
  subtitle: 'CO₂ aparati s gumenom cijevi – PDF str. 38–43',
  partVariants: [
    { key: 'ks5bg', label: 'KS 5 BG' },
    { key: 'ks5bgeuro', label: 'KS 5 BG EURO' },
  ],
  defaultPartVariant: 'ks5bg',
  parts: ks5BgParts,
  heroImage: {
    src: '/images/ks5bg-shema.png',
    alt: 'OPIS SHEME – KS 5 BG, KS 5 BG EURO.',
    caption:
      'Shema (str. 39; naslovnica str. 38). Momenti: ventil/čelik 135 Nm, ventil/Al 108 Nm, Al M25×2 75 Nm; zaštitna membrana 25 Nm; gumena cijev 25 Nm.',
  },
  productPhotos: {
    ks5bg: { src: '/images/ks5bg-cover.png', alt: 'KS 5 BG', caption: 'Str. 38 PDF-a.' },
    ks5bgeuro: { src: '/images/ks5bg-cover.png', alt: 'KS 5 BG EURO', caption: 'Isto poglavlje; EURO stupac u tablici.' },
  },
  specsByVariant: {
    ks5bg: [
      { label: 'Tip', value: 'KS 5 BG' },
      { label: 'Broj dopuštenja', value: 'SP-41/95' },
      { label: 'Izvedba', value: 'K5-30' },
      { label: 'Volumen / učinak', value: '89 B; CO₂; punjenje 5 kg −250 g' },
      { label: 'Umnožak', value: '> 1000 L·bar (prema tablici u PDF-u)' },
    ],
    ks5bgeuro: [
      { label: 'Tip', value: 'KS 5 BG EURO' },
      { label: 'Broj dopuštenja', value: 'P1-82/93' },
      { label: 'Izvedba', value: 'K5' },
      { label: 'Volumen / učinak', value: '55 B; CO₂' },
      { label: 'Umnožak', value: '> 1000 L·bar' },
    ],
  },
  warnings: [
    ...W,
    'U PDF-u upozorenje na određene aluminijske CO₂ aparate M25 (Tyco) – identificirati prije održavanja.',
  ],
  sections: SECTIONS_KS5_BG,
}

export const wdF500Parts = [
  r(1, 'Ventil', { wd3: '140 461', wd6: '140 461', wd9: '140 461' }),
  r(2, 'O-Ring', { wd3: '142 098', wd6: '142 098', wd9: '142 098' }),
  r(3, 'Osigurač', { wd3: '142 101', wd6: '142 101', wd9: '142 101' }),
  r(4, 'Manometar', { wd3: '501 817', wd6: '501 817', wd9: '501 817' }),
  r(5, 'O-Ring', { wd3: '727 017', wd6: '727 017', wd9: '727 017' }),
  r(6, 'Sig. ventil s o-ringom', { wd3: '142 077', wd6: '142 077', wd9: '142 077' }),
  r(7, 'Igla ventila', { wd3: '142 082', wd6: '142 082', wd9: '142 082' }),
  r(8, 'O-ring', { wd3: '142 093', wd6: '142 093', wd9: '142 093' }),
  r(9, 'Usponska cijev', { wd3: '446 632', wd6: '446 828', wd9: '446 830' }),
  r(10, 'Cjedilo', { wd3: '446 752', wd6: '446 752', wd9: '446 752' }),
  r(11, 'O-Ring', { wd3: '727 004', wd6: '727 004', wd9: '727 004' }),
  r(12, 'Crijevo mlaznice', { wd3: '550 893', wd6: '550 402', wd9: '550 402' }),
  r(13, 'Mlaznica', { wd3: '552 766', wd6: '552 766', wd9: '552 766' }),
  r(14, 'Držač mlaznice', { wd3: '551 405', wd6: '551 405', wd9: '551 405' }),
  r(15, 'Naljepnica upute', { wd3: '446 752', wd6: '446 752', wd9: '446 752' }),
  r(18, 'Naljepnica za servis sredstva', { wd3: '732 140', wd6: '732 140', wd9: '732 140' }),
  r(null, 'Plastična podnica', { wd3: '201 130', wd6: '201 122', wd9: '201 149' }),
  r(null, 'Sredstvo F-500 20L / 2L', { wd3: '667 052', wd6: '667 052', wd9: '667 052-2' }),
]

export const wdF500Extinguisher = {
  id: '08-wd-f500',
  shortLabel: 'WD F-500',
  title: 'WD3, WD6, WD9 F-500',
  subtitle: 'Voda + aditiv F-500 – PDF str. 44–49',
  partVariants: [
    { key: 'wd3', label: 'WD3' },
    { key: 'wd6', label: 'WD6' },
    { key: 'wd9', label: 'WD9' },
  ],
  defaultPartVariant: 'wd3',
  parts: wdF500Parts,
  heroImage: {
    src: '/images/wd-f500-shema.png',
    alt: 'OPIS SHEME – WD3 / WD6 / WD9 F-500.',
    caption:
      'Shema (str. 45; naslovnica str. 44). Ventil 35–50 Nm; crijevo 7,5 Nm; punjenje N₂ 18 +0,5 bar.',
  },
  productPhotos: {
    wd3: { src: '/images/wd-f500-cover.png', alt: 'WD F-500', caption: 'Str. 44 PDF-a.' },
    wd6: { src: '/images/wd-f500-cover.png', alt: 'WD F-500', caption: 'Isto poglavlje.' },
    wd9: { src: '/images/wd-f500-cover.png', alt: 'WD F-500', caption: 'Isto poglavlje.' },
  },
  specsByVariant: {
    wd3: [
      { label: 'Tip', value: 'WD3 F-500' },
      { label: 'Odobrenje', value: 'SP 06/01' },
      { label: 'Učinak (EN3)', value: '8A' },
      { label: 'Volumen', value: '3 L' },
      { label: 'Punjenje', value: '2,94 l voda + 0,06 l F-500; zamjena nakon 6 godina' },
      { label: 'Pogonski plin', value: 'Dušik 18 +0,5 bar; adapter 000 176; O-brtva ventila 33×3,5' },
      { label: 'Umnožak', value: '< 1000 L·bar; unutarnji pregled 4 godine' },
    ],
    wd6: [
      { label: 'Tip', value: 'WD6 F-500' },
      { label: 'Odobrenje', value: 'SP 07/01' },
      { label: 'Učinak', value: '27A' },
      { label: 'Volumen', value: '6 L' },
      { label: 'Punjenje', value: '5,88 l voda + 0,12 l F-500' },
      { label: 'Pogonski plin', value: 'Dušik 18 +0,5 bar' },
      { label: 'Umnožak', value: '< 1000 L·bar' },
    ],
    wd9: [
      { label: 'Tip', value: 'WD9 F-500' },
      { label: 'Odobrenje', value: 'SP 62/11' },
      { label: 'Učinak', value: '27A' },
      { label: 'Volumen', value: '9 L' },
      { label: 'Punjenje', value: '8,82 l voda + 0,18 l F-500' },
      { label: 'Pogonski plin', value: 'Dušik 18 +0,5 bar' },
      { label: 'Umnožak', value: '< 1000 L·bar' },
    ],
  },
  warnings: W,
  sections: SECTIONS_WD_F500,
}

export const sDnParts = [
  r(1, 'Osigurač', { s6dn: '142 101', s9dn: '142 101' }),
  r(2, 'Manometar', { s6dn: '501 817', s9dn: '501 817' }),
  r(3, 'Vreteno s O-brtvom', { s6dn: '142 082', s9dn: '142 082' }),
  r(4, 'Ventil bez manometra', { s6dn: '140 423', s9dn: '140 423' }),
  r(5, 'O-brtva 33 × 3,5', { s6dn: '142 098', s9dn: '142 098' }),
  r(6, 'Usponska cijev', { s6dn: '446 828', s9dn: '446 830' }),
  r(7, 'Cijev s mlaznicom KPL', { s6dn: '550 870', s9dn: '550 870' }),
  r(8, 'Držač za cijev', { s6dn: '551 405', s9dn: '551 405' }),
  r(9, 'O-brtva', { s6dn: '727 017', s9dn: '727 017' }),
  r(10, 'Zidni nosač', { s6dn: '200 007', s9dn: '200 007' }),
  r(11, 'Pjenasta cijev / cjedilo', { s6dn: '552 750 / 552 731', s9dn: '552 750 / 552 731' }),
  r(12, 'Naljepnica', { s6dn: '732 138', s9dn: '732 140' }),
  r(13, 'Podizač ventila s O-brtvom 1,2 × 1,9', { s6dn: '142 077', s9dn: '142 077' }),
  r(14, 'O-brtva 7,8 × 2,1', { s6dn: '142 093', s9dn: '142 093' }),
  r(15, 'Cjedilo za umetanje', { s6dn: '446 752', s9dn: '446 752' }),
  r(16, 'Naljepnica za servis sredstva', { s6dn: '732 140', s9dn: '732 140' }),
  r(null, 'Plastična podnica / nosač za vozilo', { s6dn: '201 122 / 200 590', s9dn: '201 149 / —' }),
  r(null, 'Napomena', { s6dn: 'Vrsta eco / classic / premium / HR mijenja naljepnice i sredstvo – vidi PDF str. 52–55', s9dn: 'Isto' }),
]

export const sDnExtinguisher = {
  id: '09-s-dn',
  shortLabel: 'S 6 / 9 DN',
  title: 'S 6 DN, S 9 DN',
  subtitle: 'Pjena / otopine Neufoam – PDF str. 50–55',
  partVariants: [
    { key: 's6dn', label: 'S 6 DN' },
    { key: 's9dn', label: 'S 9 DN' },
  ],
  defaultPartVariant: 's6dn',
  parts: sDnParts,
  heroImage: {
    src: '/images/s-dn-shema.png',
    alt: 'OPIS SHEME – S 6 DN, S 9 DN.',
    caption:
      'Shema (str. 51; fotografija / naslovnica str. 50). Više podtipova (eco, classic, premium, HR) – kataloški brojevi u tablici u PDF-u (npr. str. 52 i dalje).',
  },
  productPhotos: {
    s6dn: { src: '/images/s-dn-cover.png', alt: 'S 6 DN', caption: 'Str. 50.' },
    s9dn: { src: '/images/s-dn-cover.png', alt: 'S 9 DN', caption: 'Str. 50.' },
  },
  specsByVariant: {
    s6dn: [
      { label: 'Tip (primjer eco)', value: 'S 6 DN eco' },
      { label: 'Odobrenje', value: 'SP 06/01; izvedba S 6 L-0' },
      { label: 'Kapacitet', value: '27A 144B (prema tablici; classic/premium/HR se razlikuju)' },
      { label: 'Punjenje (eco)', value: '6 L −0,30 L; Neufoam eco + zabrana miješanja' },
      { label: 'Pogonski plin', value: 'Dušik 18 +0,5 bar' },
      { label: 'Intervali', value: 'Umnožak <1000; unutarnji 5 god.; tlačna 10 god. (prema tablici)' },
    ],
    s9dn: [
      { label: 'Tip (primjer eco)', value: 'S 9 DN eco' },
      { label: 'Odobrenje', value: 'SP 07/01; S 9 L-0' },
      { label: 'Kapacitet', value: '34A 183B' },
      { label: 'Punjenje (eco)', value: '9 l −0,45 l' },
      { label: 'Pogonski plin', value: 'Dušik 18 +0,5 bar' },
      { label: 'Momenti', value: 'Ventil 35–50 Nm; crijevo 7,5 Nm' },
    ],
  },
  warnings: W,
  sections: SECTIONS_S_DN,
}

export const fluorineFreeParts = [
  r(1, 'Ventil', { ff06: '140 461', ff09: '140 461' }),
  r(2, 'Osigurač', { ff06: '142 101', ff09: '142 101' }),
  r(3, 'O-ring ventila', { ff06: '142 098', ff09: '142 098' }),
  r(4, 'O-ring crijeva mlaznice', { ff06: '727 019', ff09: '727 019' }),
  r(5, 'Crijevo mlaznice', { ff06: '550 402', ff09: '550 402' }),
  r(6, 'Držač crijeva', { ff06: '551 405', ff09: '551 405' }),
  r(7, 'O-ring crijeva mlaznice', { ff06: '727 019', ff09: '727 019' }),
  r(8, 'Mlaznica', { ff06: '552 770', ff09: '552 770' }),
  r(9, 'Manometar', { ff06: '501 817', ff09: '501 817' }),
  r(10, 'O-ring manometra', { ff06: '727 003', ff09: '727 003' }),
  r(11, 'Sigurnosni ventil s O-ringom', { ff06: '142 077', ff09: '142 077' }),
  r(12, 'O-ring', { ff06: '142 093', ff09: '142 093' }),
  r(13, 'Usponska cijev', { ff06: '446 828', ff09: '446 830' }),
  r(14, 'Sito', { ff06: '—', ff09: '—' }),
  r(15, 'Igla ventila', { ff06: '142 082', ff09: '142 082' }),
  r(16, 'Naljepnica upute', { ff06: '097 850', ff09: '097 851' }),
  r(17, 'Naljepnica servisa sredstva', { ff06: '732 140', ff09: '732 140' }),
  r(18, 'Nosač aparata', { ff06: '200 007', ff09: '200 007' }),
  r(19, 'Plastična podnica', { ff06: '201 122', ff09: '201 149' }),
  r(20, 'Pjenilo FF premix', { ff06: '312 071', ff09: '312 072' }),
]

export const fluorineFreeExtinguisher = {
  id: '10-fluorinefree',
  shortLabel: 'FluorineFree FSP',
  title: 'FluorineFree 06/09 FSP',
  subtitle: 'FSP 6 / FSP 9 – PDF str. 56–61',
  partVariants: [
    { key: 'ff06', label: 'FSP 6' },
    { key: 'ff09', label: 'FSP 9' },
  ],
  defaultPartVariant: 'ff06',
  parts: fluorineFreeParts,
  heroImage: {
    src: '/images/fluorinefree-shema.png',
    alt: 'OPIS SHEME – FluorineFree FSP 6 / 9.',
    caption:
      'Shema (str. 57; naslovnica str. 56). Servisni postupci kao za slične vodene/pjenaste aparate (adapter 000 176, 18 +0,5 bar).',
  },
  productPhotos: {
    ff06: { src: '/images/fluorinefree-cover.png', alt: 'FSP 6', caption: 'Str. 56.' },
    ff09: { src: '/images/fluorinefree-cover.png', alt: 'FSP 9', caption: 'Str. 56.' },
  },
  specsByVariant: {
    ff06: [
      { label: 'Tip', value: 'FSP 6' },
      { label: 'Medij', value: 'Pjenilo fluorine-free premix (kat. 312 071)' },
      { label: 'Umnožak / intervali', value: 'Prema tablici na str. 59 (kao S DN eco)' },
    ],
    ff09: [
      { label: 'Tip', value: 'FSP 9' },
      { label: 'Medij', value: 'Pjenilo FF premix 9 l (kat. 312 072)' },
      { label: 'Umnožak / intervali', value: 'Prema tablici u PDF-u' },
    ],
  },
  warnings: W,
  sections: SECTIONS_FLUORINEFREE_FSP,
}

/** S 6 SK / S 9 SK – opći dijelovi (6 l / 9 l stupci); detalji podtipova na slikama PDF str. 62–71 */
export const sSkParts = [
  r(1, 'Osigurač', { s6sk: '142 189', s9sk: '142 189' }),
  r(2, 'K-ventil s pritisnim tipkalom (bez uzlazne cijevi, bez boce)', { s6sk: '726 060', s9sk: '726 060' }),
  r(3, 'Preturna matica crna', { s6sk: '502 487', s9sk: '502 487' }),
  r(4, 'Uzbudna cijev', { s6sk: '108 777', s9sk: '108 777' }),
  r(5, 'Bočica CO₂ 50 g / 55 g', { s6sk: '102 935 / 102 936', s9sk: '102 935 / 102 936' }),
  r(6, 'Crijevo s pištoljem (žuta / zelena)', { s6sk: '550 680 / 550 685', s9sk: '550 680 / 550 685' }),
  r(7, 'Stezaljka za crijevo', { s6sk: '551 405', s9sk: '551 405' }),
  r(8, 'Uzlazna cijev (463 / 424 mm)', { s6sk: '446 838', s9sk: '446 839' }),
  r(9, 'Tijelo mlaznice', { s6sk: '—', s9sk: '—' }),
  r(10, 'Cjedilo za umetanje', { s6sk: '446 752', s9sk: '446 752' }),
  r(11, 'Nosač za vozilo Ø150 / Ø190', { s6sk: '200 590', s9sk: '200 082' }),
  r(13, 'Naljepnica u boji (svitak)', { s6sk: '732 228', s9sk: '732 228' }),
  r(null, 'Za tip SK / SK eco / SKC… naljepnice i mlaznice se razlikuju – detaljno na slikama PDF str. 64–71', {
    s6sk: '—',
    s9sk: '—',
  }),
]

const S_SK_GALLERY_CAPTIONS = {
  64: 'Tablice dijelova i podtipovi (SK, SK eco, SKC…).',
  65: 'Nastavak poglavlja – upute i ilustracije (PDF).',
  66: 'Nastavak poglavlja – upute i ilustracije (PDF).',
  67: 'Nastavak poglavlja – upute i ilustracije (PDF).',
  68: 'SKP patrona, Inilam / Neufoam, posebne upute.',
  69: 'Nastavak upute (PDF).',
  70: 'Nastavak upute (PDF).',
  71: 'Završne stranice (pomorska odobrenja i napomene).',
}

const sSkExtraFigures = [64, 65, 66, 67, 68, 69, 70, 71].map((p) => ({
  src: `/images/s-sk-page-${p}.png`,
  alt: `S 6 SK / S 9 SK – stranica ${p} servisne upute (PDF).`,
  label: `PDF str. ${p}`,
  caption: S_SK_GALLERY_CAPTIONS[p],
  ariaLabel: `Povećaj stranicu ${p} iz upute`,
}))

export const sSkExtinguisher = {
  id: '11-s-sk',
  shortLabel: 'S 6 / 9 SK',
  title: 'S 6 SK, S 9 SK',
  subtitle: 'Voda / pjena / CO₂ pogonska boca – PDF str. 62–71',
  partVariants: [
    { key: 's6sk', label: 'S 6 SK' },
    { key: 's9sk', label: 'S 9 SK' },
  ],
  defaultPartVariant: 's6sk',
  parts: sSkParts,
  heroImage: {
    src: '/images/s-sk-page-63.png',
    alt: 'S 6 SK / S 9 SK – shema / crtež (PDF str. 63).',
    caption:
      'Str. 63: shema armature (brojevi na crtežu). Ostatak poglavlja (tablice podtipova, SKP, pomorska odobrenja) na str. 64–71 – minijature ispod; puni pregled klikom.',
  },
  productPhotos: {
    s6sk: {
      src: '/images/s-sk-page-62.png',
      alt: 'S 6 SK – naslovnica poglavlja (PDF str. 62).',
      caption: 'Fotografija / naslovnica poglavlja (PDF str. 62).',
    },
    s9sk: {
      src: '/images/s-sk-page-62.png',
      alt: 'S 9 SK – ista naslovnica poglavlja (PDF str. 62).',
      caption: 'Ista stranica kao za S 6 SK (PDF str. 62); razlike u tablici i na aparatu.',
    },
  },
  extraFigures: sSkExtraFigures,
  specsByVariant: {
    s6sk: [
      { label: 'Tip (primjer)', value: 'S 6 SK' },
      { label: 'Odobrenje', value: 'SP 10/10' },
      { label: 'Područje', value: '0 °C – +60 °C' },
      { label: 'Rejting', value: '13A 144B' },
      { label: 'Punjenje', value: '5,64 l voda + 0,36 l Neufoam X; CO₂ 50 g (−5 g)' },
      {
        label: 'Slike poglavlja',
        value: 'Cijelo poglavlje u aplikaciji: PDF str. 62–71 (naslovnica 62, shema 63, ostalo u galeriji).',
      },
    ],
    s9sk: [
      { label: 'Tip (primjer)', value: 'S 9 SK' },
      { label: 'Odobrenje', value: 'SP 11/10' },
      { label: 'Rejting', value: '21A 233B' },
      { label: 'Punjenje', value: '8,46 l voda + 0,54 l Neufoam X; CO₂ 55 g (−5 g)' },
      {
        label: 'Slike poglavlja',
        value: 'Cijelo poglavlje u aplikaciji: PDF str. 62–71 (naslovnica 62, shema 63, ostalo u galeriji).',
      },
    ],
  },
  warnings: [
    ...W,
    'Posebne napomene za SKP patronu, Inilam/Neufoam i pomorska odobrenja su u tekstu uputa (odjeljak 1.6.2) i na slici PDF str. 68.',
  ],
  sections: SECTIONS_S_SK,
}

export const f2lParts = [
  r(1, 'Sigurnosni osigurač', { f2l: '142 101' }),
  r(2, 'Manometar', { f2l: '501 817' }),
  r(4, 'Ventil s polugom / bez manometra', { f2l: '140 435' }),
  r(5, 'O-brtva 33 × 3,5', { f2l: '142 098' }),
  r(6, 'Usponska cijev', { f2l: '446 835' }),
  r(7, 'Mlaznica', { f2l: '552 111' }),
  r(8, 'Držač', { f2l: '200 591' }),
  r(9, 'O-brtva 7,65 × 1,78', { f2l: '727 017' }),
  r(11, 'Naljepnica', { f2l: '081 103' }),
  r(12, 'Podizač ventila s O-brtvom 1,2 × 1,9', { f2l: '142 077' }),
  r(13, 'O-brtva 7,8 × 2,1', { f2l: '142 093' }),
  r(14, 'Cjedilo za umetanje', { f2l: '446 752' }),
  r(15, 'Naljepnica za servis', { f2l: '732 140' }),
  r(null, 'Neufoam M', { f2l: '300 415 (6 l) / 300 417 (9 l) – F 2 L koristi 2 l punjenje' }),
]

export const f2lExtinguisher = {
  id: '12-f-2l',
  shortLabel: 'F 2 L',
  title: 'F 2 L',
  subtitle: 'Mokri kemijski aparat – PDF str. 72–76',
  partVariants: [{ key: 'f2l', label: 'F 2 L' }],
  defaultPartVariant: 'f2l',
  parts: f2lParts,
  heroImage: {
    src: '/images/f2l-shema.png',
    alt: 'OPIS SHEME – F 2 L.',
    caption: 'Shema (str. 73; naslovnica str. 72). Ventil 35–50 Nm.',
  },
  productPhotos: {
    f2l: { src: '/images/f2l-cover.png', alt: 'F 2 L', caption: 'Str. 72.' },
  },
  specsByVariant: {
    f2l: [
      { label: 'Tip', value: 'F 2 L' },
      { label: 'Odobrenje', value: 'SP-54/05' },
      { label: 'Učinak', value: '5A' },
      { label: 'Sredstvo', value: 'Neufoam M (PL-12/97)' },
      { label: 'Punjenje', value: '2 L −0,1 L; zamjena nakon 6 godina' },
      { label: 'Područje', value: '0 °C – +60 °C' },
      { label: 'Pogonski plin', value: 'Dušik 18 +0,5 bar' },
      { label: 'Umnožak', value: '< 1000 L·bar; unutarnji pregled 4 godine' },
    ],
  },
  warnings: [...W, 'Namijenjeno klasama na natpisu – F klasa masti i ulja.'],
  sections: SECTIONS_F2L,
}

export const f6lParts = [
  r(1, 'Osigurač', { f6l: '142 101' }),
  r(2, 'Manometar', { f6l: '501 817' }),
  r(5, 'O-brtva 26 × 3', { f6l: '142 098' }),
  r(6, 'Usponska cijev s cjedilom', { f6l: '446 828' }),
  r(7, 'Cijev s držačem', { f6l: '550 402' }),
  r(8, 'Držač crijeva mlaznice', { f6l: '551 405' }),
  r(9, 'Okrugli prsten 7,65 × 1,78', { f6l: '727 017' }),
  r(10, 'Zidni držač', { f6l: '200 007' }),
  r(11, 'Mlaznica', { f6l: '552 111' }),
  r(12, 'Naljepnica', { f6l: '080 107' }),
  r(15, 'Cjedilo', { f6l: '446 752' }),
  r(null, 'Plastična stopa', { f6l: '201 130' }),
  r(null, 'Držač vozila', { f6l: '200 074' }),
  r(null, 'Neufrol M', { f6l: '300 415 / 300 417' }),
]

export const f6lExtinguisher = {
  id: '13-f-6l',
  shortLabel: 'F 6 L',
  title: 'F 6 L',
  subtitle: 'Mokri kemijski aparat s crijevom – PDF str. 78–83',
  partVariants: [{ key: 'f6l', label: 'F 6 L' }],
  defaultPartVariant: 'f6l',
  parts: f6lParts,
  heroImage: {
    src: '/images/f6l-shema.png',
    alt: 'OPIS SHEME – F 6 L.',
    caption:
      'Shema (str. 79; naslovnica str. 78). Ventil 50 Nm; crijevo 20 Nm (ventil za uvrtanje) ili 7,5 Nm (preturna matica).',
  },
  productPhotos: {
    f6l: { src: '/images/f6l-cover.png', alt: 'F 6 L', caption: 'Str. 78.' },
  },
  specsByVariant: {
    f6l: [
      { label: 'Tip', value: 'F 6 L' },
      { label: 'Odobrenje', value: 'P1-13/94 / SP-29/2000; W 6 L-0' },
      { label: 'Učinak', value: '13A' },
      { label: 'Sredstvo', value: 'Neufrol M (PL-12/87)' },
      { label: 'Punjenje', value: '6 l −0,30 l; rok sredstva 10 godina (prema uputi)' },
      { label: 'Područje', value: '0 °C – +60 °C' },
      { label: 'Pogonski plin', value: 'Dušik 15 +0,5 bar' },
      { label: 'Intervali', value: 'Umnožak <1000; unutarnji 5 god.; tlačna 10 god.' },
    ],
  },
  warnings: W,
  sections: SECTIONS_F6L,
}

export const w6WnaParts = [
  r(1, 'Sigurnosna obujmica', { w6wna: '142 189' }),
  r(2, 'K-ventil s pritisnom tipkom (komplet bez uzlazne cijevi i boce)', { w6wna: '726 060' }),
  r(3, 'Preturna matica crna', { w6wna: '502 487' }),
  r(4, 'Sustav usponske cijevi u cijelosti', { w6wna: '446 845' }),
  r(5, 'Čelična boca 160 g', { w6wna: '102 938 / 102 978' }),
  r(6, 'Cijev za ispuhivanje u cijelosti', { w6wna: '108 777' }),
  r(7, 'Cijev s pištoljem i mlaznicom (plava poluga)', { w6wna: '550 689' }),
  r(8, 'Naljepnica', { w6wna: '080 520 / 080 523' }),
  r(10, 'Tijelo mlaznice', { w6wna: '552 694' }),
  r(11, 'Spojni prsten', { w6wna: '727 019' }),
  r(12, 'Prsten za stabilizaciju', { w6wna: '727 012' }),
  r(13, 'Utična plomba plava', { w6wna: '142 193' }),
  r(14, 'Ploča protiv pucanja Ø14', { w6wna: '111 389' }),
  r(null, 'Tablete protiv onečišćavanja', { w6wna: '730 051' }),
  r(null, 'Držač / prsten Ø190', { w6wna: '200 082 / 201 149' }),
]

export const w6WnaExtinguisher = {
  id: '14-w6-wna',
  shortLabel: 'W 6 WNA',
  title: 'W 6 WNA',
  subtitle: 'Voda + tableta – CO₂ 160 g – PDF str. 84–89',
  partVariants: [{ key: 'w6wna', label: 'W 6 WNA' }],
  defaultPartVariant: 'w6wna',
  parts: w6WnaParts,
  heroImage: {
    src: '/images/w6wna-shema.png',
    alt: 'Rezervni dijelovi – W 6 WNA.',
    caption:
      'Shema (str. 85; naslovnica str. 84). Zatvarač 30 Nm; čelična boca 20 Nm; gumena cijev 10 Nm. DIN EN 3: SP 151/11.',
  },
  productPhotos: {
    w6wna: { src: '/images/w6wna-cover.png', alt: 'W 6 WNA', caption: 'Str. 84.' },
  },
  specsByVariant: {
    w6wna: [
      { label: 'Tip', value: 'W 6 WNA' },
      { label: 'Punjenje', value: '6,0 l voda + 1 tableta za konzerviranje; tolerancija −0,30 l; rok 2 godine' },
      { label: 'Pogonski plin', value: 'CO₂ 160 g (−10 g)' },
      { label: 'Odobrenje', value: 'SP 151/11 (DIN EN 3)' },
      { label: 'Izolacija', value: 'Mjerenje otpora uređajem 000 150 – prema uputi str. 87–88' },
    ],
  },
  warnings: W,
  sections: SECTIONS_W6_WNA,
}

/** OPIS SHEME / REZERVNI DIJELOVI – PDF str. 94 (stupac BR. NARUDŽBE). */
export const pg50LmParts = [
  r(1, 'Sigurnosni zatik', { pg50lm: '141 553' }),
  r(2, 'Manometar', { pg50lm: '713 040' }),
  r(3, 'Kompletni ventil', { pg50lm: '713 000' }),
  r(4, 'Brtveni prsten 45 × 5', { pg50lm: '727 047' }),
  r(null, 'Brtveni prsten 20 × 2,5', { pg50lm: '727 048' }),
  r(null, 'Plosnata brtva', { pg50lm: '727 049' }),
  r(5, 'Usponska cijev', { pg50lm: '713 050' }),
  r(6, 'Crijevo 5 m', { pg50lm: '713 010' }),
  r(7, 'Mlaznica', { pg50lm: '713 020' }),
  r(8, 'Etiketa', { pg50lm: '093 455' }),
  r(9, 'Kotač 300 mm', { pg50lm: '713 030' }),
  r(10, 'Sredstvo za gašenje: Neutrex super (od 25 kg)', { pg50lm: '713 058' }),
]

const PG50_LM_GALLERY_CAPTIONS = {
  94: 'Tablica OPIS SHEME – BR. NARUDŽBE (isti podaci u „Rezervni dijelovi“ ispod).',
  95: 'Upute i ilustracije iz PDF-a.',
  96: 'Upute i ilustracije iz PDF-a.',
  97: 'Završne stranice poglavlja (momenti, napomene).',
}

const pg50LmExtraFigures = [94, 95, 96, 97].map((p) => ({
  src: `/images/pg50lm-page-${p}.png`,
  alt: `PG 50 LM – stranica ${p} servisne upute (PDF).`,
  label: `PDF str. ${p}`,
  caption: PG50_LM_GALLERY_CAPTIONS[p],
  ariaLabel: `Povećaj stranicu ${p} iz upute`,
}))

export const pg50LmExtinguisher = {
  id: '15-pg50-lm',
  shortLabel: 'PG 50 LM',
  title: 'PG 50 LM',
  subtitle: 'Mobilni aparat na prahu – PDF str. 92–97 (KLALEDA Servisne upute 2026)',
  partVariants: [{ key: 'pg50lm', label: 'PG 50 LM' }],
  defaultPartVariant: 'pg50lm',
  parts: pg50LmParts,
  heroImage: {
    src: '/images/pg50lm-page-93.png',
    alt: 'PG 50 LM – shema / crtež (PDF str. 93).',
    caption:
      'Str. 93: shema armature (brojevi na crtežu). Tablica rezervnih dijelova s BR. NARUDŽBE je na str. 94 – unesena je u popis ispod.',
  },
  productPhotos: {
    pg50lm: {
      src: '/images/pg50lm-page-92.png',
      alt: 'PG 50 LM – naslovnica poglavlja (PDF str. 92).',
      caption: 'Fotografija / naslovnica poglavlja iz PDF-a (str. 92).',
    },
  },
  extraFigures: pg50LmExtraFigures,
  specsByVariant: {
    pg50lm: [
      { label: 'Tip', value: 'PG 50 LM – mobilni (LM) aparat na suhom prahu' },
      {
        label: 'Medij',
        value: 'Suhi prah klase ABC (npr. Neutrex); točan tip i odobrenje – s natpisa na spremniku',
      },
      {
        label: 'Punjenje praha',
        value: 'Reda veličine 50 kg; točna nazivna masa i tolerancija – s tipske tablice / natpisa (vidi PDF str. 92–97)',
      },
      {
        label: 'Pogonski plin',
        value: 'Najčešće dušik; radni tlak i postupak punjenja – prema uputi i tablici u PDF-u',
      },
      {
        label: 'Kapacitet gašenja / certifikacija',
        value: 'Prema EN 1866 i oznakama na aparatu (klase A, B, C – potvrditi na tipskoj pločici)',
      },
      {
        label: 'Radno područje (orijentacijski)',
        value: 'Tipično −30 °C … +60 °C za slične TOTAL / FLN LM modele – uvijek uskladiti s natpisom na aparatu',
      },
      {
        label: 'Masa i ergonomija',
        value:
          'Ukupna masa aparata velika (reda desetaka kg + prah); pri servisu koristiti dizalicu / dvije osobe, kočiti točkove',
      },
      {
        label: 'Crijevo',
        value: 'Visokotlačno crijevo dužine prema tipu; cjelovit pregled u točki 1.2. servisne upute',
      },
      {
        label: 'Intervali',
        value:
          'Periodični pregled godišnje; unutarnji pregled i tlačna proba spremnika prema pravilniku o posudama pod tlakom i uputi za veliki spremnik',
      },
      {
        label: 'Izvor podataka',
        value:
          'Rezervni dijelovi i šifre (BR. NARUDŽBE) preuzeti s PDF str. 94; slike poglavlja str. 92–97.',
      },
    ],
  },
  warnings: [
    ...W,
    'Mobilni aparat velike mase: osigurati stabilnost na servisnom podu, kočenje kotura i siguran rad ispod tereta.',
  ],
  sections: SECTIONS_PG50_LM,
}

export const p1Parts = [
  r(1, 'Ventil', { p1: '1070C' }),
  r(null, 'O-ring ventila', { p1: 'P1-OR' }),
  r(2, 'Usponska cijev', { p1: 'DT-16-10-250' }),
  r(4, 'Mlaznica', { p1: 'P1-002' }),
  r(5, 'Naljepnica', { p1: 'P1-S' }),
  r(6, 'Manometar', { p1: '23A038' }),
  r(7, 'Zatik osigurača', { p1: 'P1-003' }),
  r(8, 'Nosač', { p1: 'P1-004' }),
  r(null, 'Prah ABC-30%', { p1: 'PWD30' }),
]

export const p1Extinguisher = {
  id: '16-p1',
  shortLabel: 'P1',
  title: 'P1 (TZ)',
  subtitle: 'Prijenosni aparat – PDF str. 98–102',
  partVariants: [{ key: 'p1', label: 'P1' }],
  defaultPartVariant: 'p1',
  parts: p1Parts,
  heroImage: {
    src: '/images/p1-shema.png',
    alt: 'OPIS SHEME – TZ P1.',
    caption: 'Shema (str. 99; naslovnica str. 98). Ventil 50 Nm. Punjenje praha 1 kg ± 20 g.',
  },
  productPhotos: {
    p1: { src: '/images/p1-cover.png', alt: 'P1', caption: 'Str. 98.' },
  },
  specsByVariant: {
    p1: [
      { label: 'Tip', value: 'P1' },
      { label: 'Odobrenje', value: 'KM718156' },
      { label: 'Kapacitet', value: '8A 34B C' },
      { label: 'Sredstvo', value: 'PRAH ABC-30%' },
      { label: 'Punjenje praha', value: '1 kg ± 20 g' },
      { label: 'Pogonski tlak', value: 'Dušik; na 20 °C max pad 10 %; min. 12,6 bar; regulator 15 +0,5 bar' },
      { label: 'Umnožak', value: '< 1000 L·bar; unutarnji 4 godine' },
    ],
  },
  warnings: W,
  sections: SECTIONS_P1,
}

export const pSeriesParts = [
  r(1, 'Ventil', { p2: '1101B', p6: '1101B', p9: '1101B' }),
  r(2, 'Usponska cijev', { p2: 'DT16-12-219', p6: 'DT16-12-410', p9: 'DT16-12-460' }),
  r(4, 'Mlaznica / crijevo', { p2: 'P2-001', p6: 'P6-002', p9: 'P9-002' }),
  r(5, 'Naljepnica', { p2: 'P2-S', p6: 'P6-S', p9: 'P9-S' }),
  r(6, 'Manometar', { p2: '23A038', p6: '23A038', p9: '23A038' }),
  r(7, 'Zatik osigurača', { p2: 'P1-003', p6: 'P1-003', p9: 'P1-003' }),
  r(8, 'Nosač', { p2: 'P2-002', p6: 'WH-02-05', p9: 'WH-02-05' }),
  r(9, 'Držač mlaznice', { p2: '—', p6: 'CL04-17-01', p9: 'CL04-17-01' }),
  r(null, 'Prah ABC 30%', { p2: 'PED30', p6: 'PED30', p9: 'PWD30' }),
]

export const pSeriesExtinguisher = {
  id: '17-p2-p6-p9',
  shortLabel: 'P2 / P6 / P9',
  title: 'P2, P6, P9 (TZ)',
  subtitle: 'Prijenosni aparati s prahom i crijevom – PDF str. 104–109',
  partVariants: [
    { key: 'p2', label: 'P2' },
    { key: 'p6', label: 'P6' },
    { key: 'p9', label: 'P9' },
  ],
  defaultPartVariant: 'p2',
  parts: pSeriesParts,
  heroImage: {
    src: '/images/p-series-shema.png',
    alt: 'OPIS SHEME – TZ P2 / P6 / P9.',
    caption: 'Shema (str. 105; naslovnica str. 104). Ventil 50 Nm; gumena cijev 20 Nm.',
  },
  productPhotos: {
    p2: { src: '/images/p-series-cover.png', alt: 'P2 P6 P9', caption: 'Str. 104.' },
    p6: { src: '/images/p-series-cover.png', alt: 'P2 P6 P9', caption: 'Str. 104.' },
    p9: { src: '/images/p-series-cover.png', alt: 'P2 P6 P9', caption: 'Str. 104.' },
  },
  specsByVariant: {
    p2: [
      { label: 'Tip', value: 'P2' },
      { label: 'Odobrenje', value: 'KM718156' },
      { label: 'Kapacitet', value: '13A 70B C' },
      { label: 'Punjenje praha', value: '2 kg ± 40 g' },
      { label: 'Pogonski tlak', value: 'Dušik; min. 13,5 bar pri 20 °C; 15 +0,5 bar punjenje' },
    ],
    p6: [
      { label: 'Tip', value: 'P6' },
      { label: 'Odobrenje', value: 'KM718156' },
      { label: 'Kapacitet', value: '43A 233B C' },
      { label: 'Punjenje praha', value: '6 kg ± 120 g' },
    ],
    p9: [
      { label: 'Tip', value: 'P9' },
      { label: 'Odobrenje', value: 'KM718156' },
      { label: 'Kapacitet', value: '55A 233B C' },
      { label: 'Punjenje praha', value: '9 kg ± 180 g' },
    ],
  },
  warnings: W,
  sections: SECTIONS_P_SERIES_TZ,
}

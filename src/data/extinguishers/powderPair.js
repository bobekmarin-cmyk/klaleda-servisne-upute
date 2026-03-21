/**
 * Servisne upute – informativni prikaz prema dokumentu KLALEDA.
 * Svaki red dijela: `code` je mapa šifri po varijanti (fx1/fx2 ili bs06/bs09/bs12).
 * `line` – tekst koji nije po varijanti (npr. zajedničko sredstvo).
 */

import { SECTIONS_FX1_FX2 } from './sections/fx1Fx2Sections.js'

export const fxParts = [
  { ref: 1, name: 'Zaštitna kapa ventila komplet', code: { fx1: '142 148', fx2: '142 148' } },
  { ref: 2, name: 'Plastična uvodnica', code: { fx1: '142 152', fx2: '142 152' } },
  { ref: 3, name: 'Mlaznica', code: { fx1: '142 158', fx2: '142 158' } },
  { ref: 4, name: 'Manometer', code: { fx1: '501 820', fx2: '501 820' } },
  { ref: 5, name: 'O-brtva manometra 7,65×1,78', code: { fx1: '727 017', fx2: '727 017' } },
  { ref: 6, name: 'Ventil komplet s manometrom, bez usponske cijevi', code: { fx1: '142 161', fx2: '142 161' } },
  { ref: 7, name: 'O-brtva ventila', code: { fx1: '727 045', fx2: '727 045' } },
  { ref: 8, name: 'Vijak s križnim utorom M5×20', code: { fx1: '734 131', fx2: '734 131' } },
  { ref: 9, name: 'Naljepnica', code: { fx1: '087 617', fx2: '087 618' } },
  { ref: 10, name: 'Usponska cijev', code: { fx1: '502 476', fx2: '502 477' } },
  { ref: 11, name: 'Nosač žičani', code: { fx1: '200 605', fx2: '200 606' } },
  { ref: null, name: 'Obujmica', code: { fx1: '201 230', fx2: '201 230' } },
  { ref: 12, name: 'Sigurnosni ventil', code: { fx1: '142 077', fx2: '142 077' } },
  {
    ref: null,
    name: 'Sredstvo za gašenje (Neutrex ABC-85 2 kg)',
    line: '313 651',
  },
]

export const bsParts = [
  { ref: 1, name: 'Osigurač', code: { bs06: '142 101', bs09: '142 101', bs12: '142 101' } },
  { ref: 2, name: 'Ventil s manometrom', code: { bs06: '140 490', bs09: '140 490', bs12: '140 490' } },
  { ref: 4, name: 'O-brtva ventila 26×3', code: { bs06: '142 094', bs09: '142 094', bs12: '142 094' } },
  {
    ref: 5,
    name: 'Usponska cijev',
    code: { bs06: '501 796', bs09: '501 797', bs12: '501 798' },
  },
  {
    ref: 6,
    name: 'Crijevo mlaznice',
    code: { bs06: '550 701', bs09: '550 702', bs12: '550 703' },
  },
  { ref: null, name: 'Nosač zidni', code: { bs06: '200 007', bs09: '200 007', bs12: '200 007' } },
  {
    ref: 9,
    name: 'Naljepnica',
    code: { bs06: '090 217', bs09: '090 218', bs12: '090 219' },
  },
  {
    ref: null,
    name: 'Sredstvo za gašenje (Neutrex ABC 50 E 6 kg)',
    line: '313 670',
  },
]

export const powderPair = [
  {
    id: 'fx1-fx2',
    shortLabel: 'FX1 / FX2',
    title: 'FX1, FX2',
    subtitle: 'Prijenosni vatrogasni aparati s prahom',
    partVariants: [
      { key: 'fx1', label: 'FX1' },
      { key: 'fx2', label: 'FX2' },
    ],
    defaultPartVariant: 'fx1',
    parts: fxParts,
    heroImage: {
      src: '/images/fx1-fx2-shema.png',
      alt: 'Shema aparata FX1 / FX2 (iz servisne upute).',
      caption:
        'Shema iz PDF-a (str. 5; fotografija poglavlja str. 4). Smanjen prikaz – odaberite točan tip za kataloške brojeve.',
    },
    productPhotos: {
      fx1: {
        src: '/images/fx1-fx2-cover.png',
        alt: 'FX1 / FX2 – fotografija iz poglavlja u PDF-u (str. 4).',
        caption: 'Fotografija iz PDF-a (str. 4): FX1, 1 kg ABC prah (TOTAL).',
      },
      fx2: {
        src: '/images/fx1-fx2-cover.png',
        alt: 'FX1 / FX2 – ista stranica u PDF-u (str. 4).',
        caption:
          'Ista stranica kao za FX1 (PDF str. 4). Zasebna fotografija FX2 u uputi nije; FX2: 2 kg praha, ista armatura.',
      },
    },
    specsByVariant: {
      fx1: [
        { label: 'Tip', value: 'FX1' },
        { label: 'Medij', value: 'Prah za gašenje (Neutrex ABC-85)' },
        { label: 'Punjenje praha', value: '1 kg ± 20 g' },
        {
          label: 'Pogonski plin',
          value:
            'Pogonski plin: dušik. Punjenje tlakom preko regulatora 15 +0,5 bar; minimalno rosište −40 °C. Kontrola na 20 °C: tlak ne smije pasti više od 10 % u odnosu na nazivnu vrijednost; minimalno dopušteno 12,6 bar.',
        },
        { label: 'Broj odobrenja (tip)', value: 'SP 36/06' },
        { label: 'Sredstvo za gašenje (odobrenje)', value: 'SP-35/06 Neutrex ABC-85' },
        { label: 'Kapacitet gašenja', value: '8A 34B C' },
        { label: 'Vrsta izvedbe / kratice', value: 'PG 1 L' },
        {
          label: 'Unutarnji pregled / tlačna proba',
          value: 'Unutarnji pregled 4 godine; umnožak tlaka i volumena < 1000 L×bar; tlačna proba spremnika 10 godina (sukladno pravilniku o posudama pod tlakom)',
        },
        { label: 'O-brtva ventila (montaža)', value: '28×2,5 – zamijeniti' },
        { label: 'O-brtva manometra', value: '7,65×1,78' },
        { label: 'Adapter ispitni ventil', value: 'Kataloški broj 000 176' },
        { label: 'Moment zatezanja', value: 'Ventil 50 Nm' },
      ],
      fx2: [
        { label: 'Tip', value: 'FX2' },
        { label: 'Medij', value: 'Prah za gašenje (Neutrex ABC-85)' },
        { label: 'Punjenje praha', value: '2 kg ± 40 g' },
        {
          label: 'Pogonski plin',
          value:
            'Pogonski plin: dušik. Punjenje tlakom preko regulatora 15 +0,5 bar; minimalno rosište −40 °C. Kontrola na 20 °C: tlak ne smije pasti više od 10 % u odnosu na nazivnu vrijednost; minimalno dopušteno 12,6 bar.',
        },
        { label: 'Broj odobrenja (tip)', value: 'SP 37/06' },
        { label: 'Sredstvo za gašenje (odobrenje)', value: 'SP-35/06 Neutrex ABC-85' },
        { label: 'Kapacitet gašenja', value: '13A 89B C' },
        { label: 'Vrsta izvedbe / kratice', value: 'PG 2 L' },
        {
          label: 'Unutarnji pregled / tlačna proba',
          value: 'Unutarnji pregled 4 godine; umnožak tlaka i volumena < 1000 L×bar; tlačna proba spremnika 10 godina (sukladno pravilniku o posudama pod tlakom)',
        },
        { label: 'O-brtva ventila (montaža)', value: '28×2,5 – zamijeniti' },
        { label: 'O-brtva manometra', value: '7,65×1,78' },
        { label: 'Adapter ispitni ventil', value: 'Kataloški broj 000 176' },
        { label: 'Moment zatezanja', value: 'Ventil 50 Nm' },
      ],
    },
    warnings: [
      'Servis dopušten samo kompetentnim, kvalificiranim ovlaštenim osobama (npr. DIN 14406-4).',
      'Koristiti samo odobrena sredstva za gašenje, pogonski plin i originalne FLN rezervne dijelove.',
    ],
    sections: SECTIONS_FX1_FX2,
  },
  {
    id: 'bs06-bs09',
    shortLabel: 'BS06 / BS09',
    title: 'BS06, BS09',
    subtitle: 'Prijenosni vatrogasni aparati s prahom (gumena cijev)',
    partVariants: [
      { key: 'bs06', label: 'BS06' },
      { key: 'bs09', label: 'BS09' },
      { key: 'bs12', label: 'BS12' },
    ],
    defaultPartVariant: 'bs06',
    parts: bsParts,
    heroImage: {
      src: '/images/bs06-bs09-shema.png',
      alt: 'Shema aparata BS06 / BS09 (iz servisne upute).',
      caption:
        'Shema iz PDF-a (str. 11; fotografija / naslovnica poglavlja str. 10). Odaberite BS06 / BS09 / BS12 za kataloške brojeve.',
    },
    productPhotos: {
      bs06: {
        src: '/images/bs06-bs09-cover.png',
        alt: 'BS06 / BS09 – fotografija iz poglavlja u PDF-u (str. 10).',
        caption: 'Fotografija iz PDF-a (str. 10): 6 kg ABC prah, gumena cijev (BS06).',
      },
      bs09: {
        src: '/images/bs06-bs09-cover.png',
        alt: 'BS – ista stranica u PDF-u (str. 10).',
        caption:
          'Ista stranica kao za BS06 (PDF str. 10). BS09 (9 kg): ista armatura i crijevo, veći spremnik praha.',
      },
      bs12: {
        src: '/images/bs06-bs09-cover.png',
        alt: 'BS – ista stranica u PDF-u (str. 10).',
        caption:
          'Ista stranica kao za BS06 (PDF str. 10). BS12: provjerite oznaku na aparatu i tablicu dijelova (uspon, crijevo).',
      },
    },
    specsByVariant: {
      bs06: [
        { label: 'Tip', value: 'BS06' },
        {
          label: 'Medij',
          value: 'Prah za gašenje (npr. Neutrex ABC 50 E; u uputi i Neutrex super / ABC 50 uz odgovarajuće odobrenje)',
        },
        { label: 'Punjenje praha', value: '6 kg ± 120 g' },
        {
          label: 'Pogonski plin',
          value:
            'Kontrola tlaka na 20 °C: ne smije pasti više od 10 % u odnosu na nazivnu vrijednost; minimalno 13,5 bar. Punjenje dušikom: regulator 15 +0,5 bar; minimalno rosište −40 °C; adapter za punjenje 000 176.',
        },
        { label: 'Broj odobrenja (tip)', value: 'SP 40/01' },
        { label: 'Kapacitet gašenja', value: '43A, 233B, C' },
        {
          label: 'Sredstvo (primjer iz upute)',
          value: 'Neutrex ABC 50 E 6 kg (313 670); ostalo prema tipskoj tabliči i odobrenju',
        },
        {
          label: 'Unutarnji pregled / tlačna proba',
          value: 'Unutarnji pregled 4 godine; umnožak < 1000 L×bar; tlačna proba prema pravilniku ili ako je oštećen spremnik',
        },
        { label: 'O-brtva ventila', value: '26×3 – zamijeniti' },
        { label: 'Gumena cijev', value: 'Zatezanje 20 Nm' },
        { label: 'Moment zatezanja', value: 'Ventil 50 Nm / gumena cijev 20 Nm' },
      ],
      bs09: [
        { label: 'Tip', value: 'BS09' },
        {
          label: 'Medij',
          value: 'Prah za gašenje (npr. Neutrex ABC 50 E; u uputi i Neutrex super / ABC 50 uz odgovarajuće odobrenje)',
        },
        { label: 'Punjenje praha', value: '9 kg ± 180 g' },
        {
          label: 'Pogonski plin',
          value:
            'Kontrola tlaka na 20 °C: ne smije pasti više od 10 % u odnosu na nazivnu vrijednost; minimalno 13,5 bar. Punjenje dušikom: regulator 15 +0,5 bar; minimalno rosište −40 °C; adapter za punjenje 000 176.',
        },
        { label: 'Broj odobrenja (tip)', value: 'SP 65/06' },
        { label: 'Kapacitet gašenja', value: '55A, 233B, C' },
        {
          label: 'Sredstvo (primjer iz upute)',
          value: 'Prema tipskoj tabliči i odobrenju za 9 kg (u uputi naveden i ABC 50 serija)',
        },
        {
          label: 'Unutarnji pregled / tlačna proba',
          value: 'Unutarnji pregled 4 godine; umnožak < 1000 L×bar; tlačna proba prema pravilniku ili ako je oštećen spremnik',
        },
        { label: 'O-brtva ventila', value: '26×3 – zamijeniti' },
        { label: 'Gumena cijev', value: 'Zatezanje 20 Nm' },
        { label: 'Moment zatezanja', value: 'Ventil 50 Nm / gumena cijev 20 Nm' },
      ],
      bs12: [
        { label: 'Tip', value: 'BS12' },
        {
          label: 'Medij',
          value: 'Prah za gašenje (prema deklaraciji na aparatu; shema dijelova u uputi uključuje BS12)',
        },
        {
          label: 'Punjenje praha',
          value: '12 kg ± 240 g (tolerancija u skladu s uputom za seriju; provjerite natpis na spremniku)',
        },
        {
          label: 'Pogonski plin',
          value:
            'Kontrola tlaka na 20 °C: ne smije pasti više od 10 % u odnosu na nazivnu vrijednost; minimalno 13,5 bar (prema uputi za seriju). Punjenje dušikom: regulator 15 +0,5 bar; minimalno rosište −40 °C; adapter za punjenje 000 176.',
        },
        {
          label: 'Broj odobrenja (tip)',
          value: 'Prema natpisu / tipskoj tabliici za BS12 (u tablici dijelova posebni katalozi za uspon i crijevo)',
        },
        {
          label: 'Kapacitet gašenja',
          value: 'Prema tipskoj tabliici za BS12 (veći aparat od BS06/BS09)',
        },
        {
          label: 'Sredstvo',
          value: 'Prema odobrenju za konkretni BS12; usporediti s tablicom rezervnih dijelova (naljepnica 090 219)',
        },
        {
          label: 'Unutarnji pregled / tlačna proba',
          value: 'Unutarnji pregled 4 godine; umnožak < 1000 L×bar; tlačna proba prema pravilniku ili ako je oštećen spremnik',
        },
        { label: 'O-brtva ventila', value: '26×3 – zamijeniti' },
        { label: 'Gumena cijev', value: 'Zatezanje 20 Nm (crijevo BS12: 550 703)' },
        { label: 'Moment zatezanja', value: 'Ventil 50 Nm / gumena cijev 20 Nm' },
      ],
    },
    warnings: [
      'Servis dopušten samo kompetentnim, kvalificiranim ovlaštenim osobama (DIN 14406-4).',
      'Samo odobrena sredstva, pogonski plin i originalni FLN rezervni dijelovi.',
    ],
    /* sections: servisne upute u `catalog17.js` – SECTIONS_BS (PDF BS) */
  },
]

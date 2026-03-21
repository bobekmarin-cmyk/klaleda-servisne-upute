/**
 * FX6 / FX9 / FX 12 Euro S i PG6 / PG9 / PG 12 Euro S – iz PDF str. 16–20; fotografija poglavlja str. 16, shema str. 17 (izvučeno u euro-s-cover.png / euro-s-shema.png)
 * (KLALEDA Servisne upute 2026). PG Euro S: kataloški brojevi usklađeni s FX stupcima (6/9/12).
 */

const euroKeys = ['fx6es', 'fx9es', 'fx12es', 'pg6es', 'pg9es', 'pg12es']

const codes = {
  fx6es: {
    osigurac: '142 101',
    ventil: '142 195',
    manometar: '501 820',
    oBrtvaVentila: '142 094',
    usponska: '501 758',
    crijevo: '550 001',
    drzacCrijeva: '551 405',
    zidniNosac: '200 007',
    naljepnica: '091 441',
    prah: '313 659',
    podnica: '201 170',
    kamionCinc: '200 585',
    kamionCrveni: '200 630',
  },
  fx9es: {
    osigurac: '142 101',
    ventil: '142 195',
    manometar: '501 820',
    oBrtvaVentila: '727 009',
    usponska: '501 838',
    crijevo: '550 100',
    drzacCrijeva: '551 405',
    zidniNosac: '200 007',
    naljepnica: '090 068',
    prah: '313 659',
    podnica: '—',
    kamionCinc: '—',
    kamionCrveni: '—',
  },
  fx12es: {
    osigurac: '142 101',
    ventil: '142 195',
    manometar: '501 820',
    oBrtvaVentila: '142 094',
    usponska: '501 774',
    crijevo: '550 200',
    drzacCrijeva: '551 405',
    zidniNosac: '200 007',
    naljepnica: '090 069',
    prah: '313 659',
    podnica: '—',
    kamionCinc: '—',
    kamionCrveni: '—',
  },
}

codes.pg6es = { ...codes.fx6es }
codes.pg9es = { ...codes.fx9es }
codes.pg12es = { ...codes.fx12es }

function row(ref, name, keyField) {
  const o = {}
  for (const k of euroKeys) o[k] = codes[k][keyField]
  return { ref, name, code: o }
}

export const euroSParts = [
  row(1, 'Osigurač', 'osigurac'),
  row(2, 'Ventil', 'ventil'),
  row(3, 'Manometar', 'manometar'),
  row(4, 'O-brtva ventila', 'oBrtvaVentila'),
  row(5, 'Usponska cijev', 'usponska'),
  row(6, 'Crijevo', 'crijevo'),
  row(7, 'Držač crijeva', 'drzacCrijeva'),
  row(9, 'Zidni nosač', 'zidniNosac'),
  row(10, 'Naljepnica (SP 128/13)', 'naljepnica'),
  row(null, 'Prah Neutrex ABC Euro 6 kg', 'prah'),
  row(null, 'Plastična podnica', 'podnica'),
  row(null, 'Kamionski nosač cinčani', 'kamionCinc'),
  row(null, 'Kamionski nosač crveni', 'kamionCrveni'),
]

// Popravak: zadnji redovi koriste code, ne line za prah – PartRow koristi line samo ako != null
// Za "Prah" koristimo code mapu (već imamo code). Uklonimo line: null

const WARN = [
  'Servisiranje dopušteno samo kompetentnim i kvalificiranim ovlaštenim osobama osposobljenim prema DIN 14406-4.',
  'Samo odobrena sredstva za gašenje, pogonski plin i originalni FLN rezervni dijelovi.',
]

export const euroSSections = [
  {
    heading: '1. Periodični pregled (svake godine)',
    defaultOpen: true,
    blocks: [
      {
        subheading: '1.1. Provjera vanjskog stanja',
        paragraphs: [
          'Provjera vanjskog stanja spremnika i armature (opće stanje, pojava korozije, mehanička oštećenja, čitljivost natpisa).',
          'Provjera stanja dijelova od plastike na promjene kao što su napuknuća, promjena boje itd. Ispravnost plombi.',
          'Vatrogasni aparat treba pričvrstiti u odgovarajući uređaj.',
        ],
      },
      {
        subheading: '1.2. Provjera vanjskog stanja – gumena cijev',
        paragraphs: [
          'Gumenu cijev odvrnuti od ventila. Izvršiti kontrolu gumene cijevi na napuknuća, lomove, deformacije kao i prolaznost.',
          'Spojni elementi moraju biti potpuno pričvršćeni i ne smiju imati nikakva oštećenja. Ukoliko gumena cijev ima mlaznicu, provjeriti je li ona dobro pričvršćena i prolazna.',
        ],
      },
      {
        subheading: '1.3. Ispitivanje pogonskog tlaka',
        paragraphs: [
          'Utvrđivanje pogonskog tlaka. Na 20 °C tlak ne smije pasti za više od 10 % (minimalno 13,5 bar).',
          'Manometar ili jalovi nastavak odvrnuti od nastavka za ispitivanje. Oprez: nastavak za ispitivanje držati s ključem SW 15, priključiti adapter s ispitnim ventilom kataloški broj 000 176 te odgovarajući uređaj za ispitivanje tlaka. Očitati pogonski tlak. Ako je tlak ispod minimalno dopuštenog, izvršiti odgovarajući popravak.',
          'Ukloniti adapter i uređaj za ispitivanje tlaka i ponovno pričvrstiti manometar ili jalovi nastavak.',
        ],
      },
      {
        subheading: '1.4. Završno ispitivanje',
        bullets: [
          '1.4.1. Natpis: pregledati ispravnost i potpunu čitljivost; po potrebi zamijeniti. Očistiti vatrogasni aparat.',
          '1.4.2. Ukloniti staru plombu. Postaviti novu plombu na zaštitni zatik (bakrena žica 0,4 mm). Zaštitnu kapu od prašine osigurati zelenim sigurnosnim lakom.',
          '1.4.3. Ponovno pričvrstiti gumenu cijev (zategnuti momentom 20 Nm).',
          '1.4.4. Postaviti potvrdu o servisiranju (ispod ili desno od natpisa). Ne smije se naljepnica stavljati na postojeći natpis, ni djelomično. Navesti datum ispitivanja (mjesec/godina), broj ili ime ispitanika i adresu.',
          '1.4.5. Držač vatrogasnog aparata pregledati na oštećenja i način pričvršćivanja (ako je dostupno); po potrebi zamijeniti.',
        ],
        note:
          'Obzirom da pravilnik o vatrogasnim aparatima zahtijeva naljepnicu na usponskoj cijevi, potrebno je: otvoriti spremnik, zalijepiti naljepnicu na usponsku cijev, zamijeniti O-brtvu ventila i zavrnuti ventil. Opisano u točkama 2.3.1., 2.5. i 2.6.',
      },
    ],
  },
  {
    heading: '2. Unutarnji pregled (svake 4 godine), popravak, ponovno punjenje',
    defaultOpen: false,
    blocks: [
      {
        subheading: '2.1. Vanjski pregled',
        paragraphs: ['Kao točka 1.1. servisiranja.'],
      },
      {
        subheading: '2.2. Gumena cijev',
        paragraphs: ['Kao točka 1.2. servisiranja.'],
      },
      {
        subheading: '2.3. Spremnik',
        bullets: [
          '2.3.1. Otvoriti spremnik. Ispustiti unutarnji tlak preko ispitnog nastavka. Oprez: preostali tlak pustiti oprezim odvijanjem ventila (cca. 2 okretaja) preko utora za otpuštanje tlaka. Kad je aparat potpuno ispražnjen, odvrnuti ventil do kraja.',
          '2.3.2. Potpuno isprazniti spremnik (preporuča se uređaj za presipavanje praha), izvršiti unutarnji pregled i kontrolu korozije (baterija, ogledalo). Ako su vidljivi tragovi korozije, spremnik se ne smije dalje koristiti. Podatke o unutarnjem pregledu zapisati flomasterom na usponskoj cijevi ventila (broj ispitanika i mjesec/godinu). Navojnu brtvu pregledati na oštećenja i prolaznost.',
          '2.3.3. Ako se tijekom unutarnjeg pregleda otkriju oštećenja, potrebno je izvršiti tlačnu probu spremnika.',
          '2.3.4. Oštećene naljepnice zamijeniti novom; paziti na vrstu sredstva za gašenje i oznaku.',
        ],
      },
      {
        subheading: '2.4. Prah za gašenje',
        paragraphs: [
          'Prah preispitati na vrstu, sastav i daljnju upotrebljivost (sipkost). Pri novom punjenju koristiti samo prah iz pakiranja identičan onome u aparatu. Ne smije se miješati prah s različitim brojevima odobrenja. Neupotrebljiv prah zbrinuti sukladno propisima za poseban otpad.',
        ],
      },
      {
        subheading: '2.5. Ventil',
        paragraphs: [
          'Izvaditi osigurač, odvrnuti prelazni dio s usponskom cijevi, izvaditi stožastu tlačnu oprugu, istisnuti vreteno i provjeriti jesu li ručke dobro pričvršćene na kućištu ventila. Sve očistiti i pregledati na oštećenja i slobodnu prolaznost; oštećene dijelove zamijeniti.',
          'Pri sastavljanju brtvu podmazati bezkiselinskom mašću na gornjem dršku vretena i umetnuti vreteno u kućište. Prije pričvršćivanja usponske cijevi paziti da je tlačna opruga umetnuta tako da strana s manjim promjerom bude prema stožastom ventilu. Brtvu 26×3 treba svakako zamijeniti. Umetnuti osigurač.',
        ],
      },
      {
        subheading: '2.6. Montaža',
        bullets: [
          '2.6.1. Napuniti pregledani spremnik s potrebnom količinom praha: FX6 Euro S 6 kg ± 120 g; FX9 Euro S 9 kg ± 180 g (na natpisu i u službenoj tablici provjeriti točnu masu za FX 12 Euro S i PG Euro S varijante).',
          '2.6.2. Očistiti navojnu brtvu i dosjednu površinu brtve na spremniku i podmazati bezkiselinskom mašću.',
          '2.6.3. Zategnuti kompletan ventil s 50 Nm i pripaziti na ispravan položaj ventila u odnosu na spremnik.',
          '2.6.4. Postaviti uređaj za punjenje: adapter za ispitni ventil 000 176, punjenje dušikom (minimalno rosište −40 °C) preko regulatora tlaka 15 +0,5 bar. Uvrnuti manometar ili jalovi nastavak.',
          '2.6.5. Ispitivanje nepropusnosti sredstvom za detektiranje pukotina (cca. 5 min).',
          '2.6.6. Posušiti i očistiti aparat. U ventilu ne smiju ostati ostaci detekcijskog sredstva. Zategnuti gumenu cijev momentom 20 Nm.',
          '2.6.7. Plombirati osigurač (bakrena žica 0,4 mm) i zaštitnu kapu od prašine / ventil–spremnik zelenim sigurnosnim lakom. Osigurač se ne smije ukloniti bez oštećenja plombe.',
          '2.6.8. Postaviti potvrdu o servisiranju (ispod ili desno od natpisa). Navesti datum ispitivanja i unutarnjeg pregleda, ispitanika i adresu.',
          '2.6.9. Kontrolirati držač aparata; po potrebi zamijeniti.',
        ],
      },
    ],
  },
  {
    heading: '3. Moment zatezanja',
    defaultOpen: false,
    blocks: [
      {
        paragraphs: ['Ventil 50 Nm / gumena cijev 20 Nm.'],
      },
    ],
  },
]

function specFx6() {
  return [
    { label: 'Tip', value: 'FX6 Euro S (na natpisu npr. P 6 Euro S)' },
    { label: 'Medij', value: '6 kg ABC suhi prah – Prah Neutrex ABC Euro (kat. br. 313 659)' },
    { label: 'Kapacitet gašenja', value: '43A 233B C' },
    { label: 'Radni tlak', value: '15 bar (prema tipskoj tabličici na aparatu)' },
    { label: 'Ispitni tlak', value: '27 bar (prema tipskoj tabličici)' },
    { label: 'Područje temperature', value: '−30 °C do +60 °C (prema tipskoj tabličici)' },
    {
      label: 'Pogonski plin',
      value:
        'N₂ (dušik). Na 20 °C tlak ne smije pasti više od 10 %; minimalno 13,5 bar. Punjenje prema uputi: regulator 15 +0,5 bar; minimalno rosište −40 °C; adapter 000 176.',
    },
    { label: 'Punjenje praha', value: '6 kg ± 120 g' },
    {
      label: 'Broj odobrenja (tip)',
      value: 'SP-40/01 (uputa); na aparatu često EN3-SP 123/13 – uvijek provjeriti natpis',
    },
    { label: 'Sredstvo za gašenje (odobrenje)', value: 'Neutrex super SP-89/08' },
    {
      label: 'Umnožak tlaka i volumena (L×bar)',
      value: '< 1000 (unutarnji pregled 4 godine; tlačna proba prema pravilniku ili ako je oštećen spremnik)',
    },
    {
      label: 'Napomena (elektrika)',
      value: 'Ne koristiti na električnim instalacijama preko 1000 V; držati minimalnu udaljenost 1 m (prema natpisu).',
    },
  ]
}

function specFx9() {
  return [
    { label: 'Tip', value: 'FX9 Euro S' },
    { label: 'Medij', value: 'Prah Neutrex ABC Euro 9 kg (kat. br. 313 659)' },
    { label: 'Kapacitet gašenja', value: '55A, 183B, C' },
    {
      label: 'Pogonski plin',
      value:
        'Dušik. Na 20 °C tlak ne smije pasti više od 10 %; minimalno 13,5 bar. Punjenje: regulator 15 +0,5 bar; minimalno rosište −40 °C; adapter 000 176.',
    },
    { label: 'Punjenje praha', value: '9 kg ± 180 g' },
    { label: 'Broj odobrenja (tip)', value: 'SP-65/06' },
    { label: 'Sredstvo za gašenje (odobrenje)', value: 'Neutrex ABC 50 SP-69/06' },
    {
      label: 'Umnožak tlaka i volumena (L×bar)',
      value: '< 1000 (unutarnji pregled 4 godine; tlačna proba prema pravilniku ili ako je oštećen spremnik)',
    },
  ]
}

function specFx12() {
  return [
    { label: 'Tip', value: 'FX 12 Euro S' },
    { label: 'Medij', value: 'Prah Neutrex ABC Euro 6 kg (kat. br. 313 659)' },
    { label: 'Kapacitet gašenja', value: 'Prema tipskoj tabličici i natpisu na aparatu' },
    {
      label: 'Pogonski plin',
      value:
        'Dušik. Na 20 °C tlak ne smije pasti više od 10 %; minimalno 13,5 bar (provjeriti u uputi). Punjenje: regulator 15 +0,5 bar; rosište −40 °C; adapter 000 176.',
    },
    { label: 'Punjenje praha', value: '12 kg ± 240 g (prema natpisu i tablici u PDF-u za FX 12 Euro S)' },
    { label: 'Broj odobrenja (tip)', value: 'Prema natpisu na aparatu' },
    { label: 'Sredstvo za gašenje (odobrenje)', value: 'Prema natpisu (usklađeno s serijom Euro S)' },
    {
      label: 'Umnožak tlaka i volumena (L×bar)',
      value: '< 1000 (uobičajeno za seriju; potvrditi na tipskoj tabličici)',
    },
  ]
}

function specPg(label, specFx) {
  const base = specFx()
  return [{ ...base[0], value: label }, ...base.slice(1)]
}

export const euroSExtinguisher = {
  id: '03-euro-s',
  shortLabel: 'Euro S (FX / PG)',
  title: 'FX6 Euro S, FX9 Euro S, FX 12 Euro S, PG6 Euro S, PG9 Euro S, PG 12 Euro S',
  subtitle: 'Prijenosni aparati s prahom – serija Euro S (PDF str. 16–20; shema str. 17)',
  partVariants: [
    { key: 'fx6es', label: 'FX6 Euro S' },
    { key: 'fx9es', label: 'FX9 Euro S' },
    { key: 'fx12es', label: 'FX 12 Euro S' },
    { key: 'pg6es', label: 'PG6 Euro S' },
    { key: 'pg9es', label: 'PG9 Euro S' },
    { key: 'pg12es', label: 'PG 12 Euro S' },
  ],
  defaultPartVariant: 'fx6es',
  parts: euroSParts,
  heroImage: {
    src: '/images/euro-s-shema.png',
    alt: 'Shema presjeka Euro S – označeni dijelovi armature i spremnika (1–11).',
    caption:
      'Shema aparata Euro S (presjek, PDF str. 17 – odmah nakon naslovnice poglavlja str. 16). Brojevi na slici odgovaraju tablici rezervnih dijelova u uputi.',
  },
  productPhotos: {
    fx6es: {
      src: '/images/euro-s-cover.png',
      alt: 'Euro S – fotografija iz poglavlja u PDF-u (str. 16).',
      caption:
        'Fotografija iz PDF-a (str. 16): primjer 6 kg Neutrex ABC Euro (TOTAL), 43A 233B C, 15 bar N₂; tipska oznaka EN3-SP 123/13.',
    },
    fx9es: {
      src: '/images/euro-s-cover.png',
      alt: 'Euro S – ista stranica u PDF-u (str. 16).',
      caption:
        'Ista stranica kao za FX6 Euro S (PDF str. 16). Za FX9 / FX 12 koristite natpis i tipsku tablicu na aparatu.',
    },
    fx12es: {
      src: '/images/euro-s-cover.png',
      alt: 'Euro S – ista stranica u PDF-u (str. 16).',
      caption:
        'Ista stranica kao za FX6 Euro S (PDF str. 16). Za FX 12 koristite natpis i tipsku tablicu na aparatu.',
    },
    pg6es: {
      src: '/images/euro-s-cover.png',
      alt: 'Euro S – ista stranica u PDF-u (str. 16).',
      caption:
        'Ista stranica kao za FX (PDF str. 16). PG6 Euro S prema tablici dijelova u uputi i natpisu na aparatu.',
    },
    pg9es: {
      src: '/images/euro-s-cover.png',
      alt: 'Euro S – ista stranica u PDF-u (str. 16).',
      caption:
        'Ista stranica kao za FX (PDF str. 16). PG9 Euro S prema tablici dijelova i natpisu.',
    },
    pg12es: {
      src: '/images/euro-s-cover.png',
      alt: 'Euro S – ista stranica u PDF-u (str. 16).',
      caption:
        'Ista stranica kao za FX (PDF str. 16). PG 12 Euro S prema tablici dijelova i natpisu.',
    },
  },
  specsByVariant: {
    fx6es: specFx6(),
    fx9es: specFx9(),
    fx12es: specFx12(),
    pg6es: specPg('PG6 Euro S', specFx6),
    pg9es: specPg('PG9 Euro S', specFx9),
    pg12es: specPg('PG 12 Euro S', specFx12),
  },
  warnings: WARN,
  sections: euroSSections,
}

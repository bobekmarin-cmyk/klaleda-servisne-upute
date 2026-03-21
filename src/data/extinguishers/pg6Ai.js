/**
 * PG 6Ai / PG 9Ai – iz PDF str. 20–25 (KLALEDA Servisne upute 2026). Fotografija str. 20, shema str. 21.
 */

const c = {
  pg6ai: {
    zatvarac: '502 421',
    osigurac: '135 145',
    pogonskaBocica: '102 586',
    usponska: '501 782',
    brtva6045: '727 016',
    membrana: '111 362',
    cijevPistolj: '550 680',
    oBrtvaMlaznice: '727 019',
    drzacCrijeva: '551 405',
    brtveniPrsten: '727 001',
    zatvaracUzbudne: '108 543',
    mlaznica: '552 353',
    drzacZid: '200 007',
    naljepnica: '091 442',
    udarniGumb: '141 895',
    stak: '201 122',
    drzacAuto: '200 550',
    neutrex6: '313 654',
    neutrex25: '313 656',
  },
  pg9ai: {
    zatvarac: '502 422',
    osigurac: '135 145',
    pogonskaBocica: '102 964',
    usponska: '501 846',
    brtva6045: '727 016',
    membrana: '111 362',
    cijevPistolj: '550 680',
    oBrtvaMlaznice: '727 019',
    drzacCrijeva: '551 405',
    brtveniPrsten: '727 001',
    zatvaracUzbudne: '108 543',
    mlaznica: '—',
    drzacZid: '200 007',
    naljepnica: '091 423',
    udarniGumb: '141 895',
    stak: '201 149',
    drzacAuto: '200 082',
    neutrex6: '—',
    neutrex25: '313 656',
  },
}

function m(ref, name, field) {
  return {
    ref,
    name,
    code: { pg6ai: c.pg6ai[field], pg9ai: c.pg9ai[field] },
  }
}

export const pg6AiParts = [
  m(1, 'Zatvarač komplet crni', 'zatvarac'),
  m(2, 'Osigurač sa stezaljkom', 'osigurac'),
  m(3, 'Pogonska bočica', 'pogonskaBocica'),
  m(4, 'Usponska cijev', 'usponska'),
  m(5, 'Brtva 60×4,5', 'brtva6045'),
  m(7, 'Zaštitna membrana 14×2', 'membrana'),
  {
    ref: 8,
    name: 'Cijev s okretnom pištolj mlaznicom',
    code: { pg6ai: c.pg6ai.cijevPistolj, pg9ai: c.pg9ai.cijevPistolj },
  },
  {
    ref: null,
    name: 'O-brtva 12x2 mlaznice',
    code: { pg6ai: c.pg6ai.oBrtvaMlaznice, pg9ai: c.pg9ai.oBrtvaMlaznice },
  },
  m(9, 'Držač cijevi', 'drzacCrijeva'),
  m(10, 'Brtveni prsten', 'brtveniPrsten'),
  m(11, 'Zatvarač uzbudne cijevi', 'zatvaracUzbudne'),
  m(12, 'Mlaznica', 'mlaznica'),
  { ref: null, name: 'Držač za zid', code: { pg6ai: c.pg6ai.drzacZid, pg9ai: c.pg9ai.drzacZid } },
  m(14, 'Naljepnica upute', 'naljepnica'),
  m(15, 'Udarni gumb komplet', 'udarniGumb'),
  { ref: null, name: 'Stalak', code: { pg6ai: c.pg6ai.stak, pg9ai: c.pg9ai.stak } },
  { ref: null, name: 'Držač za auto', code: { pg6ai: c.pg6ai.drzacAuto, pg9ai: c.pg9ai.drzacAuto } },
  {
    ref: null,
    name: 'Sredstvo Neutrex CS a. 6 kg',
    code: { pg6ai: '313 654', pg9ai: '—' },
  },
  {
    ref: null,
    name: 'Sredstvo Neutrex CS a. 25 kg',
    code: { pg6ai: '313 656', pg9ai: '313 656' },
  },
]

const WARN_PG = [
  'Servisiranje ovih prijenosnih vatrogasnih aparata dopušteno je samo kompetentnim i kvalificiranim ovlaštenim osobama koje su za to osposobljene prema normi DIN 14406-4. Sukladno propisima za zaštitu na radu, pridržavanje uputa za održavanje vatrogasnih aparata je preduvjet za njihovo servisiranje.',
  'Prilikom servisiranja dopušteno je korištenje samo sredstva za gašenje, pogonskog plina i rezervnih dijelova koji su odobreni tipskim ispitivanjem. U slučaju nepridržavanja gubi se odobrenje za korištenje uređaja i jamstvo proizvođača.',
  'Originalni FLN rezervni dijelovi odgovaraju ovoj obvezi za ispitivanje i odobrenje.',
  'Pazi: oštećene ili neispravne dijelove treba zamijeniti odobrenim original rezervnim dijelovima. Treba se pridržavati navedenih momenta zatezanja.',
]

export const pg6AiSections = [
  {
    heading: '1. Upute za periodični pregled',
    defaultOpen: true,
    blocks: [
      {
        subheading: '1.1. Provjera vanjskog stanja',
        paragraphs: [
          'Provjera vanjskog stanja spremnika i armature (opće stanje, pojava korozije, mehanička oštećenja, čitljivost natpisa).',
          'Provjera stanja dijelova od plastike na promjene kao što su napuknuća, promjena boje itd. Ispravnost plombi.',
          'Vatrogasni aparat treba pričvrstiti u odgovarajući uređaj. Skinuti staru plombu.',
          'Spremnici i ventili na kojima su ustanovljena oštećenja koja negativno utječu na tlačnu probu spremnika ne smiju se više koristiti.',
        ],
      },
      {
        subheading: '1.2. Spremnik',
        bullets: [
          '1.2.1. Otvaranje spremnika: potresti prah i pri tome spremnik okrenuti naglavačke te čekati dok spremnik bude u potpunosti ispražnjen od praha.',
          'Oprez: iz sigurnosnih razloga uvijek početi pregled skidanjem slijepog vijka armature (cca. 1/3 dužine navoja), jer on posjeduje utor za tlačno rasterećenje. Paziti na utore za tlačno rasterećenje tijekom provjere vanjskog stanja.',
          'Oprezno i postupno odvrnuti slijepi vijak (s kukastim ključem) i pri tome pokretati armaturu na dršci sve dok više nije pod tlakom. Prilikom otvaranja vatrogasni aparat mora biti potpuno bez tlaka.',
          'Odvrnuti gumenu cijev sa armature i armaturu potpuno skinuti, izvaditi i očistiti od ostatka praha.',
          '1.2.3. Oštećene natpise zamijeniti odgovarajućom novom naljepnicom; pri tome paziti na korištenu vrstu sredstva za gašenje s odgovarajućom oznakom.',
        ],
      },
      {
        subheading: '1.3. Pogonska bočica CO₂',
        paragraphs: [
          'Odvrnuti čeličnu bocu i pregledati na tragove korozije (čelične boce s tragovima korozije ne smiju se više koristiti) i na čitljivost ukupne težine (označena pečatom).',
          'Ukupnu težinu ustanoviti odgovarajućom vagom (s preciznošću na 1 g). Dopuštena negativna tolerancija: PG 6 Ai 135 g −13 g CO₂; PG 9 Ai 210 g −8 g CO₂.',
          'Izmjerenu težinu upisati na naljepnicu i nalijepiti na pogonsku bočicu.',
        ],
      },
      {
        subheading: '1.4. Zatvarač',
        paragraphs: [
          'Osigurač sa stezaljkom skinuti i kontrolirati. Zatvarač pregledati na oštećenja od korozije, oštećenja navoja, na lakoću hoda udarnog zatika, na ispravni udarni šiljak, slobodne utore za tlačno rasterećenje slijepog vijka, na neoštećenost gumene brtve (zamijeniti ako je oštećena) te ispitati ispravnost pričvršćenosti usponske cijevi i ispušne cijevi kao i ispravnost sigurnosnog ventila.',
          'U slučaju zamjene udarnog gumba treba svakako mijenjati samoosiguravajuću maticu M5. Osigurač sa stezaljkom gurnuti opet ispod udarnog gumba. Uzbudnu cijev i ispušne cijevi pregledati na prolaznost.',
          'Preispitanu bocu opet uvrnuti u armaturu (20 Nm) – promijeniti brtvu.',
        ],
      },
      {
        subheading: '1.5. Gumena cijev s pištolj-mlaznicom',
        paragraphs: [
          'Kontrolirati gumenu cijev u pogledu puknuća, lomova i deformacija. Svi spojni elementi moraju biti dobro pričvršćeni na dosjednu površinu i ne smiju imati tragove korozije ili oštećenja. Za kontrolu prolaznosti gumene cijevi treba propuhati istu.',
          'Zapornu pištolj-mlaznicu treba pregledati na puknuća, lomove i jake promjene boje, a tlačnu oprugu treba kontrolirati na koroziju. Odvrnuti mlaznicu i slijepi vijak, pregledati i opet montirati i pri tome pripaziti da bude dobro pričvršćena na dosjednu površinu. Pištolj-mlaznica mora biti laka za rukovanje i dobro pričvršćena.',
          'Od 8/98 isporučujemo također okretne pištolj-mlaznice. Ove gumene cijevi mogu se koristiti također kao rezervni dio za prethodno isporučene vatrogasne aparate tog tipa.',
        ],
      },
      {
        subheading: '1.7. Montaža',
        bullets: [
          '1.7.1. Napuniti kontrolirani spremnik potrebnom količinom praha za gašenje: PG 6 Ai 6 kg ± 120 g; PG 9 Ai 9 kg ± 180 g.',
          '1.7.2. Očistiti navojnu brtvu spremnika i podmazati bezkiselinskom mašću.',
          '1.7.3. Umetnuti kompletnu armaturu i uvrnuti slijepi vijak (moment zatezanja 40 Nm). Pri tome paziti na položaj gumene cijevi u odnosu na držač cijevi, umetnuti zaštitnu membranu i uvrnuti gumenu cijev (moment zatezanja 20 Nm).',
          '1.7.4. Plombirati osigurač armature (bakrenom žicom debljine 0,4 mm), pri tome provući žicu kroz obujmicu i bušene rupe u armaturi i zavezati, završetke treba provući kroz bušene rupe plombe i napraviti čvor na način da čvor sjedne u utor plombe, a zatim stisnuti plombu kliještima za plombe.',
          '1.7.5. Očistiti vatrogasni aparat.',
          '1.7.6. Staviti potvrdu o servisiranju ispod ili s desne strane natpisa. Ne smije se stavljati naljepnica preko polja za natpis, pa čak ni djelomično. Treba navesti datum ispitivanja i unutarnjeg pregleda (mjesec/godina) kao i broj ili ime ispitanika i adresa.',
          '1.7.7. Kontrolirati držač vatrogasnog aparata na oštećenja i pričvršćivanje (ukoliko dostupno).',
        ],
      },
    ],
  },
  {
    heading: '2. Unutarnji pregled (svake 4 godine), ponovno punjenje',
    defaultOpen: false,
    blocks: [
      {
        subheading: '2.0. Općenito',
        paragraphs: [
          'Postupci ponovnog punjenja rabljenog vatrogasnog aparata su identični onima u uputama za ispitivanje, ali prah za gašenje, čeličnu bocu i zaštitnu membranu kao i membranu na ispušnoj cijevi treba obnoviti. Pazi! Ne smije se dalje koristiti prah za gašenje koji je eventualno još ostao u spremniku.',
        ],
      },
      {
        subheading: '2.1. Prah za gašenje',
        paragraphs: [
          'Prah za gašenje preispitati na vrstu, sastav i daljnju upotrebljivost (ispitivanje sipkosti praha). Prilikom novog punjenja koristiti samo prah za gašenje iz pakiranja za ponovno punjenje koji je identičan onome u vatrogasnom aparatu. Ne smije se miješati prah za gašenje s različitim brojevima odobrenja. Prah za gašenje koji se ne može dalje upotrijebiti treba zbrinuti sukladno propisima za poseban otpad.',
          'Pazi: Unutarnji pregled treba naznačiti na pogonskoj bočici CO₂ ili na usponskoj cijevi flomasterom (mjesec i godinu, te broj ispitanika).',
        ],
      },
      {
        subheading: '2.2. Unutarnji pregled spremnika',
        paragraphs: [
          'Izvršiti unutarnji pregled i kontrolirati postoje li tragovi korozije (pregled pomoću baterije i ogledala). Ukoliko su vidljivi tragovi korozije, spremnik se ne smije dalje koristiti iz sigurnosnih razloga. Navojni priključak pregledati na oštećenja i prolaznost.',
        ],
      },
    ],
  },
  {
    heading: '3. Moment zatezanja',
    defaultOpen: false,
    blocks: [
      {
        paragraphs: ['Zatvarač 40 Nm. Gumena cijev 20 Nm.'],
      },
    ],
  },
]

export const pg6AiExtinguisher = {
  id: '04-pg-ai',
  shortLabel: 'PG 6Ai / 9Ai',
  title: 'PG 6Ai, PG 9Ai',
  subtitle: 'Prijenosni aparati s prahom i pogonskom bočicom CO₂ (iz PDF str. 20–25)',
  partVariants: [
    { key: 'pg6ai', label: 'PG 6 AI-EN' },
    { key: 'pg9ai', label: 'PG 9 AI' },
  ],
  defaultPartVariant: 'pg6ai',
  parts: pg6AiParts,
  heroImage: {
    src: '/images/pg6ai-shema.png',
    alt: 'OPIS SHEME – PG 6 Ai, PG 9 Ai (iz servisne upute).',
    caption: 'Shema (str. 21 PDF-a). Tablica dijelova nastavlja se na sljedećim stranicama.',
  },
  productPhotos: {
    pg6ai: {
      src: '/images/pg6ai-cover.png',
      alt: 'Naslovnica poglavlja PG 6 Ai / PG 9 Ai u PDF-u.',
      caption: 'Fotografija poglavlja (str. 20 PDF-a; shema na str. 21).',
    },
    pg9ai: {
      src: '/images/pg6ai-cover.png',
      alt: 'Naslovnica poglavlja PG 6 Ai / PG 9 Ai u PDF-u.',
      caption: 'Ista stranica kao za PG 6 Ai (str. 20); razlike po tablici dijelova i natpisu.',
    },
  },
  specsByVariant: {
    pg6ai: [
      { label: 'Tip', value: 'PG 6 AI-EN' },
      { label: 'Medij', value: 'Prah + pogonska bočica CO₂ (prema uputi)' },
      { label: 'Kapacitet gašenja', value: '43A 233B C' },
      {
        label: 'Pogonski plin',
        value:
          'CO₂ u čeličnoj boci; kontrola ukupne mase boca: 135 g −13 g (negativna tolerancija) u odnosu na označenu masu. Punjenje i zamjena prema uputi.',
      },
      { label: 'Punjenje praha', value: '6 kg ± 120 g' },
      { label: 'Broj odobrenja (tip)', value: 'SP-01/95' },
      { label: 'Sredstvo za gašenje (odobrenje)', value: 'Neutrex super SP-89/08' },
      {
        label: 'Umnožak tlaka i volumena (L×bar)',
        value: '< 1000; unutarnji pregled 4 godine; tlačna proba prema pravilniku ili ako je oštećen spremnik',
      },
    ],
    pg9ai: [
      { label: 'Tip', value: 'PG 9 AI' },
      { label: 'Medij', value: 'Prah + pogonska bočica CO₂' },
      { label: 'Kapacitet gašenja', value: '55A 233B C' },
      {
        label: 'Pogonski plin',
        value:
          'CO₂ u čeličnoj boci; dopuštena negativna tolerancija mase: 210 g −8 g u odnosu na označenu ukupnu težinu.',
      },
      { label: 'Punjenje praha', value: '9 kg ± 180 g' },
      { label: 'Broj odobrenja (tip)', value: 'SP-33/95' },
      { label: 'Sredstvo za gašenje (odobrenje)', value: 'Neutrex super SP-89/08' },
      {
        label: 'Umnožak tlaka i volumena (L×bar)',
        value: '< 1000; unutarnji pregled 4 godine; tlačna proba prema pravilniku',
      },
    ],
  },
  warnings: WARN_PG,
  sections: pg6AiSections,
}

/**
 * Ostali tipovi prijenosnih vatrogasnih aparata – ista struktura podataka kao FX/BS.
 * Kataloške brojeve, točne mase, momente i slike nadopuniti iz službenog PDF-a / kataloga.
 */

const phSchema = (caption) => ({
  placeholder: true,
  alt: 'Rezervirano mjesto za shemu aparata.',
  caption,
})

const phPhoto = (caption) => ({
  placeholder: true,
  alt: 'Rezervirano mjesto za fotografiju aparata.',
  caption,
})

const warnStd = [
  'Servis dopušten samo kompetentnim, kvalificiranim ovlaštenim osobama (DIN 14406-4 i odgovarajući hrvatski propisi).',
  'Koristiti isključivo odobrena sredstva za gašenje, plinove za punjenje i originalne rezervne dijelove prema dokumentaciji proizvođača / KLALEDA.',
]

const dash = { co2_2: '—', co2_5: '—', co2_7: '—' }
const co2Parts = [
  { ref: 1, name: 'Roštilj (horn)', code: dash },
  { ref: 2, name: 'Ventil CO₂', code: dash },
  { ref: 3, name: 'Ručica / poluga aktiviranja', code: dash },
  { ref: 4, name: 'Osigurač / zatik', code: dash },
  { ref: 5, name: 'Manometar (ako je ugrađen)', code: dash },
  { ref: 6, name: 'Brtve ventila', code: dash },
  { ref: 7, name: 'Naljepnica / natpis', code: dash },
  { ref: null, name: 'Nosač / držač', code: dash },
  { ref: null, name: 'CO₂ (punjenje mjereno masom)', line: '—' },
]

const pj = { pj6: '—', pj9: '—' }
const pjenaParts = [
  { ref: 1, name: 'Osigurač ventila', code: pj },
  { ref: 2, name: 'Ventil s manometrom', code: pj },
  { ref: 3, name: 'O-brtva ventila', code: pj },
  { ref: 4, name: 'Usponska cijev', code: pj },
  { ref: 5, name: 'Crijevo / mlaznica', code: pj },
  { ref: 6, name: 'Naljepnica', code: pj },
  { ref: null, name: 'Nosač', code: pj },
  { ref: null, name: 'Sredstvo za gašenje (pjena AFFF / FFFP prema odobrenju)', line: '—' },
]

const wk = { w6: '—', w9: '—' }
const vodaParts = [
  { ref: 1, name: 'Osigurač ventila', code: wk },
  { ref: 2, name: 'Ventil s manometrom', code: wk },
  { ref: 3, name: 'O-brtva ventila', code: wk },
  { ref: 4, name: 'Usponska cijev', code: wk },
  { ref: 5, name: 'Crijevo / mlaznica', code: wk },
  { ref: 6, name: 'Naljepnica', code: wk },
  { ref: null, name: 'Nosač', code: wk },
  { ref: null, name: 'Voda u spremniku (prema tipu)', line: '—' },
]

const vc = { vc6: '—', vc9: '—' }
const vodoCo2Parts = [
  { ref: 1, name: 'Osigurač ventila', code: vc },
  { ref: 2, name: 'Ventil / priključak na spremnik vode', code: vc },
  { ref: 3, name: 'Kartuša CO₂ (pogonska)', code: vc },
  { ref: 4, name: 'O-brtve', code: vc },
  { ref: 5, name: 'Usponska cijev', code: vc },
  { ref: 6, name: 'Crijevo / mlaznica', code: vc },
  { ref: 7, name: 'Naljepnica', code: vc },
  { ref: null, name: 'Nosač', code: vc },
  { ref: null, name: 'Voda + kartuša CO₂ (prema uputi)', line: '—' },
]

const mf = { mf2: '—', mf6: '—' }
const mokriParts = [
  { ref: 1, name: 'Osigurač ventila', code: mf },
  { ref: 2, name: 'Ventil s manometrom', code: mf },
  { ref: 3, name: 'O-brtva ventila', code: mf },
  { ref: 4, name: 'Usponska cijev', code: mf },
  { ref: 5, name: 'Crijevo / mlaznica', code: mf },
  { ref: 6, name: 'Naljepnica', code: mf },
  { ref: null, name: 'Nosač', code: mf },
  { ref: null, name: 'Mokro kemijsko sredstvo (klasa F)', line: '—' },
]

const sectionsCo2 = [
  {
    heading: '1. Periodični pregled (svake godine)',
    defaultOpen: true,
    blocks: [
      {
        subheading: '1.1. Provjera vanjskog stanja',
        paragraphs: [
          'Provjeriti vanjsko stanje čeličnog (ili aluminijskog) spremnika, zavoja, zavrtnjeva i zaštitnih kapica. Tražiti koroziju, udarce, istrošenost premaza, pukotine na zavaru i neočekivane deformacije. Natpis, oznake klase požara i tablica servisa moraju biti čitljivi. Plastične ručke i zaštite provjeriti na pukotine i otpornost. Prije radova aparat učvrstiti u servisnom stalaku.',
        ],
      },
      {
        subheading: '1.2. Roštilj (horn) i priključak na ventil',
        paragraphs: [
          'Provjeriti je li roštilj čvrsto zategnut i nije li napukao ili deformiran. Unutarnjost roštilja mora biti čista, bez stranih tijela koje bi smanjile učinkovitost mlaza. Navojni spoj prema ventilu ne smije pokazivati tragove istezanja ili oštećenja navoja. Ako proizvođač propisuje zamjenski interval plastičnog dijela roštilja, poštivati ga.',
        ],
      },
      {
        subheading: '1.3. Kontrola punjenja (masa ili tlak)',
        paragraphs: [
          'Kod aparata bez ugrađenog manometra periodična kontrola uključuje odvajanje roštilja (prema uputi), kontrolu cjelovitosti plombe ventila i vaganje cijelog aparata. Dobivena masa usporediti s nazivnom masom CO₂ i dopuštenom tolerancijom iz tipske dokumentacije. Ako masa ne odgovara, aparat se mora isprazniti i ponovno puniti u ovlaštenoj stanici.',
          'Kod aparata s manometrom postupak ispitivanja tlaka obaviti preko predviđenog ispitnog priključka i odobrene opreme, uz držanje tijela ventila odgovarajućim ključem. Temperatura okoline i dopušteno odstupanje tlaka moraju odgovarati tablici proizvođača (često referentna temperatura 20 °C). Ako manometar odstupa od stvarnog stanja, zamijeniti ga.',
        ],
      },
      {
        subheading: '1.4. Završno ispitivanje',
        bullets: [
          '1.4.1. Natpis i naljepnice: zamijeniti oštećene; aparat očistiti, posebno oko ventila i roštilja.',
          '1.4.2. Osigurač / zatik i plombe: vratiti u ispravno stanje prema uputi; spriječiti slučajno otpuštanje CO₂.',
          '1.4.3. Roštilj ponovno montirati i zategnuti momentom iz tipske tablice (ne zatezati „na osjećaj”).',
          '1.4.4. Potvrda o servisiranju: datum, servis, adresa; ne prekrivati obvezne oznake.',
          '1.4.5. Držač: pregledati i zamijeniti ako je korodirao ili labav.',
        ],
        note:
          'Napomena: CO₂ pri otvaranju ventila jako hladi metal; koristiti zaštitu za ruke i lice. Raditi u prozračenom prostoru.',
      },
    ],
  },
  {
    heading: '2. Unutarnji pregled (propisani interval), popravak, ponovno punjenje',
    defaultOpen: false,
    blocks: [
      {
        subheading: '2.1. Vanjski pregled',
        paragraphs: [
          'Ponoviti točku 1.1. Prije otvaranja spremnika provjeriti je li aparat potpuno ispražnjen od CO₂ u sigurnim uvjetima i uz osobnu zaštitnu opremu.',
        ],
      },
      {
        subheading: '2.2. Hidrostatička proba i životni vijek spremnika',
        paragraphs: [
          'Čelični spremnici na CO₂ podliježu periodičkoj hidrostatičkoj probi i označavanju prema pravilniku o posudama pod tlakom. Intervale i način provedbe provesti točno prema zapisu na spremniku i uputi proizvođača. Ako probu ne prođe ili je rok istekao, spremnik ne smije se puniti.',
        ],
      },
      {
        subheading: '2.3. Praznjenje, pregled ventila i ponovno punjenje CO₂',
        bullets: [
          '2.3.1. Isprazniti preostali CO₂ kroz odobreni sustav za reciklažu / odsis, ne u zatvoren prostor.',
          '2.3.2. Demontirati ventil prema uputi; pregledati vreteno, izlazne kanale i sigurnosne elemente; zamijeniti potrošne brtve.',
          '2.3.3. Unutarnji vizualni pregled spremnika (ogledalo, svjetlo) – tragovi korozije ili stranih tvari povlače daljnju procjenu.',
          '2.3.4. Punjenje obaviti u stanici za punjenje CO₂, mjereno masom ili volumenom prema tipskoj tabličici; nakon punjenja provjeriti nepropusnost i masu.',
        ],
      },
      {
        subheading: '2.4. Montaža i završna kontrola',
        paragraphs: [
          'Ventil zategnuti propisanim momentom. Ugraditi novi osigurač / plombu. Montirati roštilj. Provesti probu curenja odgovarajućim detektorom. Potvrditi ispravnost natpisa i upisati unutarnji pregled na servisnu naljepnicu.',
        ],
      },
    ],
  },
  {
    heading: '3. Moment zatezanja',
    defaultOpen: false,
    blocks: [
      {
        paragraphs: [
          'Moment zatezanja ventila na spremnik i priključka roštilja na ventil mora biti točno prema tipskoj tabličici proizvođača (u umetnutom PDF-u). Koristiti kalibrirani momentni ključ. CO₂ pod visokim tlakom – nedovoljno zatezanje opasno je po curenje, a prezatezanje može oštetiti navoje.',
        ],
      },
    ],
  },
]

const sectionsHoseAgent = (agentLabel, fillBullets) => [
  {
    heading: '1. Periodični pregled (svake godine)',
    defaultOpen: true,
    blocks: [
      {
        subheading: '1.1. Provjera vanjskog stanja',
        paragraphs: [
          'Provjeriti vanjsko stanje spremnika i armature: korozija, udarci, čitljivost natpisa, plastični dijelovi, plombe. Aparat pričvrstiti u servisni uređaj prije radova na tlaku.',
        ],
      },
      {
        subheading: '1.2. Vanjski pregled – crijevo / mlaznica',
        paragraphs: [
          'Crijevo odvrnuti od ventila (ako uputa dopušta na periodičnom pregledu). Provjeriti vanjski omotač, pletenicu, lomove, tvrdoću gume i prolaznost. Spojni navoji moraju biti neoštećeni. Mlaznicu provjeriti na čvrstoću i čistoću kanala.',
        ],
      },
      {
        subheading: '1.3. Ispitivanje pogonskog tlaka',
        paragraphs: [
          'Manometar ili jalovi nastavak pažljivo odvrnuti; tijelo nastavka na spremniku držati odgovarajućim ključem. Ugraditi adapter s ispitnim ventilom ako ga uputa predviđa (npr. 000 176 ili ekvivalent za tip ventila). Očitati tlak i usporediti s dopuštenim vrijednostima na referentnoj temperaturi (najčešće 20 °C).',
          'Ako tlak nije u dopuštenom području, izvršiti punjenje pogonskim plinom prema uputi ili otkloniti kvar. Manometar koji lažno pokazuje zamijeniti.',
        ],
      },
      {
        subheading: '1.4. Završno ispitivanje',
        bullets: [
          '1.4.1. Očistiti aparat; natpis i naljepnice moraju biti čitljivi.',
          '1.4.2. Plombe i osigurači prema uputi za tip ventila.',
          '1.4.3. Crijevo zategnuti propisanim momentom (često 20 Nm za gumenu cijev – provjeriti u PDF-u).',
          '1.4.4. Potvrda o servisiranju; ne prekrivati obvezne oznake.',
          '1.4.5. Držač / nosač: pregled i zamjena.',
        ],
        note:
          'Napomena: servisna naljepnica na usponskoj cijevi – postupak kao kod aparata na prah s crijevom (otvaranje spremnika, zamjena O-brtve ventila, ponovna montaža).',
      },
    ],
  },
  {
    heading: '2. Unutarnji pregled (4 godine), popravak, ponovno punjenje',
    defaultOpen: false,
    blocks: [
      {
        subheading: '2.1. Vanjski pregled spremnika i armature',
        paragraphs: [
          'Ponoviti točku 1.1. Aparat sigurno učvrstiti prije otpuštanja tlaka.',
        ],
      },
      {
        subheading: '2.2. Vanjski pregled – crijevo',
        paragraphs: ['Ponoviti točku 1.2. prije otvaranja spremnika.'],
      },
      {
        subheading: '2.3. Spremnik – tlak, pražnjenje, unutarnji pregled',
        bullets: [
          '2.3.1. Otpustiti tlak kontrolirano kroz ispitni ventil; ostatak kroz predviđeni kanal; ventil otvoriti do kraja.',
          `2.3.2. Isprazniti sadržaj (${agentLabel}); po potrebi ispirati spremnik prema uputi (npr. deionizirana voda za vodene aparate). Unutarnji pregled na koroziju i oštećenja.`,
          '2.3.3. Zapis unutarnjeg pregleda na usponskoj cijevi trajnim markerom; pregled navojne brtve.',
          '2.3.4. Tlačna proba spremnika u intervalima prema pravilniku ako je propisano ili ako postoji sumnja na oštećenje.',
          '2.3.5. Zamijeniti oštećene naljepnice; paziti na oznaku sredstva.',
        ],
      },
      {
        subheading: `2.4. ${agentLabel} – priprema za ponovno punjenje`,
        paragraphs: [
          `Za ponovno punjenje koristiti isključivo sredstvo iste vrste i odobrenja kao na natpisu aparata. Ne miješati različita odobrenja. ${agentLabel === 'Pjena' ? 'Stabilnost pjene i zimski razredivač provjeriti prema listu podataka proizvođača.' : ''} Otpadno sredstvo zbrinuti propisano.`,
        ],
      },
      {
        subheading: '2.5. Ventil – demontaža, čišćenje, brtve',
        paragraphs: [
          'Demontaža ventila prema shemi: osigurač, prelazni dio, usponska cijev, opruge, vreteno. Očistiti, pregledati, podmazati bezkiselinskom mašću gdje uputa dopušta. O-brtve obavezno zamijeniti novima dimenzija iz tablice.',
        ],
      },
      {
        subheading: '2.6. Montaža, punjenje i završna kontrola',
        bullets: fillBullets,
      },
    ],
  },
  {
    heading: '3. Moment zatezanja',
    defaultOpen: false,
    blocks: [
      {
        paragraphs: [
          'Ventil na spremnik: tipično 50 Nm (provjeriti u uputi za konkretni tip). Gumena cijev na ventil: tipično 20 Nm. Sve vrijednosti potvrditi u umetnutom PDF-u proizvođača; koristiti kalibrirani momentni ključ.',
        ],
      },
    ],
  },
]

export const moreExtinguishers = [
  {
    id: 'co2',
    shortLabel: 'CO₂',
    title: 'Aparati s CO₂',
    subtitle: 'Tečni ugljični dioksid (visokotlačni spremnik)',
    partVariants: [
      { key: 'co2_2', label: '2 kg' },
      { key: 'co2_5', label: '5 kg' },
      { key: 'co2_7', label: '7 kg' },
    ],
    defaultPartVariant: 'co2_2',
    parts: co2Parts,
    heroImage: phSchema('Umetnite sliku sheme (npr. /images/co2-shema.jpeg).'),
    productPhotos: {
      co2_2: phPhoto('Umetnite fotografiju aparata CO₂ 2 kg.'),
      co2_5: phPhoto('Umetnite fotografiju aparata CO₂ 5 kg.'),
      co2_7: phPhoto('Umetnite fotografiju aparata CO₂ 7 kg.'),
    },
    specsByVariant: {
      co2_2: [
        { label: 'Tip', value: 'CO₂ 2 kg (prema natpisu)' },
        { label: 'Medij', value: 'Tečni ugljični dioksid (CO₂)' },
        {
          label: 'Kapacitet gašenja',
          value: 'Prema tipskoj tabličici (npr. klasa B); potvrditi na aparatu',
        },
        {
          label: 'Pogonski plin',
          value:
            'U aparatima na tečni CO₂ radno sredstvo je istovremeno i pogonski medij (nema zasebnog spremnika dušika). Punjenje u ovlaštenoj stanici, mjereno masom prema uputi i tolerancijama.',
        },
        { label: 'Nazivna masa CO₂', value: 'Prema natpisu ± tolerancija iz upute' },
        { label: 'Broj odobrenja (tip)', value: 'Prema natpisu / dokumentaciji' },
        {
          label: 'Unutarnji pregled / hidrostatska proba',
          value: 'Intervali prema pravilniku o posudama pod tlakom i uputi proizvođača',
        },
        { label: 'Adapter / oprema za punjenje', value: 'Prema uputi za tip ventila' },
      ],
      co2_5: [
        { label: 'Tip', value: 'CO₂ 5 kg (prema natpisu)' },
        { label: 'Medij', value: 'Tečni ugljični dioksid (CO₂)' },
        { label: 'Kapacitet gašenja', value: 'Prema tipskoj tabličici; potvrditi na aparatu' },
        {
          label: 'Pogonski plin',
          value:
            'Isto kao kod 2 kg: CO₂ kao radno i pogonsko sredstvo; punjenje mjereno masom u stanici.',
        },
        { label: 'Nazivna masa CO₂', value: 'Prema natpisu ± tolerancija iz upute' },
        { label: 'Broj odobrenja (tip)', value: 'Prema natpisu / dokumentaciji' },
        {
          label: 'Unutarnji pregled / hidrostatska proba',
          value: 'Intervali prema pravilniku o posudama pod tlakom i uputi proizvođača',
        },
        { label: 'Adapter / oprema za punjenje', value: 'Prema uputi za tip ventila' },
      ],
      co2_7: [
        { label: 'Tip', value: 'CO₂ 7 kg (prema natpisu)' },
        { label: 'Medij', value: 'Tečni ugljični dioksid (CO₂)' },
        { label: 'Kapacitet gašenja', value: 'Prema tipskoj tabličici; potvrditi na aparatu' },
        {
          label: 'Pogonski plin',
          value:
            'Isto kao kod manjih masa: CO₂ kao radno i pogonsko sredstvo; punjenje mjereno masom u stanici.',
        },
        { label: 'Nazivna masa CO₂', value: 'Prema natpisu ± tolerancija iz upute' },
        { label: 'Broj odobrenja (tip)', value: 'Prema natpisu / dokumentaciji' },
        {
          label: 'Unutarnji pregled / hidrostatska proba',
          value: 'Intervali prema pravilniku o posudama pod tlakom i uputi proizvođača',
        },
        { label: 'Adapter / oprema za punjenje', value: 'Prema uputi za tip ventila' },
      ],
    },
    warnings: warnStd,
    sections: sectionsCo2,
  },
  {
    id: 'pjena',
    shortLabel: 'Pjena',
    title: 'Aparati s pjenom',
    subtitle: 'AFFF / FFFP – pohranjeni tlak, crijevo',
    partVariants: [
      { key: 'pj6', label: '6 l' },
      { key: 'pj9', label: '9 l' },
    ],
    defaultPartVariant: 'pj6',
    parts: pjenaParts,
    heroImage: phSchema('Umetnite sliku sheme (npr. /images/pjena-shema.jpeg).'),
    productPhotos: {
      pj6: phPhoto('Umetnite fotografiju aparata s pjenom 6 l.'),
      pj9: phPhoto('Umetnite fotografiju aparata s pjenom 9 l.'),
    },
    specsByVariant: {
      pj6: [
        { label: 'Tip', value: 'Pjena 6 l (prema natpisu)' },
        { label: 'Medij', value: 'Vodena film-forming pjena (AFFF / FFFP prema odobrenju)' },
        { label: 'Kapacitet gašenja', value: 'Prema tipskoj tabličici (A, B); potvrditi na aparatu' },
        {
          label: 'Pogonski plin',
          value:
            'Dušik ili zrak prema uputi; punjenje regulatorom i tlakom iz tipske tablice. Kontrola manometrom na 20 °C prema dopuštenom odstupanju u PDF-u.',
        },
        { label: 'Napunjeni volumen otopine', value: 'Prema natpisu ± tolerancija' },
        { label: 'Broj odobrenja (tip)', value: 'Prema natpisu' },
        {
          label: 'Unutarnji pregled / tlačna proba',
          value: 'Unutarnji pregled 4 godine (ako uputa ne drugačije); tlačna proba spremnika prema pravilniku',
        },
        { label: 'O-brtva ventila', value: 'Dimenzija prema uputi – uvijek zamijeniti pri otvaranju' },
        { label: 'Moment zatezanja', value: 'Ventil / crijevo prema tipskoj tabličici' },
      ],
      pj9: [
        { label: 'Tip', value: 'Pjena 9 l (prema natpisu)' },
        { label: 'Medij', value: 'Vodena film-forming pjena (AFFF / FFFP prema odobrenju)' },
        { label: 'Kapacitet gašenja', value: 'Prema tipskoj tabličici; potvrditi na aparatu' },
        {
          label: 'Pogonski plin',
          value:
            'Dušik ili zrak prema uputi; punjenje i kontrola tlaka kao za 6 l, s masama i volumenima iz PDF-a za ovaj tip.',
        },
        { label: 'Napunjeni volumen otopine', value: 'Prema natpisu ± tolerancija' },
        { label: 'Broj odobrenja (tip)', value: 'Prema natpisu' },
        {
          label: 'Unutarnji pregled / tlačna proba',
          value: 'Kao za 6 l – intervale potvrditi u dokumentaciji proizvođača',
        },
        { label: 'O-brtva ventila', value: 'Dimenzija prema uputi – zamijeniti' },
        { label: 'Moment zatezanja', value: 'Prema tipskoj tabličici' },
      ],
    },
    warnings: warnStd,
    sections: sectionsHoseAgent('Pjena', [
      '2.6.1. Napuniti spremnik otopinom pjene u propisanoj koncentraciji i volumenu (6 l / 9 l ± tolerancija iz upute).',
      '2.6.2. Navojna brtva i ventil: očistiti, podmazati ako uputa dopušta; ventil zategnuti prema momentu iz tablice.',
      '2.6.3. Puniti pogonski plin (dušik/zrak) preko odobrene opreme do tlaka iz upute.',
      '2.6.4. Proba nepropusnosti svih spojeva detekcijskim sredstvom; držanje prema uputi.',
      '2.6.5. Montirati crijevo i zategnuti momentom za gumu (npr. 20 Nm ako PDF potvrđuje).',
      '2.6.6. Plombe, osigurači, potvrda o servisiranju, držač – kao na periodičnom pregledu.',
    ]),
  },
  {
    id: 'vodeni',
    shortLabel: 'Vodeni',
    title: 'Vodeni aparati',
    subtitle: 'Voda pod tlakom (s ili bez dodataka)',
    partVariants: [
      { key: 'w6', label: '6 l' },
      { key: 'w9', label: '9 l' },
    ],
    defaultPartVariant: 'w6',
    parts: vodaParts,
    heroImage: phSchema('Umetnite sliku sheme (npr. /images/vodeni-shema.jpeg).'),
    productPhotos: {
      w6: phPhoto('Umetnite fotografiju vodenog aparata 6 l.'),
      w9: phPhoto('Umetnite fotografiju vodenog aparata 9 l.'),
    },
    specsByVariant: {
      w6: [
        { label: 'Tip', value: 'Vodeni 6 l (prema natpisu)' },
        { label: 'Medij', value: 'Voda (s dodatkom protiv smrzavanja ili surfaktantom ako je navedeno)' },
        { label: 'Kapacitet gašenja', value: 'Prema tipskoj tabličici (najčešće klasa A); potvrditi na aparatu' },
        {
          label: 'Pogonski plin',
          value:
            'Dušik ili zrak – punjenje i kontrola tlaka prema uputi; adapter i regulator kao u dokumentaciji (npr. 15 +0,5 bar za dušik ako je propisano za tip).',
        },
        { label: 'Volumen vode', value: 'Prema natpisu ± tolerancija' },
        { label: 'Broj odobrenja (tip)', value: 'Prema natpisu' },
        {
          label: 'Unutarnji pregled / tlačna proba',
          value: 'Unutarnji pregled 4 godine; tlačna proba spremnika prema pravilniku',
        },
        { label: 'O-brtva ventila', value: 'Zamijeniti pri svakom otvaranju – dimenzija iz upute' },
        { label: 'Moment zatezanja', value: 'Ventil / crijevo prema tipskoj tabličici' },
      ],
      w9: [
        { label: 'Tip', value: 'Vodeni 9 l (prema natpisu)' },
        { label: 'Medij', value: 'Voda (prema deklaraciji na aparatu)' },
        { label: 'Kapacitet gašenja', value: 'Prema tipskoj tabličici; potvrditi na aparatu' },
        {
          label: 'Pogonski plin',
          value:
            'Kao za 6 l – tlakovi i mase iz PDF-a za konkretni tip; koristiti predviđeni adapter za punjenje.',
        },
        { label: 'Volumen vode', value: 'Prema natpisu ± tolerancija' },
        { label: 'Broj odobrenja (tip)', value: 'Prema natpisu' },
        {
          label: 'Unutarnji pregled / tlačna proba',
          value: 'Kao za 6 l',
        },
        { label: 'O-brtva ventila', value: 'Zamijeniti pri otvaranju' },
        { label: 'Moment zatezanja', value: 'Prema tipskoj tabličici' },
      ],
    },
    warnings: warnStd,
    sections: sectionsHoseAgent('Voda', [
      '2.6.1. Spremnik ispuniti propisanom kvalitetom vode (i dodacima ako su predviđeni) do označenog volumena.',
      '2.6.2. Ventil montirati s novim O-brtvama; zategnuti momentom iz tablice.',
      '2.6.3. Puniti pogonski plin do radnog tlaka; provjeriti manometar.',
      '2.6.4. Nepropusnost spojeva; montaža crijeva; plombe i potvrda o servisiranju.',
    ]),
  },
  {
    id: 'vodo-co2',
    shortLabel: 'Vodo-CO₂',
    title: 'Vodeni aparati s kartušom CO₂',
    subtitle: 'Voda u spremniku, CO₂ kao pogonsko sredstvo',
    partVariants: [
      { key: 'vc6', label: '6 l' },
      { key: 'vc9', label: '9 l' },
    ],
    defaultPartVariant: 'vc6',
    parts: vodoCo2Parts,
    heroImage: phSchema('Umetnite sliku sheme (npr. /images/vodo-co2-shema.jpeg).'),
    productPhotos: {
      vc6: phPhoto('Umetnite fotografiju vodo-CO₂ aparata 6 l.'),
      vc9: phPhoto('Umetnite fotografiju vodo-CO₂ aparata 9 l.'),
    },
    specsByVariant: {
      vc6: [
        { label: 'Tip', value: 'Vodo-CO₂ 6 l (prema natpisu)' },
        { label: 'Medij', value: 'Voda u glavnom spremniku' },
        { label: 'Kapacitet gašenja', value: 'Prema tipskoj tabličici; potvrditi na aparatu' },
        {
          label: 'Pogonski plin',
          value:
            'Kartuša s tečnim CO₂ koja se pri aktivaciji oslobađa u spremnik vode (pritisak u radu prema konstrukciji). Kartušu puniti / zamijeniti samo prema uputi i u ovlaštenoj stanici za CO₂.',
        },
        { label: 'Volumen vode', value: 'Prema natpisu' },
        { label: 'Masa CO₂ u kartuši', value: 'Prema natpisu ± tolerancija iz upute' },
        { label: 'Broj odobrenja (tip)', value: 'Prema natpisu' },
        {
          label: 'Unutarnji pregled',
          value: 'Glavni spremnik – 4 godine; kartuša CO₂ – prema propisima za tlakovnice i uputi',
        },
        { label: 'Moment zatezanja', value: 'Priključci ventila i kartuše prema tablici' },
      ],
      vc9: [
        { label: 'Tip', value: 'Vodo-CO₂ 9 l (prema natpisu)' },
        { label: 'Medij', value: 'Voda u glavnom spremniku' },
        { label: 'Kapacitet gašenja', value: 'Prema tipskoj tabličici' },
        {
          label: 'Pogonski plin',
          value:
            'Kartuša CO₂ – ista logika kao kod 6 l; mase i priključci iz PDF-a za ovaj tip.',
        },
        { label: 'Volumen vode', value: 'Prema natpisu' },
        { label: 'Masa CO₂ u kartuši', value: 'Prema natpisu ± tolerancija' },
        { label: 'Broj odobrenja (tip)', value: 'Prema natpisu' },
        { label: 'Unutarnji pregled', value: 'Kao za 6 l – potvrditi intervale u dokumentaciji' },
        { label: 'Moment zatezanja', value: 'Prema tipskoj tabličici' },
      ],
    },
    warnings: [
      ...warnStd,
      'Pri radu s kartušom CO₂ poštivati hladnoću i visoki tlak; koristiti osobnu zaštitnu opremu.',
    ],
    sections: [
      {
        heading: '1. Periodični pregled (svake godine)',
        defaultOpen: true,
        blocks: [
          {
            subheading: '1.1. Provjera vanjskog stanja',
            paragraphs: [
              'Pregledati spremnik vode i prostor za kartušu CO₂: korozija, udarci, čitljivost natpisa. Provjeriti je li kartuša pravilno učvršćena i nema li oštećenja navoja i zaštitnih kapica. Plombe i osigurači moraju biti neoštećeni.',
            ],
          },
          {
            subheading: '1.2. Crijevo i mlaznica',
            paragraphs: [
              'Kao kod ostalih aparata s crijevom: vizualna kontrola, prolaznost, zategnutost spojeva. Oštećeno crijevo zamijeniti.',
            ],
          },
          {
            subheading: '1.3. Funkcijska provjera bez punog pražnjenja',
            paragraphs: [
              'Prema uputi proizvođača provjeriti mehanizam proboda kartuše / aktivacije. Ne izvoditi opasne pokuse bez procedure iz PDF-a. Ako uputa dopušta, provjeriti ostatak mase CO₂ vagom ili indikator tlaka na kartuši ako postoji.',
            ],
          },
          {
            subheading: '1.4. Završno ispitivanje',
            bullets: [
              '1.4.1. Očistiti aparat; zamijeniti nečitke naljepnice.',
              '1.4.2. Plombe i osigurači u ispravnom stanju.',
              '1.4.3. Crijevo zategnuto prema momentu iz upute.',
              '1.4.4. Potvrda o servisiranju.',
              '1.4.5. Držač / nosač.',
            ],
          },
        ],
      },
      {
        heading: '2. Unutarnji pregled (4 godine), popravak, ponovno punjenje',
        defaultOpen: false,
        blocks: [
          {
            subheading: '2.1. Spremnik vode',
            bullets: [
              '2.1.1. Prazniti vodu i pregledati unutrašnjost na koroziju; po uputi ispirati.',
              '2.1.2. Ponovno puniti vodom propisane kvalitete i volumena.',
              '2.1.3. Ventil glavnog spremnika: O-brtve nove, moment prema tablici.',
            ],
          },
          {
            subheading: '2.2. Kartuša CO₂',
            paragraphs: [
              'Kartušu demontirati prema uputi. Isprazniti i ponovno puniti u stanici za CO₂ ili zamijeniti novom punjenom, sukladno dokumentaciji. Hidrostatička proba kartuše u propisanim intervalima. Ne koristiti oštećenu kartušu.',
            ],
          },
          {
            subheading: '2.3. Montaža i završna kontrola',
            paragraphs: [
              'Montirati kartušu s predviđenim momentom. Provjeriti nepropusnost spoja. Aktivacijski mehanizam mora biti ispravan. Ispisati potvrdu o unutarnjem pregledu.',
            ],
          },
        ],
      },
      {
        heading: '3. Moment zatezanja',
        defaultOpen: false,
        blocks: [
          {
            paragraphs: [
              'Sve vrijednosti momenta (ventil–spremnik, kartuša–nosač, crijevo–ventil) uzeti isključivo iz tipske tablice u PDF-u. Koristiti kalibrirani alat.',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'mokri-kemijski',
    shortLabel: 'Mokri (F)',
    title: 'Mokri kemijski aparati',
    subtitle: 'Klasa F (kuhinja, ulja i masti)',
    partVariants: [
      { key: 'mf2', label: '2 l' },
      { key: 'mf6', label: '6 l' },
    ],
    defaultPartVariant: 'mf2',
    parts: mokriParts,
    heroImage: phSchema('Umetnite sliku sheme (npr. /images/mokri-f-shema.jpeg).'),
    productPhotos: {
      mf2: phPhoto('Umetnite fotografiju mokrog kemijskog aparata 2 l.'),
      mf6: phPhoto('Umetnite fotografiju mokrog kemijskog aparata 6 l.'),
    },
    specsByVariant: {
      mf2: [
        { label: 'Tip', value: 'Mokri kemijski 2 l (prema natpisu)' },
        { label: 'Medij', value: 'Mokro kemijsko sredstvo za klasu F (prema odobrenju)' },
        { label: 'Kapacitet gašenja', value: 'Prema tipskoj tabličici (F i eventualno A); potvrditi na aparatu' },
        {
          label: 'Pogonski plin',
          value:
            'Dušik ili zrak u spremniku pod tlakom – punjenje i kontrola kao kod vodenih aparata; tlakovi i mase iz upute za ovaj tip.',
        },
        { label: 'Volumen sredstva', value: 'Prema natpisu ± tolerancija' },
        { label: 'Broj odobrenja (tip)', value: 'Prema natpisu' },
        {
          label: 'Unutarnji pregled / tlačna proba',
          value: 'Unutarnji pregled 4 godine; tlačna proba spremnika prema pravilniku',
        },
        { label: 'O-brtva ventila', value: 'Zamijeniti pri otvaranju' },
        { label: 'Moment zatezanja', value: 'Ventil / crijevo prema tablici' },
      ],
      mf6: [
        { label: 'Tip', value: 'Mokri kemijski 6 l (prema natpisu)' },
        { label: 'Medij', value: 'Mokro kemijsko sredstvo za klasu F' },
        { label: 'Kapacitet gašenja', value: 'Prema tipskoj tabličici' },
        {
          label: 'Pogonski plin',
          value:
            'Kao za 2 l – parametre punjenja uzeti iz PDF-a za 6 l.',
        },
        { label: 'Volumen sredstva', value: 'Prema natpisu ± tolerancija' },
        { label: 'Broj odobrenja (tip)', value: 'Prema natpisu' },
        { label: 'Unutarnji pregled / tlačna proba', value: 'Kao za 2 l' },
        { label: 'O-brtva ventila', value: 'Zamijeniti pri otvaranju' },
        { label: 'Moment zatezanja', value: 'Prema tablici' },
      ],
    },
    warnings: [
      ...warnStd,
      'Mokra kemija nije zamjena za aparate na prah kod požara električne opreme – poštivati klase požara na natpisu.',
    ],
    sections: sectionsHoseAgent('mokro kemijsko sredstvo', [
      '2.6.1. Napuniti točan volumen odobrenog mokrog kemijskog sredstva (2 l / 6 l ± tolerancija).',
      '2.6.2. Ventil i O-brtve: nova brtva pri svakom otvaranju; moment zatezanja iz tablice.',
      '2.6.3. Pogonski plin do radnog tlaka; nepropusnost.',
      '2.6.4. Crijevo i mlaznica – montaža i moment.',
      '2.6.5. Plombe, potvrda, držač.',
    ]),
  },
]

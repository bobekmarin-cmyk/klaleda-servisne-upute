/**
 * PG 50 LM – mobilni aparat na prahu – PDF KLALEDA str. 92–97.
 */
export const SECTIONS_PG50_LM = [
  {
    heading: '1. Periodični pregled (svake godine)',
    defaultOpen: true,
    blocks: [
      {
        subheading: '1.1. Provjera vanjskog stanja',
        paragraphs: [
          'Provjeriti spremnik praha, okvir, sklop kotura i noseće dijelove: korozija, pukotine u zavarovima, deformacije, čvrstoću pričvršćenja spremnika na ram. Pregledati točkove (stanje gume, ležajeva), kočnicu ako postoji, te da je aparat stabilan kad se solodi. Provjeriti ručke, zaštitne elemente, čitljivost svih natpisa i plombi. Zbog velike mase aparata koristiti odgovarajuće podupirače i ne raditi ispod nestabilno oslonjenog uređaja.',
        ],
      },
      {
        subheading: '1.2. Crijevo visokog tlaka i pištolj / mlaznica',
        paragraphs: [
          'Odmotati ili odvojiti crijevo od nosača prema uputi. Vizualno i taktilno pregledati cijelu duljinu: rezovi, lokalna istanjivanja, lomovi pletenice, oštećenja priključaka i pištolja. Provjeriti slobodan hod okidača i zatvarača, da nema curenja na mirovanju kad je sustav pod tlakom (prema postupku u PDF-u). Navoji moraju biti neoštećeni; spojeve ne zatezati „na osjećaj“ nego prema tablici momenta u uputi.',
        ],
      },
      {
        subheading: '1.3. Ispitivanje pogonskog tlaka',
        paragraphs: [
          'Postupak kao kod aparata s crijevom na prahu: manometar ili jalovi nastavak pažljivo odvrnuti, tijelo nastavka držati odgovarajućim ključem. Ugraditi adapter s ispitnim ventilom (najčešće 000 176, ako uputa za LM ne predviđa drugo) i očitati tlak. Na 20 °C tlak ne smije pasti izvan dopuštenog raspona iz tipske tablice za PG 50 LM (tipično do 10 % pada u odnosu na nazivno, uz naznačeni minimum). Ako manometar i ispitni instrument značajno odstupaju, zamijeniti manometar.',
          'Nakon kontrole ukloniti adapter, vratiti manometar uz nove brtve ako je propisano, i ponovno zategnuti prema momentu iz PDF-a.',
        ],
      },
      {
        subheading: '1.4. Završno ispitivanje',
        bullets: [
          '1.4.1. Očistiti aparat od prašine i ostataka radnih sredstava; natpisi moraju ostati čitljivi.',
          '1.4.2. Namotati crijevo i osigurati ga na nosaču; provjeriti da kočnica i točkovi ne ometaju sigurno kretanje.',
          '1.4.3. Osigurač / plomba na aktivatoru prema uputi – onemogućiti slučajno aktiviranje do sljedećeg pregleda.',
          '1.4.4. Potvrdu o servisiranju smjestiti tako da ne prekriva obvezne oznake; datum (mjesec/godina), servis, adresa.',
        ],
        note:
          'Detaljne ilustracije, tablice momenta i shema armature su na stranicama 92–97 u PDF izdanju KLALEDA 2026 koje su ugrađene kao slike u ovoj aplikaciji.',
      },
    ],
  },
  {
    heading: '2. Unutarnji pregled (4 godine), popravak, ponovno punjenje',
    defaultOpen: false,
    blocks: [
      {
        subheading: '2.1. Priprema i vanjski pregled',
        paragraphs: [
          'Ponoviti točke 1.1. i 1.2. Aparat mora biti sigurno učvršćen u servisu; kod punjenja i otvaranja spremnika osigurati pristup dizalici ili drugom adekvatnom sredstvu ako masa to zahtijeva.',
        ],
      },
      {
        subheading: '2.2. Spremnik – otpuštanje tlaka, pražnjenje praha, unutarnji pregled',
        bullets: [
          '2.2.1. Skinuti zaštitne elemente s ventila prema shemi. Tlak spustiti kroz ispitni ventil; preostali plin otpustiti kontrolirano, zatim ventil otvoriti do kraja.',
          '2.2.2. Prah isprazniti pomoću uređaja za presipavanje (preporučeno zbog mase i prašenja). Unutarnjim pregledom (svjetlo, ogledalo) tražiti koroziju i oštećenja. Korozija – daljnja uporaba samo prema procjeni i pravilniku o posudama pod tlakom. Unutarnji pregled zapisati trajno na usponskoj cijevi (ispitanik, datum).',
          '2.2.3. Navojnu brtvu otvora spremnika pregledati; oštećenu zamijeniti prije ponovne montaže ventila.',
          '2.2.4. Oštećene naljepnice zamijeniti sukladno tipskim podacima i vrsti praha.',
        ],
      },
      {
        subheading: '2.3. Prah za gašenje',
        paragraphs: [
          'Ocijeniti postojeći prah (sipkost, vlagu, odobrenje). Za punjenje koristiti isključivo prah iz originalnog pakiranja s istim brojem odobrenja kao na natpisu aparata. Masa praha za PG 50 LM je reda 50 kg – točnu nazivnu masu i toleranciju uzeti s tipske tablice i natpisa. Neupotrebljiv prah zbrinuti kao poseban otpad.',
        ],
      },
      {
        subheading: '2.4. Ventil i armatura',
        paragraphs: [
          'Demontaža, čišćenje i pregled ventila prema shemi na priloženim stranicama PDF-a: osigurač, prelazni dio, usponska cijev, tlačna opruga, vreteno, brtve. Oštećene dijelove zamijeniti originalnim rezervnim dijelovima. Brtve obavezno zamijeniti novima (dimenzije su u tablici dijelova na slici). Pri sastavljanju poštivati podmazivanje bezkiselinskom mašću gdje uputa nalaže i smjer ugradnje opruge.',
        ],
      },
      {
        subheading: '2.5. Montaža, punjenje plinom, završna kontrola',
        bullets: [
          '2.5.1. Ventil zategnuti momentom iz PDF tablice za PG 50 LM (ne koristiti momente manjih ručnih aparata ako se razlikuju).',
          '2.5.2. Nakon punjenja praha i zatvaranja spremnika puniti pogonski plin (najčešće dušik) preko regulatora i tlaka iz upute.',
          '2.5.3. Provesti probu nepropusnosti na kritičnim spojevima; pustiti vrijeme reakcije prema dokumentu.',
          '2.5.4. Montirati crijevo i pištolj; zategnuti navoje prema tablici momenta za gumene / visokotlačne spojeve.',
          '2.5.5. Postaviti plombe, zaštitne kapice i potvrdu o servisiranju.',
        ],
      },
    ],
  },
  {
    heading: '3. Moment zatezanja i sigurnost',
    defaultOpen: false,
    blocks: [
      {
        paragraphs: [
          'Sve vrijednosti momenta zatezanja uzeti isključivo s tablice na stranicama 92–97 servisne upute (ventil–spremnik, crijevo–ventil, ostali priključci). Koristiti kalibrirani momentni ključ. Pri radu s punim spremnikom praha poštivati ergonomiju – po mogućnosti dvije osobe i mehaničku pomoć pri podizanju i koturanju.',
        ],
      },
    ],
  },
]

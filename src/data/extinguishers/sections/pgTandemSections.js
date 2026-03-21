/**
 * PG 6 / PG 12 Tandem – servisne upute (PDF KLALEDA str. 29–31, 3–4).
 */
export const SECTIONS_PG_TANDEM = [
  {
    heading: '1. Periodični pregled (svake godine)',
    defaultOpen: true,
    blocks: [
      {
        subheading: '1.1. Vizualna kontrola',
        paragraphs: [
          'Vanjska kontrola spremnika i armature (opće stanje, štete od korozije, mehanička oštećenja, čitljivost natpisa). Vizualna kontrola plastičnih dijelova na promjene kao što su puknuća, promjena boje itd. Neoštećenost plombe. Zategnite aparat za gašenje u prikladnoj napravi.',
        ],
      },
      {
        subheading: '1.2. Cijev',
        paragraphs: [
          'Odvrnite cijev s ventila. Kontrola crijeva na puknuća, lomove i deformacije te slobodan prolaz. Povezivanja moraju imati čvrst dosjed i ne smiju biti oštećena.',
        ],
      },
      {
        subheading: '1.3. Ispitivanje pogonskog tlaka',
        paragraphs: [
          'Određivanje postojećeg pogonskog tlaka. Pri 20 °C tlak ne smije opasti za više od 10 % (minimalno 13,5 bara). Prilikom tlačnog ispitivanja slijedite sljedeće korake. Odvrnite poklopac za zaštitu od prašine na ispitnom nastavku, pričvrstite neovisan mjerni uređaj za mjerenje tlaka, očitajte pogonski tlak i usporedite s prikazanim tlakom manometra aparata za gašenje. Ako je tlak manji od minimalno dopuštenog unutarnjeg tlaka spremnika, potreban je popravak. Ako prikazani tlak na manometru aparata za gašenje odstupa od stvarnog pogonskog tlaka, zamijenite ugrađeni manometar. Ponovno navrnite poklopac za zaštitu od prašine.',
          'Zamjena manometra: Ispustite unutarnji tlak putem ispitnog ventila. Pritom osigurajte ventil s pomoću sigurnosnog zatika i okrenite aparat za gašenje naopako. Pozor: Ispustite preostali tlak laganim izvrtanjem ventila (oko 2 okretaja) putem proreza za ispuštanje tlaka. Nakon potpunog ispuštanja tlaka izvrnite ventil. Demontirajte stari manometar. Zabrtvite novi manometar novom O-brtvom 7,65 × 1,78 i ljepilom „Loctite 648“. Zamijenite obje O-brtve 26 × 3. Očistite ventil i ponovno ga uvrnite. Napunite aparat za gašenje dušikom (minimalno rosište −40 °C) (15 +0,5 bara pri 20 °C). Kontrola nepropusnosti (sredstvo za otkrivanje propuštanja). Pozor: U ventilu se ne smiju nalaziti ostaci sredstva za otkrivanje propuštanja.',
        ],
      },
      {
        subheading: '1.4. Završetak ispitivanja',
        bullets: [
          '1.4.1. Natpis: provjerite natpisa na točnost i potpunu čitljivost, po potrebi ga zamijenite. Očistite aparat za gašenje požara.',
          '1.4.2. Uklonite staru plombu i ponovno plombirajte sigurnosni zatik na ventilu (bakrena žica od 0,4 mm). Osigurajte poklopac za zaštitu od prašine zelenim sigurnosnim lakom.',
          '1.4.3. Ponovno navrnite crijevo (potezni moment 20 Nm).',
          '1.4.4. Postavite dokaz o preventivnom održavanju (ispod ili desno pokraj oznake). Slika oznake ne smije se prekriti, čak niti djelomično. Postavite datum preventivnog održavanja (mjesec/godina) i broj ili ime ispitivača i adresu.',
          '1.4.5. Provjerite držač aparata za gašenje na oštećenja i pričvršćenje (ako je dostupan) i po potrebi ga zamijenite.',
        ],
        note:
          'NAPOMENA: Obzirom da pravilnik o vatrogasnm aparatima zahtijeva da se naljepi naljepnica na usponsku cijev, potrebno je odraditi slijedeće radnje: Otvoriti spremnik, zalijepiti naljepnicu na usponsku cijev, zamijeniti O-brtvu ventila, te zavrnuti ventil. Sve navedeno je opisano u točkama 2.3.1., 2.5., 2.6.',
      },
    ],
  },
  {
    heading: '2. Unutarnja provjera (svake 4 godine), popravljanje, ponovno punjenje',
    defaultOpen: false,
    blocks: [
      {
        subheading: '2.1. Vizualna provjera',
        paragraphs: ['Kao točka 1.1. Preventivno održavanje'],
      },
      {
        subheading: '2.2. Cijev',
        paragraphs: ['Kao točka 1.2. Preventivno održavanje'],
      },
      {
        subheading: '2.3. Spremnik',
        bullets: [
          '2.3.1. Otvaranje spremnika: Ispustite unutarnji tlak putem ispitnog ventila. Pritom osigurajte ventil s pomoću sigurnosnog zatika i okrenite aparat za gašenje naopako. Pozor: Ispustite preostali tlak laganim izvrtanjem ventila iz međukomada (oko 2 okretaja) putem proreza za ispuštanje tlaka. Pritom ključem držite međukomad. Nakon što je ispušten tlak iz aparata za gašenje, u potpunosti izvrnite ventil.',
          '2.3.2. Ispraznite spremnik u potpunosti (po mogućnosti uređajem za prelijevanje praha), izvršite unutarnju provjeru i kontrolirajte spremnik na moguću koroziju (osvjetljivanje sa zrcalom). Ako uočite udubine od korozije, odložite spremnik iz sigurnosnih razloga. Provjerite navojne prstene na oštećenja i prohodnost.',
          '2.3.3. Ukoliko se tijekom unutrašnjeg pregleda spremnika otkriju oštećenja, potrebno je izvršiti tlačnu probu spremnika.',
          '2.3.4. Zamijenite oštećeni natpis odgovarajućom naljepnicom.',
        ],
      },
      {
        subheading: '2.4. Prah za gašenje',
        paragraphs: [
          'Provjerite prah za gašenje stručno na vrstu, kvalitetu i daljnju uporabu (provjera stvaranja gruda). Prilikom novog punjenja upotrijebite samo pakiranja za ponovno punjenje praha za gašenje identična s oznakom dopuštenja na aparatu za gašenje. Ne smiju se miješati prahovi za gašenje različitih brojeva dopuštenja.',
        ],
      },
      {
        subheading: '2.5. Ventil',
        paragraphs: [
          'U potpunosti odvojite ventil od međukomada uzlaznom cijevi i sprinklerom za bočnu stijenku. Nakon toga izvadite sigurnosni zatik, odvrnite prijelazni komad u uzlaznoj cijevi, skinite stožastu tlačnu oprugu, istisnite vratilo i provjerite pričvršćenje ručki na kućištu ventila. Očistite sve dijelove i provjerite ih na oštećenja te slobodnu prohodnost. Zamijenite oštećene dijelove. Prilikom sastavljanja ventila blago podmažite okrugli prsten na gornjem držaču vretena vazelinom bez kiseline i umetnite vreteno u kućište. Prije uvrtanja prijelaznog komada pripazite da tlačnu oprugu umetnete s manjim promjerom okrenutim prema stošcu ventila. Demontirajte uzlaznu cijev s međukomada i očistite je te je provjerite na oštećenja. Vizualno provjerite sprinkler za bočnu stijenku. Pritom pazite na pravilan položaj prema uzdužnoj osiovini spremnika (vidi napomene za montažu). Montirajte uzlaznu cijev. Ispitivanje unutrašnjosti treba zabilježiti flomasterom na uzlaznoj cijevi armature (br. ispitivača i mjesec/godina). U pravilu je potrebno zamijeniti obje O-brtve 26 × 3. Umetnite sigurnosni zatik.',
        ],
      },
      {
        subheading: '2.6. Montaža',
        bullets: [
          '2.6.1. Umetnite potrebnu količinu sredstva za gašenje u kontrolirani spremnik (prema tipskoj tablici: PG 6 Tandem – Neutrex super 6 kg; PG 12 Tandem – Neutrex super 25 kg).',
          '2.6.2. Očistite navojni prsten i dosjed brtve spremnika i međukomada te ih blago podmažite vazelinom bez kiseline.',
          '2.6.3. Montirajte međukomad poteznim momentom od 35 do 40 Nm. Pritom pazite da se sprinkler za bočnu stijenku nalazi točno nasuprot spojnice za vješanje spremnika.',
          '2.6.4. Uvrnite čitav ventil i pritegnite ga poteznim momentom od 35 do 50 Nm. Pazite na pravilan položaj ventila prema spremniku.',
          '2.6.5. Postavljanje naprave za stavljanje pod tlak i stavljanje pod tlak dušikom (minimalno rosište −40 °C) putem podešenog reduktora tlaka (15 +0,5 bara). Stavite poklopac za zaštitu od prašine.',
          '2.6.6. Provjera nepropusnosti sredstvom za otkrivanje propuštanja (oko 5 min). Pritom kontrolirajte uz sve brtve i ventil, ventil za vozilo, manometar i završni komad.',
          '2.6.7. Sušenje i čišćenje aparata za gašenje. Pozor: U ventilu se ne smiju nalaziti ostaci sredstva za otkrivanje propuštanja. Uvrnite gumenu cijev (potezni moment 20 Nm).',
          '2.6.8. Stavite plombu na osigurač (bakrena žica 0,4 mm) te osigurajte prijelaze poklopac za zaštitu od prašine / ventil i ventil / spremnik zelenim sigurnosnim lakom. Uklanjanje sigurnosnog zatika ne smije biti moguće bez oštećenja plombe.',
          '2.6.9. Postavite dokaz o preventivnom održavanju (ispod ili desno pokraj oznake). Polje oznake ne smije se prekriti, čak niti djelomično. Postavite datum ispitivanja i unutarnjeg ispitivanja (mjesec/godina) te broj ili ime ispitivača i adresu. Provjerite držač aparata za gašenje na oštećenja i pričvršćenje (ako je dostupan) i po potrebi ga zamijenite.',
        ],
      },
    ],
  },
  {
    heading: '3. Novo punjenje',
    defaultOpen: false,
    blocks: [
      {
        subheading: '3.1. Aparat je aktiviran ručno i korišten',
        paragraphs: [
          'Postupak kao opisan u točkama 1 i 2 ovih propisa. Odložite ostatke sredstva za gašenje prema propisima.',
        ],
      },
      {
        subheading: '3.2. Aparat se aktivirao automatski',
        paragraphs: [
          'Postupak kao opisan u točkama 1.1, 1.2 i 1.4 ovih propisa.',
          'Zamjena sprinklera za bočnu stijenku: Izvrnite sprinkler za bočnu stijenku iz međukomada. Temeljito očistite unutarnji navoj međukomada (uklonite sve ostatke brtvila iz međukomada!). Umetnite novi sprinkler za bočnu stijenku i pritegnite ga (cca. 40 Nm). Kao brtvilo se koristite posebnim ljepilom prema popisu rezervnih dijelova.',
          'Obratite pozornost na: Položaj sprinklera za bočnu stijenku podesite tako da odbojni lim bude točno vodoravan i s gornje strane. Kod isporuke rezervnih dijelova odbojni lim savijen je pod kutom od 90° prema pričvršćenju. Kod aparata za gašenje prahom taj kut treba ispraviti na 45°. Vidi crtež.',
          'Nakon toga napunite odgovarajući prah za gašenje. Ostatak montaže prema točki 2 ovih propisa.',
        ],
      },
    ],
  },
  {
    heading: '4. Moment zatezanja',
    defaultOpen: false,
    blocks: [
      {
        paragraphs: [
          'Ventil 35 do 40 Nm',
          'Crijevo 20 Nm',
          'Sprinkler za bočnu stijenku 40 Nm',
        ],
      },
    ],
  },
]

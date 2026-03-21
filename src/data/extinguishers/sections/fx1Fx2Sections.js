/**
 * FX1 / FX2 – servisne upute (PDF KLALEDA str. 7–8).
 * Samo za katalogski tip FX1/FX2; ne dijeliti s drugim aparatima.
 */
export const SECTIONS_FX1_FX2 = [
  {
    heading: '1. Periodični pregled (svake godine)',
    defaultOpen: true,
    blocks: [
      {
        subheading: '1.1. Provjera vanjskog stanja',
        paragraphs: [
          'Provjera vanjskog stanja spremnika i ventila (opće stanje, pojava korozije, mehanička oštećenja, čitljivost natpisa. Provjera stanja dijelova od plastike na promjene kao što su napuknuća, promjena boje itd.). Ispravnost plombi. Vatrogasni aparat treba pričvrstiti u odgovarajući uređaj.',
        ],
      },
      {
        subheading: '1.2. Kontrola pogonskog tlaka',
        paragraphs: [
          'Skinuti zaštitnu kapu ventila odvrtanjem mlaznice (Inbus SW 8 unutra) i odvijanjem bočnog vijka (s križnim utorom). Skinuti kapu. Preispitati polugu za aktiviranje i osigurač na oštećenja. Tijekom kontrole tlaka treba postupiti na sljedeći način: oprezno odvrnuti manometar (prelazni dio držati viličastim ključem sa SW 15). Uvrnuti adapter s ispitnim ventilom (kataloški broj: 000 176) i montirati ispitni manometar. Očitati pogonski tlak i usporediti s prikazanim tlakom na manometru vatrogasnog aparata. Na 20 °C tlak ne smije pasti za više od 10 % (minimalno 12,6 bar). Ukoliko je tlak pao ispod minimalno dopuštenog tlaka u spremniku treba povisiti tlak na odgovarajuću razinu. Ukoliko je tlak pao ispod minimalno dopuštenog tlaka u spremniku treba izvršiti odgovarajući popravak. Ukoliko odstupa prikazani tlak na manometru vatrogasnog aparata od stvarnog pogonskog tlaka, treba zamijeniti ugrađeni manometar. Nakon izvršene kontrole tlaka treba odvrnuti adapter s ispitnim ventilom i ugraditi manometar s novom O-brtvom 7,65 × 1,78. Montirati zaštitnu kapu ventila.',
        ],
      },
      {
        subheading: '1.3. Završno ispitivanje',
        bullets: [
          '1.3.1. Naljepnica / natpis upute: provjeriti ispravnost natpisa i potpunu čitljivost i po potrebi zamijeniti. Očistiti vatrogasni aparat.',
          '1.3.2. Tlačnu polugu plombirati pomoću osigurača.',
          '1.3.3. Staviti potvrdu o servisiranju (ispod ili desno od natpisa). Ne smije se stavljati naljepnica na postojeću, pa čak ni djelomično. Treba navesti datum ispitivanja (mjesec/godina) i broj ili ime ispitanika te adresa.',
          '1.3.4. Držač vatrogasnog aparata pregledati na oštećenja i način pričvršćivanja (ukoliko dostupno), po potrebi zamijeniti.',
        ],
        note:
          'NAPOMENA: Obzirom da pravilnik o vatrogasnm aparatima zahtijeva da se naljepi naljepnica na usponsku cijev, potrebno je odraditi slijedeće radnje: Otvoriti spremnik, zalijepiti naljepnicu na usponsku cijev, zamijeniti O-brtvu ventila, te zavrnuti ventil. Sve navedeno je opisano u točkama 2.2.1., 2.4., 2.5.2 - 2.5.0',
      },
    ],
  },
  {
    heading: '2. Unutarnji pregled (svake 4 godine), popravak, ponovno punjenje',
    defaultOpen: false,
    blocks: [
      {
        subheading: '2.1. Vanjski pregled',
        paragraphs: ['Vanjski pregled kao točka 1.1. provjera vanjskog stanja'],
      },
      {
        subheading: '2.2. Spremnik',
        bullets: [
          '2.2.1. Skinuti zaštitnu kapu ventila. Isprazniti spremnik. Nakon toga odsraniti manometar (prelazni dio s viličastim ključem držati s SW 15) i nadomjestiti adapterom s ispitnim ventilom (kataloški broj: 000 176). Putem tog ispitnog ventila odpustiti unutarnji tlak. Oprez: Ostatak tlaka isprazniti iz spremnika opreznim odvrtanjem ventila (cca. 2 okretaja) preko utora za regulaciju tlaka. Nakon što je vatrogasni aparat potpuno bez tlaka, odvrnuti ventil do kraja.',
          '2.2.2. Potpuno isprazniti spremnik (preporučava se pomoću uređaja za presipavanje praha), izvršiti unutarnji pregled i kontrolirati da li postoje tragovi korozije (izvršiti pregled pomoću baterije i ogledala). Ukoliko su vidljivi tragovi korozije spremnik se ne smije dalje korisitit iz sigurnosnih razloga. Podatke o unutarnjem pregledu treba napisati flomasterom na usponskoj cijevi ventila (broj ispitanika i mjesec/godinu). Navojnu brtvu treba pregledati na oštećenja i prolaznost.',
          '2.2.3. Ukoliko se se tijekom unutrašnjeg pregleda spremnika otkriju oštećenja, potrebno je izvršiti tlačnu probu spremnika.',
          '2.2.4. Oštećene naljepnice nadomjestiti novom naljepnicom.',
        ],
      },
      {
        subheading: '2.3. Prah za gašenje',
        paragraphs: [
          'Prah za gašenje preispitati na vrstu, sastav i daljnju upotreblijivost (ispitivanje sipkosti praha). Prilikom novog punjenja koristiti samo prah za gašenje iz pakiranja za ponovno punjenje koji je identičan onome u vatrogasnom aparatu. Ne smije se mješati prah za gašenje s različitim brojevima odobrenja. Prah za gašenje koji se ne može dalje upotrijebiti treba zbrinuti sukladno propisima za poseban otpad.',
        ],
      },
      {
        subheading: '2.4. Ventil',
        paragraphs: [
          'Odvrnuti prelazni dio s usponskom cijevi, izvaditi tlačnu oprugu i izstisnuti vreteno ventila. Sve dijelove treba očistiti i pregledati na oštećenja i slobodnu prozlaznost. Oštećene dijelove treba zamjeniti novim. Pri sastavljanju ventila treba brtvu podmazati bezkiselinskom mašću na gornjem dršku vretena i umetnuti vreteno u kućište. Prije pričvršćivanja usponske cijevi treba paziti da tlačna opruga bude umetnuta na način da ona strana s manjim promjerom bude okrenuta prema stožastom ventilu. O-brtvu 28×2,5 treba svakako zamijeniti.',
        ],
      },
      {
        subheading: '2.5. Montaža',
        bullets: [
          '2.5.1. Napuniti pregledani spremnik s potrebnom količinom praha za gašenje: FX1 – 1 kg ± 20 g; FX2 – 2 kg ± 40 g.',
          '2.5.2. Očistiti navojnu brtvu i dosjednu površinu brtve na spremnik i podmazati bezkiselinskom mašću.',
          '2.5.3. Zategnuti kompletan ventil s 50 Nm i pripaziti na ispravan položaj ventila u odnosu na spremnik.',
          '2.5.4. Za punjenje spremnika tlakom odvrnuti manometar (prelazni dio s viličastim ključem SW 15 držati) i nadomjestiti adapterom s ispitnim ventilom (kataloški broj: 000 176). Priključiti uređaj za punjenje i puniti spremnik s dušikom (minimalno rosište −40 °C) preko uključenog regulatora tlaka (15 +0,5 bar). Skinuti uređaj za punjenje tlaka te odstraniti adapter i ispitni ventil, brtvu 7,65×1,78 obnoviti i uvrnuti manometar. Zadani tlak usporediti prikazanim tlakom na manometru i po potrebi manometar zamijeniti.',
          '2.5.5. Ispitivanje nepropusnosti sa sredstvom za detektiranje pukotina (ca. 5 min).',
          '2.5.6. Posušiti i očistiti vatraogasni aparat. Oprez: U ventilu ne smiju biti ostaci brtvenog materijala.',
          '2.5.7. Montirati zaštitnu kapu ventila i plombirati tlačnu polugu pomoću zatika osigurača.',
          '2.5.8. Staviti potvrdu o servisiranju ispod ili s desne strane natspisa). Ne smije se stavljati naljepnica preko polja za natpis, pa čak ni djelomično. Treba navesti datum ispitivanja i unutarnjeg pregleda (mjesec/godina) kao i broj ili ime ispitanika i adresa.',
          '2.5.9. Kontrolirati držač vatrogasnog aparata u pogledu oštećenja i pričvršćivanja (ukoliko pristupno), po potrebi zamijeniti.',
        ],
      },
    ],
  },
  {
    heading: '3. Moment zatezanja',
    defaultOpen: false,
    blocks: [{ paragraphs: ['Ventil 50 Nm'] }],
  },
]

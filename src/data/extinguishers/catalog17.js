/**
 * 17 poglavlja servisnih uputa – redoslijed kao u PDF-u (sadržaj).
 *
 * Konvencija: svaki tip aparata u katalogu ima vlastito poglavlje u PDF-u i mora imati
 * vlastite `sections` iz tog poglavlja. Grupa u UI-u (prah / CO₂ / pjena / voda) ne
 * znači da se smiju dijeliti iste servisne upute između tipova – tekst i točke moraju
 * odgovarati točno tom modelu / poglavlju u uputi (npr. KS 2 BG ≠ FX1, WD F-500 ≠ S 6 DN).
 * Zajednički modul smije sadržavati samo pomoćne funkcije ili podatke koji nisu tekst uputa.
 *
 * FX1/2: `powderPair` + `sections/fx1Fx2Sections.js`; BS: `sections/bsSections.js`;
 * Euro S: `euroS.js`; PG Ai: `pg6Ai.js`; S 6/9 SK: `sSkSections.js`; ostalo: `catalogPdfRest.js`
 * i moduli u `sections/*` (jedan export teksta po tipu / PDF-poglavlju).
 */

import { powderPair, bsParts } from './powderPair.js'
import { SECTIONS_BS } from './sections/bsSections.js'
import { euroSExtinguisher } from './euroS.js'
import { pg6AiExtinguisher } from './pg6Ai.js'
import {
  pgTandemExtinguisher,
  ks2BgExtinguisher,
  ks5BgExtinguisher,
  wdF500Extinguisher,
  sDnExtinguisher,
  fluorineFreeExtinguisher,
  sSkExtinguisher,
  f2lExtinguisher,
  f6lExtinguisher,
  w6WnaExtinguisher,
  pg50LmExtinguisher,
  p1Extinguisher,
  pSeriesExtinguisher,
} from './catalogPdfRest.js'

/** Padajući izbornik u bočnoj traci – redoslijed grupa */
export const MEDIUM_GROUPS = [
  { key: 'powder', label: 'Prah' },
  { key: 'co2', label: 'CO2' },
  { key: 'foam_f500', label: 'Pjena / F-500' },
  { key: 'water', label: 'Voda' },
]

const p1 = powderPair[0]
const bsFull = powderPair[1]

export const catalog17 = [
  {
    ...p1,
    id: '01-fx1-fx2',
    shortLabel: 'FX1 / FX2',
    mediumGroup: 'powder',
  },
  {
    ...bsFull,
    id: '02-bs06-bs09',
    shortLabel: 'BS06 / BS09',
    title: 'BS06, BS09',
    subtitle: 'Prijenosni aparati s prahom – gumena cijev',
    mediumGroup: 'powder',
    partVariants: [
      { key: 'bs06', label: 'BS06' },
      { key: 'bs09', label: 'BS09' },
      { key: 'bs12', label: 'BS12' },
    ],
    defaultPartVariant: 'bs06',
    parts: bsParts,
    productPhotos: {
      bs06: bsFull.productPhotos.bs06,
      bs09: bsFull.productPhotos.bs09,
      bs12: bsFull.productPhotos.bs12,
    },
    specsByVariant: {
      bs06: bsFull.specsByVariant.bs06,
      bs09: bsFull.specsByVariant.bs09,
      bs12: bsFull.specsByVariant.bs12,
    },
    sections: SECTIONS_BS,
  },
  { ...euroSExtinguisher, mediumGroup: 'powder' },
  { ...pg6AiExtinguisher, mediumGroup: 'powder' },
  { ...pgTandemExtinguisher, mediumGroup: 'powder' },
  { ...ks2BgExtinguisher, mediumGroup: 'co2' },
  { ...ks5BgExtinguisher, mediumGroup: 'co2' },
  { ...wdF500Extinguisher, mediumGroup: 'foam_f500' },
  { ...sDnExtinguisher, mediumGroup: 'foam_f500' },
  { ...fluorineFreeExtinguisher, mediumGroup: 'foam_f500' },
  { ...sSkExtinguisher, mediumGroup: 'foam_f500' },
  { ...f2lExtinguisher, mediumGroup: 'water' },
  { ...f6lExtinguisher, mediumGroup: 'water' },
  { ...w6WnaExtinguisher, mediumGroup: 'water' },
  { ...pg50LmExtinguisher, mediumGroup: 'powder' },
  { ...p1Extinguisher, mediumGroup: 'powder' },
  { ...pSeriesExtinguisher, mediumGroup: 'powder' },
]

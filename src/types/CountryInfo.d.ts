import { Country } from "types/Country"

export interface CountryInfo extends Country {
  nativeName: string
  subregion: string
  topLevelDomain: Array<string>
  currencies: Array<{
    code: string
    name: string
    symbol: string
  }>
  languages: Array<{
    iso639_1: string
    iso639_2: string
    name: string
    nativeName: string
  }>
  borders: Array<string>
}

export interface Country {
  name: string
  flag: string
  population: number
  region: string
  capital: string
  alpha3Code: string
  [extra]: string | number | object | Array
}

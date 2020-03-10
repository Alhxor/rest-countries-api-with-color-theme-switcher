import { useState } from "react"

export function useApiControls() {
  const apiBase = "https://restcountries.eu/rest/v2"
  const apiFields = "name;flag;population;region;capital;alpha3Code"
  const apiFieldsDetailed = `${apiFields};nativeName;subregion;topLevelDomain;currencies;languages;borders`

  const [apiQuery, setApiQuery]: [string, Function] = useState(
    "responseSample.json"
    // `${apiBase}/all?fields=${apiFields}`
  )

  const searchByCountryName = (name: string): void => {
    if (!name) setApiQuery("responseSample.json")
    if (name.length < 3) return

    setApiQuery(`${apiBase}/name/${name}?fields=${apiFields}`)
  }

  const searchByRegion = (region: string): void => {
    if (!region) return
    setApiQuery(`${apiBase}/region/${region}?fields=${apiFields}`)
  }

  const searchByCode = (code: string): void => {
    if (!code) return
    setApiQuery(`${apiBase}/alpha/${code}?fields=${apiFieldsDetailed}`)
  }

  const searchByCodes = (codes: Array<String>): void => {
    if (!codes || !codes.length) return
    setApiQuery(`${apiBase}/alpha/?codes=${codes.join(";")}&fields=name;alpha3Code`)
  }

  return {
    apiQuery,
    searchByCountryName,
    searchByRegion,
    searchByCode,
    searchByCodes,
  }
}

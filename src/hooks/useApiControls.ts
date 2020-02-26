import { useState } from "react"

export function useApiControls() {
  const apiBase = "https://restcountries.eu/rest/v2"
  const apiFields = "name;flag;population;region;capital;alpha3code"
  const apiFieldsDetailed = `${apiFields};nativeName;subregion;topLevelDomain;currencies;languages;borders`

  const [apiQuery, setApiQuery]: [string, Function] = useState(
    "responseSample.json"
    //   `https://restcountries.eu/rest/v2/all?fields=name;flag;population;region;capital`
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

  return { apiQuery, searchByCountryName, searchByRegion, searchByCode }
}

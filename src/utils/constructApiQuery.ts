import { ApiSearch } from "types/ApiSearch"

export function constructApiQuery(search: ApiSearch) {
  const apiBase = "https://restcountries.eu/rest/v2"
  const apiFields = "name;flag;population;region;capital;alpha3Code"
  const apiFieldsDetailed = `${apiFields};nativeName;subregion;topLevelDomain;currencies;languages;borders`
  switch (search.type) {
    case "all":
      return "responseSample.json"
    case "name":
      return `${apiBase}/name/${search.query}?fields=${apiFields}`
    case "region":
      return `${apiBase}/region/${search.query}?fields=${apiFields}`
    case "code":
      return `${apiBase}/alpha/${search.query}?fields=${apiFieldsDetailed}`
    case "codes":
      return `${apiBase}/alpha/?codes=${search.query}&fields=name;alpha3Code`
  }
}

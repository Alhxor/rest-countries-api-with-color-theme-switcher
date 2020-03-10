import { useState } from "react"
import { constructApiQuery } from "utils/constructApiQuery"

export function useApiControls() {
  const [apiQuery, setApiQuery]: [string, Function] = useState(
    constructApiQuery({ type: "all" })
  )

  const searchByCountryName = (name: string): void => {
    if (!name) setApiQuery("responseSample.json")
    if (name.length < 3) return

    setApiQuery(constructApiQuery({ type: "name", query: name }))
  }

  const searchByRegion = (region: string): void => {
    if (!region) return
    setApiQuery(constructApiQuery({ type: "region", query: region }))
  }

  const searchByCode = (code: string): void => {
    if (!code) return
    setApiQuery(constructApiQuery({ type: "code", query: code }))
  }

  const searchByCodes = (codes: string): void => {
    if (!codes) return
    setApiQuery(constructApiQuery({ type: "codes", query: codes }))
  }

  return {
    apiQuery,
    searchByCountryName,
    searchByRegion,
    searchByCode,
    searchByCodes,
  }
}

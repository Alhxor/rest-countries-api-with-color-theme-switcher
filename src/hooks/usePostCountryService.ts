import { useEffect, useState } from "react"
import { Service } from "types/service"
import { Country } from "types/country"

export default function usePostCountryService(apiQuery: string) {
  const [result, setResult] = useState<Service<Country[]>>({
    status: "loading",
  })

  useEffect(() => {
    fetch(apiQuery)
      .then(res => res.json())
      .then(
        res => setResult({ status: "loaded", payload: res }),
        err => setResult({ status: "error", error: err })
      )
  }, [apiQuery])

  return result
}

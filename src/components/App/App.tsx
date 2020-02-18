import React, { useState, useCallback } from "react"

import "./App.css"

import { Country } from "types/Country"
import usePostCountryService from "hooks/usePostCountryService"

import { ThemeProvider } from "components/ThemeContext/ThemeContext"

import { PageLayout } from "components/PageLayout/PageLayout"
import { CountryCard } from "components/CountryCard/CountryCard"
import { Search } from "components/Search/Search"
import { Filter } from "components/Filter/Filter"

export const App: React.FC = () => {
  const handleSearchChange = useCallback((query: string) => {
    if (!query) setApiQuery("http://localhost:3000/responseSample.json")
    if (query.length < 3) return
    setApiQuery(
      `https://restcountries.eu/rest/v2/name/${query}` +
        `?fields=name;flag;population;region;capital`
    )
  }, [])

  // const service = usePostCountryService(
  //   `https://restcountries.eu/rest/v2/all?fields=name;flag;population;region;capital`
  // )

  const [apiQuery, setApiQuery]: [string, Function] = useState(
    "http://localhost:3000/responseSample.json"
  )
  const service = usePostCountryService(apiQuery)

  return (
    <ThemeProvider>
      <PageLayout>
        <form action="#" className="controls">
          <Search onChange={handleSearchChange} />
          <Filter />
        </form>
        {service.status === "loading" && "Loading..."}
        {service.status === "loaded" && (
          <ul>
            {service.payload && service.payload.length
              ? service.payload.map((country: Country, i: number) => (
                  <li key={i}>
                    <CountryCard {...country} />
                  </li>
                ))
              : "Nothing found."}
          </ul>
        )}
        {service.status === "error" && service.error.toString()}
      </PageLayout>
    </ThemeProvider>
  )
}

export default App

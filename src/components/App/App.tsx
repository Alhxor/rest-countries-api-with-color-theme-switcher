import React, { useState } from "react"

import "./App.css"

import { usePostCountryService } from "hooks/usePostCountryService"

import { ThemeProvider } from "components/ThemeContext/ThemeContext"

import { PageLayout } from "components/PageLayout/PageLayout"
import { CountryList } from "components/CountryList/CountryList"
import { Search } from "components/Search/Search"
import { Filter } from "components/Filter/Filter"

export const App: React.FC = () => {
  const handleSearchChange = (query: string): void => {
    if (!query) setApiQuery("http://localhost:3000/responseSample.json")
    if (query.length < 3) return

    setApiQuery(
      `https://restcountries.eu/rest/v2/name/${query}` +
        `?fields=name;flag;population;region;capital`
    )
  }

  const handleFilterSelection = (choice: string): void => {
    if (!choice) return
    setApiQuery(`https://restcountries.eu/rest/v2/region/${choice}`)
  }

  const [apiQuery, setApiQuery]: [string, Function] = useState(
    "responseSample.json"
    //   `https://restcountries.eu/rest/v2/all?fields=name;flag;population;region;capital`
  )
  const service = usePostCountryService(apiQuery)

  return (
    <ThemeProvider>
      <PageLayout>
        <form action="#" className="controls">
          <Search onChange={handleSearchChange} />
          <Filter onChoice={handleFilterSelection} />
        </form>
        <CountryList service={service} />
      </PageLayout>
    </ThemeProvider>
  )
}

export default App

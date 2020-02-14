import React, { useState, useCallback } from "react"

import "./App.css"

import theme from "assets/constants/themes"

import { Country } from "types/Country"
import usePostCountryService from "hooks/usePostCountryService"

import CountryCard from "components/CountryCard/CountryCard"

const initialState = {
  darkMode: false,
  colors: theme.light,
  toggle: () => {},
}

export const Theme = React.createContext(initialState)

export default function App(): JSX.Element {
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

  const [darkMode, setDarkMode] = useState(false)

  const toggle = () => {
    const isDark = !darkMode
    setDarkMode(isDark)
  }

  const colors = darkMode ? theme.dark : theme.light

  return (
    <Theme.Provider value={{ darkMode, colors, toggle }}>
      <div
        className="page"
        style={{
          color: colors.textColor,
          backgroundColor: colors.backgroundColor,
        }}
      >
        <header
          className="page__header"
          style={{
            backgroundColor: colors.elementColor,
          }}
        >
          <h1>Where in the world?</h1>
          <button onClick={toggle} className="themeToggle">
            Switch theme
          </button>
        </header>
        <main className="page__content">
          <form action="#" className="controls">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for a country..."
              onChange={({ target }) => handleSearchChange(target.value)}
              className="controls__search"
              style={{
                color: colors.inputColor,
                backgroundColor: colors.elementColor,
              }}
            />
            <select
              id="region"
              name="region"
              className="controls__filter"
              style={{
                color: colors.textColor,
                backgroundColor: colors.elementColor,
              }}
            >
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </form>
          {service.status === "loading" && "Loading..."}
          {service.status === "loaded" && (
            <ul>
              {(service.payload && service.payload.length) ?
                service.payload.map((country: Country, i: number) => (
                  <li key={i}>
                    <CountryCard {...country} />
                  </li>
                )) : "Nothing found."}
            </ul>
          )}
          {service.status === "error" && service.error.toString()}
        </main>
      </div>
    </Theme.Provider>
  )
}

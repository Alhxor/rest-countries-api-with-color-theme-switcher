import React, { useState } from "react"

import "./App.css"

import theme from "assets/constants/themes"

import { Country } from "types/country"
import usePostCountryService from "hooks/usePostCountryService"

import CountryCard from "components/CountryCard/CountryCard"

const initialState = {
  darkMode: false,
  colors: theme.light,
  toggle: () => {},
}

export const Theme = React.createContext(initialState)

export default function App(): JSX.Element {
  // const service = usePostCountryService(
  //   `https://restcountries.eu/rest/v2/all?fields=name;flag;population;region;capital`
  // )

  const service = usePostCountryService(
    "http://localhost:3000/responseSample.json"
  )

  const [darkMode, setDarkMode] = useState(false)

  const toggle = () => {
    const isDark = !darkMode
    setDarkMode(isDark)
  }

  const colors = darkMode ? theme.dark : theme.light

  return (
    <Theme.Provider value={{ darkMode, colors, toggle }}>
      <div
        className="appContainer"
        style={{
          color: colors.textColor,
          backgroundColor: colors.backgroundColor,
        }}
      >
        <header className="page__header">
          <h1>Where in the world?</h1>
          <button onClick={toggle} className="themeToggle">
            Switch theme
          </button>
        </header>
        <main className="page__content">
          <form action="">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for a country..."
            />
            <select id="region" name="region">
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
              {service.payload.map((country: Country, i: number) => (
                <li key={i}>
                  <CountryCard {...country} />
                </li>
              ))}
            </ul>
          )}
          {service.status === "error" && "Error!"}
        </main>
      </div>
    </Theme.Provider>
  )
}

import React from "react"

import "./App.css"

import { usePostCountryService } from "hooks/usePostCountryService"
import { useLocation } from "hooks/useLocation"
import { useApiControls } from "hooks/useApiControls"
import { ThemeProvider } from "components/ThemeContext/ThemeContext"
import { PageLayout } from "components/PageLayout/PageLayout"
import { Home } from "components/Home/Home"
import { CountryDetails } from "components/CountryDetails/CountryDetails"

export const App: React.FC = () => {
  const { currentView, showDetails, goHome } = useLocation()
  const {
    apiQuery,
    searchByCountryName,
    searchByRegion,
    searchByCode,
  } = useApiControls()
  const service = usePostCountryService(apiQuery)

  return (
    <ThemeProvider>
      <PageLayout>
        {currentView.location === "home" && (
          <Home
            service={service}
            showDetails={(code: string) => {
              searchByCode(code)
              showDetails(code)
            }}
            searchByCountryName={searchByCountryName}
            searchByRegion={searchByRegion}
          />
        )}
        {currentView.location === "details" && service.status === "loaded" && (
          <CountryDetails {...service.payload} />
        )}
      </PageLayout>
    </ThemeProvider>
  )
}

export default App

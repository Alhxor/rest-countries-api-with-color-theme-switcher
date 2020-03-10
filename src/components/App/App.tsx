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
    apiQuery: apiQueryHome,
    searchByCountryName,
    searchByRegion,
  } = useApiControls()
  const homeService = usePostCountryService(apiQueryHome)

  const { apiQuery: apiQueryDetails, searchByCode } = useApiControls()
  const useDetailsService = () => usePostCountryService(apiQueryDetails)

  const { apiQuery: apiQueryBorders, searchByCodes } = useApiControls()
  const useBordersService = () => usePostCountryService(apiQueryBorders)

  return (
    <ThemeProvider>
      <PageLayout>
        {currentView.location === "home" && (
          <Home
            service={homeService}
            showDetails={(code: string) => {
              searchByCode(code)
              showDetails(code)
            }}
            searchByCountryName={searchByCountryName}
            searchByRegion={searchByRegion}
          />
        )}
        {currentView.location === "details" && (
          <CountryDetails
            goBack={goHome}
            goToCountry={searchByCode}
            useDetailsService={useDetailsService}
            useBordersService={useBordersService}
            queryForCountryNames={searchByCodes}
          />
        )}
      </PageLayout>
    </ThemeProvider>
  )
}

export default App

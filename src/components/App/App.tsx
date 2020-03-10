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

  return (
    <ThemeProvider>
      <PageLayout>
        {currentView.location === "home" && (
          <Home
            service={homeService}
            showDetails={showDetails}
            searchByCountryName={searchByCountryName}
            searchByRegion={searchByRegion}
          />
        )}
        {currentView.location === "details" && (
          <CountryDetails
            countryCode={currentView.code}
            goBack={goHome}
            goToCountry={showDetails}
          />
        )}
      </PageLayout>
    </ThemeProvider>
  )
}

export default App

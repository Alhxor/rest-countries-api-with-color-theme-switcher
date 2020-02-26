import { useState } from "react"
import { View } from "types/View"

export function useLocation() {
  const [currentView, setCurrentView] = useState<View>({
    location: "home",
  })

  const goHome = (): void => setCurrentView({ location: "home" })

  const showDetails = (countryCode: string): void => {
    setCurrentView({ location: "details", code: countryCode })
  }

  return { currentView, showDetails, goHome }
}

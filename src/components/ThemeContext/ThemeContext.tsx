import React, { useState } from "react"
import theme from "assets/constants/themes"

export const ThemeContext = React.createContext({
  darkMode: false,
  colors: theme.light,
  toggle: () => {},
})

export const ThemeProvider: React.FC<{}> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  const toggle = () => {
    const isDark = !darkMode
    setDarkMode(isDark)
  }

  const colors = darkMode ? theme.dark : theme.light

  return (
    <ThemeContext.Provider value={{ darkMode, colors, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

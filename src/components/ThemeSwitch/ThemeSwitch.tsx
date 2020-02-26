import React, { useContext } from "react"
import CrescentMoonIcon from "@material-ui/icons/Brightness3"
import SunIcon from "@material-ui/icons/WbSunny"

import { ThemeContext } from "components/ThemeContext/ThemeContext"
import "./ThemeSwitch.css"

export const ThemeSwitch: React.FC = () => {
  const { darkMode, toggle } = useContext(ThemeContext)
  return (
    <button onClick={toggle} className="theme-toggle">
      {darkMode ? (
        <>
          <SunIcon className="theme-toggle__icon" />
          &nbsp;Day Mode
        </>
      ) : (
        <>
          <CrescentMoonIcon className="theme-toggle__icon theme-toggle__icon--rotate" />
          &nbsp;Night Mode
        </>
      )}
    </button>
  )
}

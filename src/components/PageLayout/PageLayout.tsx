import React, { useContext } from "react"
import { ThemeContext } from "components/ThemeContext/ThemeContext"

export const PageLayout: React.FC<{}> = ({ children }) => {
  const { colors, toggle } = useContext(ThemeContext)
  return (
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
      <main className="page__content">{children}</main>
    </div>
  )
}

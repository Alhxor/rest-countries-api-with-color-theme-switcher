import React, { useContext } from "react"
import { ThemeContext } from "components/ThemeContext/ThemeContext"
import { ThemeSwitch } from 'components/ThemeSwitch/ThemeSwitch'

export const PageLayout: React.FC<{}> = ({ children }) => {
  const { colors } = useContext(ThemeContext)
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
        <h1 className="header__title">Where in the world?</h1>
        <ThemeSwitch />
      </header>
      <main className="page__content">{children}</main>
    </div>
  )
}

import React, { useContext } from "react"
import { ThemeContext } from "components/ThemeContext/ThemeContext"

export const Filter: React.FC = props => {
  const { colors } = useContext(ThemeContext)

  return (
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
  )
}

import React, { useContext } from "react"
import { ThemeContext } from "components/ThemeContext/ThemeContext"

interface Props {
  onChoice: Function
}

export const Filter: React.FC<Props> = ({ onChoice }) => {
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
      onChange={({ target }) => onChoice(target.value)}
    >
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}

import React, { useContext } from "react"
import { ThemeContext } from "components/ThemeContext/ThemeContext"

interface Props {
  onChange: Function
}

export const Search: React.FC<Props> = ({ onChange }) => {
  const { colors } = useContext(ThemeContext)

  return (
    <input
      type="text"
      name="search"
      id="search"
      placeholder="Search for a country..."
      onChange={({ target }) => onChange(target.value)}
      className="controls__search"
      style={{
        color: colors.inputColor,
        backgroundColor: colors.elementColor,
      }}
    />
  )
}

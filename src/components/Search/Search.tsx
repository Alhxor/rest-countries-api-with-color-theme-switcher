import React, { useContext } from "react"
import SearchIcon from "@material-ui/icons/Search"
import { ThemeContext } from "components/ThemeContext/ThemeContext"
import "./Search.css"

interface Props {
  onChange: Function
}

export const Search: React.FC<Props> = ({ onChange }) => {
  const { colors } = useContext(ThemeContext)

  return (
    <div
      className="controls__search"
      style={{
        color: colors.inputColor,
        backgroundColor: colors.elementColor,
      }}
    >
      <SearchIcon />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for a country..."
        onChange={({ target }) => onChange(target.value)}
        className="search__input"
      />
    </div>
  )
}

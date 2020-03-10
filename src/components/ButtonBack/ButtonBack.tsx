import React, { useContext } from "react"
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace"
import { ThemeContext } from "components/ThemeContext/ThemeContext"
import "./ButtonBack.css"

export const ButtonBack: React.FC<{ onClick: Function }> = ({ onClick }) => {
  const { colors } = useContext(ThemeContext)
  return (
    <button
      className="c-btn c-btn--control"
      onClick={e => onClick(e)}
      style={{
        color: colors.textColor,
        backgroundColor: colors.elementColor,
      }}
    >
      <KeyboardBackspaceIcon />
      Back
    </button>
  )
}

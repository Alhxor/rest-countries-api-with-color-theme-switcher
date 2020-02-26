import React, { useContext } from "react"
import { ThemeContext } from "components/ThemeContext/ThemeContext"
import { CountryInfo } from "types/CountryInfo"

import "./CountryDetails.css"

// interface Props extends Service<Country[]> {}
interface Props extends CountryInfo {}

export const CountryDetails: React.FC<Props> = (props) => {
  const { colors } = useContext(ThemeContext)
  return (
    <>
      <p>Native name: {props.nativeName}</p>
    </>
  )
}

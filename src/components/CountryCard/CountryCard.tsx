import React, { useContext } from "react"

import { ThemeContext } from "components/ThemeContext/ThemeContext"
import { Country } from "types/Country"

import "./CountryCard.css"

export const CountryCard: React.FC<Country> = props => {
  const { colors } = useContext(ThemeContext)

  return (
    <div
      className="card"
      style={{
        color: colors.textColor,
        backgroundColor: colors.elementColor,
      }}
    >
      <img
        src={props.flag}
        alt={`${props.name}'s flag`}
        className="card__img"
      />
      <div className="card__info">
        <p className="card__title">{props.name}</p>
        <span>Population: {props.population.toLocaleString()}</span>
        <br />
        <span>Region: {props.region}</span>
        <br />
        <span>Capital: {props.capital}</span>
        <br />
      </div>
    </div>
  )
}

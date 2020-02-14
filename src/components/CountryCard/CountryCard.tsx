import React, { useContext } from "react"
import { Theme } from "components/App/App"
import { Country } from "types/Country"

import "./CountryCard.css"

export default function CountryCard(props: Country): JSX.Element {
  const { colors } = useContext(Theme)

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
        <span>Population: {props.population}</span>
        <br />
        <span>Region: {props.region}</span>
        <br />
        <span>Capital: {props.capital}</span>
        <br />
      </div>
    </div>
  )
}

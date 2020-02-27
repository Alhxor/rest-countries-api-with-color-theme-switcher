import React, { useContext } from "react"
import { ThemeContext } from "components/ThemeContext/ThemeContext"
import { CountryInfo } from "types/CountryInfo"

import "./CountryDetails.css"

// interface Props extends Service<Country[]> {}
interface Props extends CountryInfo {
  goBack: Function
}

export const CountryDetails: React.FC<Props> = props => {
  const { colors } = useContext(ThemeContext)
  return (
    <>
      <div className="country-details">
        <div className="country-details__controls">
          <button className="controls__back" onClick={() => props.goBack()}>
            Back
          </button>
        </div>
        <div className="country-details__content">
          <figure className="content__flag">
            <img
              src={props.flag}
              alt={`${props.name}'s flag.`}
              className="flag__img"
            />
          </figure>
          <div className="content__text">
            <header className="text__header">{props.name}</header>
            <ul className="text__details-list">
              {/* Convert this list to map */}
              <li className="details-list__item">
                Native Name: {props.nativeName}
              </li>
              <li className="details-list__item">
                Population: {props.population}
              </li>
            </ul>
            <div className="text__country-borders">
              Border Countries:
              <ul className="country-borders__name-list">
                <li className="name-list__item">
                  {props.borders && props.borders[0]}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <p>Native name: {props.nativeName}</p> */}
    </>
  )
}

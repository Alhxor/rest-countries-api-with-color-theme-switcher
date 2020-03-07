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
      <div className="c-country-details">
        <div className="c-controls">
          <button className="c-controls__back" onClick={() => props.goBack()}>
            Back
          </button>
        </div>
        <div className="c-country-details__content">
          <figure className="c-country-details__flag">
            <img
              src={props.flag}
              alt={`${props.name}'s flag.`}
              className="c-country-details__flag-img"
            />
          </figure>
          <div className="c-country-details__text-info">
            <header className="c-country-details__header">{props.name}</header>
            <ul className="c-details-list">
              {/* TODO: convert this list to map */}
              <li className="c-details-list__item">
                Native Name: {props.nativeName}
              </li>
              <li className="c-details-list__item">
                Population: {props.population}
              </li>
            </ul>
            <div className="c-country-borders">
              <header className="c-country-borders__header">
                Border Countries:
              </header>
              <ul className="c-country-borders__list">
                <li className="c-country-borders__item">
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

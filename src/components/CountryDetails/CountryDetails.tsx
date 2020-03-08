import React, { useContext } from "react"
import { Country } from "types/Country"
import { Service } from "types/Service"
import { ThemeContext } from "components/ThemeContext/ThemeContext"
import { CountryInfo } from "types/CountryInfo"

import "./CountryDetails.css"

interface Props {
  goBack: Function
  service: Service<Country[]>
}

export const CountryDetails: React.FC<Props> = ({ service, goBack }) => {
  const { colors } = useContext(ThemeContext)

  let countryInfo: CountryInfo = { ...service.payload }
  let details: Array<{ title: string; value: string }> = []
  let languages = []
  let currencies = []
  const separator = ", "

  if (
    service.status === "loaded" &&
    service.payload &&
    service.payload.languages
  ) {
    languages = countryInfo.languages.map(({ name }) => name)
    currencies = countryInfo.currencies.map(({ name }) => name)
    details = [
      { title: "Native name", value: countryInfo.nativeName },
      { title: "Population", value: countryInfo.population },
      { title: "Region", value: countryInfo.region },
      { title: "Subregion", value: countryInfo.subregion },
      { title: "Capital", value: countryInfo.capital },
      {
        title: "Top level domain",
        value: countryInfo.topLevelDomain.join(separator),
      },
      { title: "Currencies", value: currencies.join(separator) },
      { title: "Languages", value: languages.join(separator) },
    ]
  }

  return (
    <>
      <div className="c-country-details">
        <div className="c-controls">
          <button className="c-controls__back" onClick={() => goBack()}>
            Back
          </button>
        </div>
        {service.status === "loading" && "Loading"}
        {service.status === "loaded" && (
          <div className="c-country-details__content">
            <figure className="c-country-details__flag">
              <img
                src={countryInfo.flag}
                alt={`${countryInfo.name}'s flag.`}
                className="c-country-details__flag-img"
              />
            </figure>
            <div className="c-country-details__text-info">
              <header className="c-country-details__header">
                {countryInfo.name}
              </header>
              <ul className="c-details-list">
                {details.map(({ title, value }) => (
                  <li className="c-details-list__item">{`${title}: ${value}`}</li>
                ))}
              </ul>
              <div className="c-country-borders">
                <header className="c-country-borders__header">
                  Border Countries:
                </header>
                <ul className="c-country-borders__list">
                  <li className="c-country-borders__item">
                    {countryInfo.borders && countryInfo.borders.join(separator)}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {service.status === "error" && service.error.toString()}
      </div>
    </>
  )
}

import React, { useContext } from "react"
import { Country } from "types/Country"
import { Service } from "types/Service"
import { ThemeContext } from "components/ThemeContext/ThemeContext"
import { CountryInfo } from "types/CountryInfo"
import { CountryBordersList } from "components/CountryBordersList/CountryBordersList"
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace"

import "./CountryDetails.css"

interface Props {
  goBack: () => void
  goToCountry: (countryCode: string) => void
  queryForCountryNames: (codes: Array<string>) => void
  useDetailsService: () => Service<Country[]>
  useBordersService: () => Service<Country[]>
}

interface Detail {
  title: string
  value: string | number
}

export const CountryDetails: React.FC<Props> = ({
  useDetailsService,
  useBordersService,
  queryForCountryNames,
  goBack,
  goToCountry,
}) => {
  const { colors } = useContext(ThemeContext)
  const service = useDetailsService()

  let countryInfo: CountryInfo = { ...service.payload }
  let details: Array<Detail> = []
  let detailsSide: Array<Detail> = []
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
      { title: "Population", value: countryInfo.population.toLocaleString() },
      { title: "Region", value: countryInfo.region },
      { title: "Subregion", value: countryInfo.subregion },
      { title: "Capital", value: countryInfo.capital },
    ]
    detailsSide = [
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
          <button
            className="c-btn c-btn--control"
            onClick={() => goBack()}
            style={{
              color: colors.textColor,
              backgroundColor: colors.elementColor,
            }}
          >
            <KeyboardBackspaceIcon />
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
              <div className="l-list-container">
                <ul className="c-details-list">
                  {details.map(({ title, value }, ind) => (
                    <li className="c-details-list__item" key={ind}>
                      <span className="h-bold">{title}:&nbsp;</span>
                      {value}
                    </li>
                  ))}
                </ul>
                <ul className="c-details-list">
                  {detailsSide.map(({ title, value }, ind) => (
                    <li className="c-details-list__item" key={ind}>
                      <span className="h-bold">{title}:&nbsp;</span>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="c-country-borders">
                <header className="c-country-borders__header">
                  Border Countries:&nbsp;
                </header>
                {countryInfo.borders === [] ? (
                  "None"
                ) : (
                  <CountryBordersList
                    borderCodes={countryInfo.borders}
                    goToCountry={goToCountry}
                    useBordersService={useBordersService}
                    queryForCountryNames={queryForCountryNames}
                  />
                )}
              </div>
            </div>
          </div>
        )}
        {service.status === "error" && service.error.toString()}
      </div>
    </>
  )
}

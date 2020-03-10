import React, { useContext } from "react"
import "./CountryDetails.css"
import { Country } from "types/Country"
import { Service } from "types/Service"
import { Detail } from "types/Detail"
import { CountryInfo } from "types/CountryInfo"
import { CountryBordersList } from "components/CountryBordersList/CountryBordersList"
import { CountryDetailsList } from "components/CountryDetailsList/CountryDetailsList"
import { CountryFlag } from "components/CountryFlag/CountryFlag"
import { ButtonBack } from "components/ButtonBack/ButtonBack"

interface Props {
  goBack: () => void
  goToCountry: (countryCode: string) => void
  queryForCountryNames: (codes: Array<string>) => void
  useDetailsService: () => Service<Country[]>
  useBordersService: () => Service<Country[]>
}

export const CountryDetails: React.FC<Props> = ({
  useDetailsService,
  useBordersService,
  queryForCountryNames,
  goBack,
  goToCountry,
}) => {
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
    <div className="c-country-details">
      <div className="c-controls">
        <ButtonBack onClick={() => goBack()} />
      </div>
      {service.status === "loading" && "Loading"}
      {service.status === "loaded" && (
        <div className="c-country-details__content">
          <div className="c-country-details__flag">
            <CountryFlag
              src={countryInfo.flag}
              alt={`${countryInfo.name}'s flag.`}
            />
          </div>
          <div className="c-country-details__text-info">
            <header className="c-country-details__header">
              {countryInfo.name}
            </header>
            <div className="l-list-container">
              <CountryDetailsList details={details} />
              <CountryDetailsList details={detailsSide} />
            </div>
            <div className="c-country-borders">
              <header className="c-country-borders__header">
                Border Countries:&nbsp;
              </header>
              {countryInfo.borders.length === 0 ? (
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
  )
}

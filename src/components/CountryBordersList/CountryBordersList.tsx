import React, { useContext, useState } from "react"
import { Country } from "types/Country"
import { ThemeContext } from "components/ThemeContext/ThemeContext"
import { constructApiQuery } from "utils/constructApiQuery"
import { usePostCountryService } from "hooks/usePostCountryService"
import { ApiSearch } from "types/ApiSearch"

interface Props {
  borderCodes: Array<string>
  goToCountry: (countryCode: string) => void
}

export const CountryBordersList: React.FC<Props> = ({
  borderCodes,
  goToCountry,
}) => {
  const { colors } = useContext(ThemeContext)

  const search: ApiSearch = { type: "codes", query: borderCodes.join(";") }
  const apiQuery = constructApiQuery(search)
  const service = usePostCountryService(apiQuery)

  return (
    <ul className="c-country-borders__list">
      {service.status === "loading" && "Loading..."}
      {service.status === "loaded" && (
        <>
          {service.payload.map(
            (country: Pick<Country, "name" | "alpha3Code">, ind: number) => (
              <li className="c-country-borders__item" key={ind}>
                <button
                  className="c-btn"
                  onClick={() => goToCountry(country.alpha3Code)}
                  style={{
                    color: colors.textColor,
                    backgroundColor: colors.elementColor,
                  }}
                >
                  {country.name}
                </button>
              </li>
            )
          )}
        </>
      )}
    </ul>
  )
}

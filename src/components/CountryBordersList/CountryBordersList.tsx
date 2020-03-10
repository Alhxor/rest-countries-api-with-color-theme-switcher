import React, { useContext } from "react"
import { Service } from "types/Service"
import { Country } from "types/Country"
import { ThemeContext } from "components/ThemeContext/ThemeContext"

interface Props {
  borderCodes: Array<string>
  goToCountry: (countryCode: string) => void
  useBordersService: () => Service<Country[]>
  queryForCountryNames: (codes: Array<string>) => void
}

export const CountryBordersList: React.FC<Props> = ({
  borderCodes,
  goToCountry,
  useBordersService,
  queryForCountryNames,
}) => {
  const { colors } = useContext(ThemeContext)

  queryForCountryNames(borderCodes)
  const service = useBordersService()

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

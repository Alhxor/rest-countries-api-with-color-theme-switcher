import React from "react"
import { Country } from "types/Country"
import { Service } from "types/Service"
import { CountryCard } from "components/CountryCard/CountryCard"
import "./CountryList.css"

interface Props {
  service: Service<Country[]>
  showDetails: Function
}

export const CountryList: React.FC<Props> = ({ service, showDetails }) => (
  <>
    {service.status === "loading" && "Loading..."}
    {service.status === "loaded" && (
      <ul className="country-list">
        {service.payload && service.payload.length
          ? service.payload.map((country: Country, i: number) => (
              <li
                key={i}
                className={
                  "country-list__item" + ((i === service.payload.length - 1)
                    ? " country-list__item--last"
                    : "")
                }
                onClick={() => showDetails(country.alpha3Code)}
              >
                <CountryCard {...country} />
              </li>
            ))
          : "Nothing found."}
      </ul>
    )}
    {service.status === "error" && service.error.toString()}
  </>
)

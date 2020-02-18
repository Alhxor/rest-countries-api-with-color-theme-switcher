import React from "react"
import { Country } from "types/Country"
import { Service } from "types/Service"
import { CountryCard } from "components/CountryCard/CountryCard"

interface Props {
  service: Service<Country[]>
}

export const CountryList: React.FC<Props> = ({ service }) => (
  <>
    {service.status === "loading" && "Loading..."}
    {service.status === "loaded" && (
      <ul>
        {service.payload && service.payload.length
          ? service.payload.map((country: Country, i: number) => (
              <li key={i}>
                <CountryCard {...country} />
              </li>
            ))
          : "Nothing found."}
      </ul>
    )}
    {service.status === "error" && service.error.toString()}
  </>
)

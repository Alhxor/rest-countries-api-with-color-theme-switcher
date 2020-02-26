import React from "react"
import { Search } from "components/Search/Search"
import { Filter } from "components/Filter/Filter"
import { CountryList } from "components/CountryList/CountryList"
import { Service } from "types/Service"
import { Country } from "types/Country"

interface Props {
  service: Service<Country[]>
  showDetails: Function
  searchByCountryName: Function
  searchByRegion: Function
}

export const Home: React.FC<Props> = ({
  service,
  showDetails,
  searchByCountryName,
  searchByRegion,
}) => {
  return (
    <>
      <form action="#" className="controls">
        <Search onChange={searchByCountryName} />
        <Filter onChoice={searchByRegion} />
      </form>
      <CountryList service={service} showDetails={showDetails} />
    </>
  )
}

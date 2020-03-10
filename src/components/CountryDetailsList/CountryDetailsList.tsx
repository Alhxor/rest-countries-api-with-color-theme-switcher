import React from "react"

interface Detail {
  title: string
  value: string | number
}

interface Props {
  details: Array<Detail>
}

export const CountryDetailsList: React.FC<Props> = ({ details }) => (
  <ul className="c-details-list">
    {details.map(({ title, value }, ind) => (
      <li className="c-details-list__item" key={ind}>
        <span className="h-bold">{title}:&nbsp;</span>
        {value}
      </li>
    ))}
  </ul>
)

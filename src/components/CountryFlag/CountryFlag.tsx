import React from "react"
import './CountryFlag.css'

interface Props {
  src: string
  alt: string
}

export const CountryFlag: React.FC<Props> = ({ src, alt }) => (
  <figure className="c-country-flag">
    <img src={src} alt={alt} className="c-country-flag__img" />
  </figure>
)

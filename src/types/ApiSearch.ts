interface ApiSearchAll {
  type: "all"
}

interface ApiSearchName {
  type: "name"
  query: string
}

interface ApiSearchRegion {
  type: "region"
  query: string
}

interface ApiSearchCode {
  type: "code"
  query: string
}

interface ApiSearchCodes {
  type: "codes"
  query: string
}

export type ApiSearch =
  | ApiSearchAll
  | ApiSearchName
  | ApiSearchRegion
  | ApiSearchCode
  | ApiSearchCodes

interface ViewHome {
  location: "home"
}

interface ViewDetails {
  location: "details"
  code: String
}

export type View = ViewHome | ViewDetails

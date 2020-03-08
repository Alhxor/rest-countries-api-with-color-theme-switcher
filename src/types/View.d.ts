interface ViewHome {
  location: "home"
}

interface ViewDetails {
  location: "details"
  code: string
}

export type View = ViewHome | ViewDetails

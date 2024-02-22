export type Flags = {
  png: string
  svg: string
  alt: string
}

export type Name = {
  common: string
  official: string
  nativeName: any
}

export type DataFlags = {
  flags: Flags
  name: Name
}

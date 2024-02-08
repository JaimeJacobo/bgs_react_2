export type Data = {
  results: User[]
  info: Info
}

export type User = {
  gender: string
  name: Name
  location: Location
  email: string
  login: Login
  dob: Dob
  registered: Registered
  phone: string
  cell: string
  id: Id
  picture: Picture
  nat: string
}

type Info = {
  seed: string
  results: number
  page: number
  version: string
}

type Name = {
  title: string
  first: string
  last: string
}

type Street = {
  number: number
  name: string
}

type Coordinates = {
  latitude: string
  longitude: string
}

type Timezone = {
  offset: string
  description: string
}

type Location = {
  street: Street
  city: string
  state: string
  country: string
  postcode: number
  coordinates: Coordinates
  timezone: Timezone
}

type Id = {
  name: string
  value: string
}

type Picture = {
  large: string
  medium: string
  thumbnail: string
}

type Login = {
  uuid: string
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}

type Dob = {
  date: string
  age: number
}

type Registered = {
  date: string
  age: number
}

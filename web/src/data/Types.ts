import { Paths } from './Enums'

export type ObjectType<T> = { [key: string]: T }

export type RouteType = {
  path: Paths
  element: () => JSX.Element
}

export type SuccessResponse = {
  success: boolean
  data: string
}

export type ErrorReponse = {
  success: boolean
  error: string
}

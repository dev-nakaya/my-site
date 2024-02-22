import type { Date, Id, List } from './common'

export type Categry = {
  name: string
} & Date & Id

export type Categories = {
  contents: Categry[]
} & List

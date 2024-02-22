import type { Categry } from './category'
import type { Date, Id, List } from './common'

export type Article = {
  title: string
  categories: Categry[]
  description?: string
  content: string
  relations?: Article[]
} & Date & Id

export type Articles = {
  contents: Article[]
} & List

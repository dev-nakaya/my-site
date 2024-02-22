export type Date = {
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

export type Id = {
  id: string
}

export type Img = {
  url: string
  width: number
  height: number
}

export type List = {
  totalCount: number
  offset: number
  limit: number
}

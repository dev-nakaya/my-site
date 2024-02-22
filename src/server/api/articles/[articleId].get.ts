import type { Article } from '~/types/article'

export default defineEventHandler(async (event) => {
  const id = event.context.params?.articleId
  const query = getQuery(event) || null
  const config = useRuntimeConfig()
  const article: Article = await $fetch(`/articles/${id}`, {
    baseURL: config.microcmsUrl,
    headers: { 'X-MICROCMS-API-KEY': config.microcmsKey },
    query: query
  })

  return article
})

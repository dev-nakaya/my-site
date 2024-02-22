import type { Articles } from '~/types/article'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event) || null
  const articles: Articles = await $fetch('/articles', {
    baseURL: config.microcmsUrl,
    headers: { 'X-MICROCMS-API-KEY': config.microcmsKey },
    params: query
  })

  return articles
})

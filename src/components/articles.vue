<script lang="ts" setup>
import type { Articles } from '~/types/article'

defineProps<{
  articles: Articles | null
}>()
</script>

<template>
  <section id="articles" class="flex w-fit flex-col gap-4">
    <h2 class="text-2xl font-bold">
      最新記事
    </h2>
    <ul>
      <li
        v-for="article in articles?.contents"
        :key="article.id"
        class="mx-4 my-8"
      >
        <h3 class="text-xl font-bold">
          <NuxtLink :to="`/articles/${article.id}`">
            {{ article.title }}
          </NuxtLink>
        </h3>
      </li>
    </ul>
    <button
      class="btn btn-primary mx-4"
      @click="navigateTo('/articles')"
    >
      もっと見る
    </button>
  </section>
</template>

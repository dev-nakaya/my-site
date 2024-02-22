<script lang="ts" setup>
const { data: articles } = await useFetch('/api/articles')
// const { data: article } = await useFetch('/api/articles/sample-article')
</script>

<template>
  <div>
    <pre>{{ articles?.contents[0].id }}</pre>
    <!-- <pre>{{ article }}</pre> -->
  </div>
</template>

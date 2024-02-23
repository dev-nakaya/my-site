<script lang="ts" setup>
const { data: articles } = await useFetch('/api/articles', {
  params: {
    limit: 3
  }
})
</script>

<template>
  <Articles :articles="articles" />
</template>

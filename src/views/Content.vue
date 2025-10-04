<template>
  <div class="content-wrapper">
    <p v-if="content">{{ content }}</p>
    <p v-else>Please select a file</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const router = useRoute()

// this is a mock, in real app you would
// route to the file path and fetch the content
const content = computed(() => {
  const file = router.query?.file
  if (typeof file === 'string') {
    return file.split('+')[1]
  }
  return null
})
</script>

<style scoped></style>

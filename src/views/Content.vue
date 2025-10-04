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
const content = computed(() => router.query.file)
</script>

<style scoped></style>

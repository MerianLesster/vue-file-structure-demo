<template>
  <div class="sidebar">
    <FileWrapper :files="files" />
  </div>
</template>

<script setup lang="ts">
import FileWrapper from '@/components/FileWrapper.vue'
import { onMounted, ref } from 'vue'

import { fileExplorerData } from '@/utils/data'
import type { IFile } from '@/types/file'

const files = ref<IFile>(fileExplorerData)

onMounted(() => {})
</script>

<style scoped></style>

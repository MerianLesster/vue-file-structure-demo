<template>
  <FileWrapper :files="files" v-model="toggleStore" />
</template>

<script setup lang="ts">
import FileWrapper from '@/components/FileWrapper.vue'
import { onMounted, ref } from 'vue'

import { fileExplorerData } from '@/utils/data'
import type { IFile } from './types/file'

const files = ref<IFile[]>([fileExplorerData])

const toggleStore = ref({} as Record<string, boolean>)

onMounted(() => {
  const iterate = (files: IFile[], obj: Record<string, boolean>) => {
    files.forEach((file) => {
      if (file.isFolder) {
        obj[file.id] = false
      }
      if (file.nodes && file.nodes.length > 0) {
        iterate(file.nodes, obj)
      }
    })
  }

  iterate(files.value, toggleStore.value)
})
</script>

<style scoped></style>

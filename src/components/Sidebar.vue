<template>
  <div class="sidebar">
    <FileWrapper :files="files" v-model="toggleStore" />
  </div>
</template>

<script setup lang="ts">
import FileWrapper from '@/components/FileWrapper.vue'
import { onMounted, ref } from 'vue'

import { fileExplorerData } from '@/utils/data'
import type { IFile, IContent } from '@/types/file'

const files = ref<IFile[]>([fileExplorerData])

const toggleStore = ref<IContent>({})

onMounted(() => {
  const iterate = (files: IFile[], obj: IContent) => {
    files.forEach((file) => {
      if (file.isFolder) {
        obj[file.id] = {
          name: file.name,
          isOpen: false,
        }
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

<template>
  <template v-for="file in files" :key="file.id">
    <File :file="file" v-model="toggleStore[file.id]">
      <FileWrapper
        v-if="file.nodes && file.nodes.length > 0"
        :files="file.nodes"
        v-model="toggleStore"
      />
    </File>
  </template>
</template>

<script setup lang="ts">
import File from '@/components/File.vue'
import type { IFile } from '@/types/file'

const { files } = defineProps<{ files: IFile[] }>()
const toggleStore = defineModel<Record<string, boolean>>({ required: true })
</script>

<style scoped></style>

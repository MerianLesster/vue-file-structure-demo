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
import type { IContent, IFile } from '@/types/file'

const { files } = defineProps<{ files: IFile[] }>()
const toggleStore = defineModel<IContent>({ required: true })
</script>

<style scoped></style>

<template>
  <div>
    <div class="file-wrapper" @click="isOpen = !isOpen">
      <p>{{ folderIcon }}</p>
      <p>{{ name }}</p>
    </div>
    <div :class="`nested-files ${!isOpen ? 'hide' : 'show'}`">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IFile } from '@/types/file'
import { computed } from 'vue'

const { file } = defineProps<{ file: IFile }>()
const { name } = file

const isOpen = defineModel<boolean>()

const folderIcon = computed(() => {
  if (!file?.isFolder) {
    return '📄'
  }

  return isOpen.value ? '📂' : '📁'
})
</script>

<style scoped>
p {
  margin: 0px;
}
.file-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 5px 10px;
  cursor: pointer;
}
.hide {
  display: none;
}
.show {
  display: block;
}
.nested-files {
  margin-left: 20px;
  border-left: 1px solid black;
}
</style>

<template>
  <div>
    <div
      :class="{
        'file-wrapper': true,
        selected: isItemSelected,
      }"
      @click="selectFile"
    >
      <i v-show="!isFile" :class="`pi ${isOpen ? 'pi-angle-down' : 'pi-angle-right'}`"></i>
      <p>{{ computedIcon }}</p>
      <p>{{ files.name }}</p>
    </div>
    <template v-if="isOpen">
      <div class="nested-files" v-for="file in files.nodes" :key="file.id">
        <FileWrapper :files="file" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { IFile } from '@/types/file'
import { computed, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const { files } = defineProps<{ files: IFile }>()
const isOpen = ref(false)
const isFile = computed(() => !files.nodes || files.nodes?.length === 0)
const computedIcon = computed(() => {
  if (isFile.value) {
    return '📄'
  } else {
    return isOpen.value ? '📂' : '📁'
  }
})
const isItemSelected = computed(() => route.query?.file === queryValue.value)
const queryValue = computed(() => `${files.id}+${files.name.replace(' ', '')}`)

const selectFile = () => {
  isOpen.value = !isOpen.value
  if (isFile.value) {
    router.push({
      query: {
        file: queryValue.value,
      },
    })
  }
}
</script>

<style scoped>
p {
  margin: 0px;
}
.file-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 3px 10px;
  border-radius: 5px;
  user-select: none;
}
.file-wrapper.selected {
  background-color: #7fcff4 !important;
}
.nested-files {
  padding-left: 5px;
  margin-left: 16px;
  border-left: 1px solid #7fcff4;
}
.file-wrapper:hover {
  background-color: #7fcff48a;
}
</style>

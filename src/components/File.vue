<template>
  <div>
    <div
      :class="{
        'file-wrapper': true,
        selected: isItemSelected,
      }"
      @click="selectFile"
    >
      <div style="width: 10px">
        <i
          v-show="file?.isFolder"
          :class="`pi ${content.isOpen ? 'pi-angle-down' : 'pi-angle-right'}`"
        ></i>
      </div>
      <p>{{ folderIcon }}</p>
      <p>{{ name }}</p>
    </div>
    <div :class="`nested-files ${!content.isOpen ? 'hide' : 'show'}`">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IContent, IFile } from '@/types/file'
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const { file } = defineProps<{ file: IFile }>()
const { name } = file

const content = defineModel<IContent[keyof IContent]>({ default: {} })

const folderIcon = computed(() => {
  if (!file?.isFolder) {
    return '📄'
  }
  return content.value.isOpen ? '📂' : '📁'
})

const queryValue = computed(() => `${file.id}+${file.name.replace(' ', '')}`)
const isItemSelected = computed(() => route.query?.file === queryValue.value)

const selectFile = () => {
  content.value.isOpen = !content.value.isOpen
  if (!file?.isFolder) {
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
.hide {
  display: none;
}
.show {
  display: block;
}
.nested-files {
  margin-left: 10px;
}
.file-wrapper:hover {
  background-color: #7fcff48a;
}
</style>

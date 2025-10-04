<template>
  <div>
    <div class="file-wrapper" @click="selectFile">
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
import { useRouter } from 'vue-router'

const router = useRouter()
const { file } = defineProps<{ file: IFile }>()
const { name } = file

const content = defineModel<IContent[keyof IContent]>({ default: {} })

const folderIcon = computed(() => {
  if (!file?.isFolder) {
    return '📄'
  }
  return content.value.isOpen ? '📂' : '📁'
})

const selectFile = () => {
  content.value.isOpen = !content.value.isOpen
  if (!file?.isFolder) {
    router.push({
      query: {
        file: file.name,
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
  background-color: #0000ff6b;
}
</style>

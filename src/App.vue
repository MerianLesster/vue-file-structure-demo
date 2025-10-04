<template>
  <div class="app-wrapper">
    <div class="sidebar-wrapper">
      <Sidebar />
    </div>
    <div class="router-view">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
</script>

<style scoped>
.app-wrapper {
  display: flex;
  height: 100vh;
}

.app-wrapper .sidebar-wrapper {
  width: 300px;
  border-right: 1px solid black;
  padding: 10px;
}

.app-wrapper .router-view {
  padding: 10px;
}
</style>

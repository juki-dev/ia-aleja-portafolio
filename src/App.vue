<template>
  <div class="page">
    <div class="shell">
      <Sidebar />
      <main class="contentCol">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

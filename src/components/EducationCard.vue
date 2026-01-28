<template>
  <article class="card pad edu">
    <div class="title">{{ title }}</div>
    <div class="sub">{{ subtitle }}</div>
    <div class="date">{{ date }}</div>
  </article>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  date: String
})
</script>

<style scoped>
.edu{ padding: 22px; }
.title{ font-weight: 800; font-size: 16px; margin-bottom: 6px; }
.sub{ font-weight: 600; color: rgba(17,24,39,0.65); font-size: 13px; margin-bottom: 8px; }
.date{ color: rgba(17,24,39,0.45); font-size: 12px; }
</style>

<template>
  <section class="card pad about">
    <h2 class="h1">{{ title }}</h2>
    <div class="sp"></div>
    <p class="p">{{ p1 }}</p>
    <div class="sp"></div>
    <p class="p">{{ p2 }}</p>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  p1: { type: String, required: true },
  p2: { type: String, required: true }
})
</script>

<style scoped>
.about{ padding: 26px; }
.sp{ height: 10px; }
</style>

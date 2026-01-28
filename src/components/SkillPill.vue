<template>
  <div class="pill">
    <Icon :name="icon" :bg="bg" />
    <div class="label">{{ label }}</div>
  </div>
</template>

<script setup>
import Icon from './Icon.vue'

defineProps({
  label: { type: String, required: true },
  icon: { type: String, default: 'pen' },
  bg: { type: String, default: 'rgba(59,130,246,0.16)' }
})
</script>

<style scoped>
.label{ font-weight: 600; font-size: 14px; }
</style>

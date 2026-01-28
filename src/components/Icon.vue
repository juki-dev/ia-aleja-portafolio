<template>
  <span class="i" :style="{ background: bg }" aria-hidden="true">
    <svg v-if="name === 'pen'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4 11.5-11.5z" />
    </svg>

    <svg v-else-if="name === 'cap'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 10 12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5" />
    </svg>

    <svg v-else-if="name === 'badge'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" />
    </svg>

    <svg v-else-if="name === 'robot'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 8V4" />
      <path d="M8 4h8" />
      <rect x="4" y="8" width="16" height="12" rx="4" />
      <path d="M9 14h.01M15 14h.01" />
      <path d="M8 18h8" />
    </svg>

    <svg v-else-if="name === 'briefcase'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M10 2h4a2 2 0 0 1 2 2v2H8V4a2 2 0 0 1 2-2z" />
      <rect x="2" y="6" width="20" height="16" rx="3" />
      <path d="M2 12h20" />
    </svg>

    <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="9" />
    </svg>
  </span>
</template>

<script setup>
defineProps({
  name: { type: String, default: 'dot' },
  bg: { type: String, default: 'rgba(59,130,246,0.18)' }
})
</script>

<style scoped>
.i{
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display:grid;
  place-items:center;
  color: rgba(17,24,39,0.86);
}
svg{ width: 16px; height: 16px; }
</style>

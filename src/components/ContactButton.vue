<template>
  <a class="btn" :href="href || emailHref" target="_blank" rel="noreferrer">
    <span class="spark">🤝</span>
    <span>Contáctame</span>
  </a>
</template>

<script setup>
import profileData from '../data/profile.json'

const profile = profileData
const emailHref = `mailto:${profile.email}`

const props = defineProps({
  href: { type: String, default: '' }
})
</script>

<style scoped>
.btn{
  display:inline-flex;
  align-items:center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 16px;
  border: 1px solid rgba(17,24,39,0.10);
  background: #fff;
  box-shadow: 0 10px 24px rgba(17,24,39,0.08);
  font-weight: 600;
  font-size: 14px;
  transition: transform .12s ease, box-shadow .12s ease;
}
.btn:hover{ transform: translateY(-1px); box-shadow: 0 14px 30px rgba(17,24,39,0.10); }
.spark{ filter: saturate(1.05); }
</style>

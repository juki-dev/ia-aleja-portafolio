<template>
  <article class="card pad job">
    <div class="head">
      <div class="logo" :style="{ background: logoBg }">
        <span v-if="logoText">{{ logoText }}</span>
        <span v-else>★</span>
      </div>
      <div class="meta">
        <div class="company">{{ company }}</div>
        <div class="role">{{ role }}</div>
        <div class="date">{{ date }}</div>
      </div>
    </div>

    <div class="sep"></div>

    <div class="label">Funciones</div>
    <ul class="bullets">
      <li v-for="(b, i) in bullets" :key="i">{{ b }}</li>
    </ul>

    <template v-if="extraTitle && extraBullets?.length">
      <div class="label" style="margin-top: 10px;">{{ extraTitle }}</div>
      <ul class="bullets">
        <li v-for="(b, i) in extraBullets" :key="'e'+i">{{ b }}</li>
      </ul>
    </template>
  </article>
</template>

<script setup>
defineProps({
  company: { type: String, required: true },
  role: { type: String, required: true },
  date: { type: String, required: true },
  bullets: { type: Array, default: () => [] },
  logoText: { type: String, default: '' },
  logoBg: { type: String, default: 'rgba(17,24,39,0.06)' },
  extraTitle: { type: String, default: '' },
  extraBullets: { type: Array, default: () => [] }
})
</script>

<style scoped>
.job{ padding: 22px; }
.head{ display:flex; gap: 12px; align-items:center; }
.logo{
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display:grid;
  place-items:center;
  font-weight: 900;
  box-shadow: 0 10px 22px rgba(17,24,39,0.08);
}
.company{ font-weight: 800; font-size: 15px; margin-bottom: 2px; }
.role{ font-weight: 600; font-size: 12.5px; color: rgba(17,24,39,0.62); }
.date{ font-size: 12px; color: rgba(17,24,39,0.45); margin-top: 2px; }

.sep{ height: 1px; background: rgba(17,24,39,0.06); margin: 14px 0; }
.label{ font-weight: 800; font-size: 13px; margin-bottom: 8px; }

.bullets{ margin:0; padding-left: 18px; color: rgba(17,24,39,0.62); font-size: 13px; line-height: 1.55; }
.bullets li{ margin: 6px 0; }
</style>

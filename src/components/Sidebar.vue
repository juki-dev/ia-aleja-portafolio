<template>
  <aside class="stack">
    <!-- Perfil -->
    <section class="card pad profile">
      <div class="avatar">
        <img v-if="profile.avatar.url" :src="profile.avatar.url" alt="Avatar" />
        <div v-else class="fallback">{{ profile.avatar.fallback }}</div>
      </div>

      <div class="who">
        <div class="name">{{ profile.name }}</div>
        <div class="role">{{ profile.role }}</div>
        <div class="meta">{{ profile.phone }}</div>
        <a class="link" :href="profile.linkedin.url" target="_blank" rel="noreferrer">
          {{ profile.linkedin.displayText }}
        </a>
      </div>
    </section>

    <!-- Navegación -->
    <section class="card pad nav">
      <RouterLink class="navItem" :class="isActive('/habilidades')" to="/habilidades">
        <Icon name="pen" :bg="'rgba(245,158,11,0.22)'" />
        <span>Habilidades</span>
      </RouterLink>
      <RouterLink class="navItem" :class="isActive('/educacion')" to="/educacion">
        <Icon name="cap" :bg="'rgba(34,197,94,0.22)'" />
        <span>Educación</span>
      </RouterLink>
      <RouterLink class="navItem" :class="isActive('/experiencia')" to="/experiencia">
        <Icon name="badge" :bg="'rgba(59,130,246,0.22)'" />
        <span>Experiencia laboral</span>
      </RouterLink>
    </section>

    <!-- Skills list -->
    <div class="skillsTitle">Skills</div>
    <section class="stack">
      <SkillPill 
        v-for="(skill, index) in skills.sidebarSkills" 
        :key="index"
        :label="skill.label" 
        :icon="skill.icon" 
        :bg="skill.bg" 
      />
    </section>
  </aside>
</template>

<script setup>
import { useRoute } from 'vue-router'
import Icon from './Icon.vue'
import SkillPill from './SkillPill.vue'
import profileData from '../data/profile.json'
import skillsData from '../data/skills.json'

const profile = profileData
const skills = skillsData

const route = useRoute()
const isActive = (path) => (route.path === path ? 'active' : '')
</script>

<style scoped>
.profile{
  display:flex;
  gap: 14px;
  align-items:center;
}
.avatar{
  width: 62px;
  height: 62px;
  border-radius: 18px;
  overflow:hidden;
  background: rgba(17,24,39,0.06);
  display:grid;
  place-items:center;
  box-shadow: 0 10px 22px rgba(17,24,39,0.08);
}
.avatar img{ width: 100%; height: 100%; object-fit: cover; }
.fallback{ font-size: 30px; }

.who{ display:flex; flex-direction:column; gap: 4px; }
.name{ font-weight: 800; font-size: 18px; letter-spacing: -0.01em; }
.role{ font-weight: 600; font-size: 13px; color: rgba(17,24,39,0.70); }
.meta{ font-size: 12px; color: rgba(17,24,39,0.55); }
.link{ font-size: 12px; color: #2563eb; font-weight: 600; }

.nav{ display:flex; flex-direction:column; gap: 8px; }
.navItem{
  display:flex;
  align-items:center;
  gap: 10px;
  padding: 10px 10px;
  border-radius: 16px;
  border: 1px solid transparent;
}
.navItem span{ font-weight: 600; font-size: 14px; color: rgba(17,24,39,0.80); }
.navItem.active{
  border-color: rgba(37,99,235,0.25);
  background: rgba(37,99,235,0.06);
}

.skillsTitle{
  margin-top: 2px;
  font-weight: 700;
  color: rgba(17,24,39,0.70);
  font-size: 13px;
  padding-left: 6px;
}
</style>

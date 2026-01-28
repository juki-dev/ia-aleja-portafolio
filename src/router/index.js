import { createRouter, createWebHistory } from 'vue-router'
import SkillsView from '../views/SkillsView.vue'
import EducationView from '../views/EducationView.vue'
import ExperienceView from '../views/ExperienceView.vue'

// Get base path from import.meta.env.BASE_URL (set by Vite)
const base = import.meta.env.BASE_URL

const routes = [
  { path: '/', redirect: '/habilidades' },
  { path: '/habilidades', name: 'skills', component: SkillsView },
  { path: '/educacion', name: 'education', component: EducationView },
  { path: '/experiencia', name: 'experience', component: ExperienceView }
]

export default createRouter({
  history: createWebHistory(base),
  routes
})

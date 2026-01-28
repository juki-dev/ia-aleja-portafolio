# Proyecto (Vue 3 + Vite) — CV web (Habilidades / Educación / Experiencia)

> Estructura con **páginas independientes** usando **Vue Router** y estética muy cercana a las imágenes.

---

## 1) Estructura de carpetas

```
cv-uxw/
  index.html
  package.json
  vite.config.js
  src/
    main.js
    App.vue
    router/index.js
    styles/base.css
    components/
      Sidebar.vue
      ContactButton.vue
      Icon.vue
      SkillPill.vue
      ExperienceCard.vue
      EducationCard.vue
      AboutCard.vue
    views/
      SkillsView.vue
      EducationView.vue
      ExperienceView.vue
    assets/
      avatar.png   (opcional)
```

---

## 2) package.json

```json
{
  "name": "cv-uxw",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.5.0",
    "vue-router": "^4.4.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.1.0",
    "vite": "^5.4.0"
  }
}
```

---

## 3) vite.config.js

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: { port: 5173 }
})
```

---

## 4) index.html

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CV — Alejandra Pantoja</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

---

## 5) src/main.js

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/base.css'

createApp(App).use(router).mount('#app')
```

---

## 6) src/router/index.js

```js
import { createRouter, createWebHistory } from 'vue-router'
import SkillsView from '../views/SkillsView.vue'
import EducationView from '../views/EducationView.vue'
import ExperienceView from '../views/ExperienceView.vue'

const routes = [
  { path: '/', redirect: '/habilidades' },
  { path: '/habilidades', name: 'skills', component: SkillsView },
  { path: '/educacion', name: 'education', component: EducationView },
  { path: '/experiencia', name: 'experience', component: ExperienceView }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
```

---

## 7) src/styles/base.css

```css
:root{
  --bg: #f4f5f7;
  --card: #ffffff;
  --text: #111827;
  --muted: #6b7280;
  --muted2:#9ca3af;
  --border: rgba(17,24,39,0.08);
  --shadow: 0 12px 28px rgba(17,24,39,0.10);
  --shadow-soft: 0 10px 24px rgba(17,24,39,0.08);

  --accent: #2563eb; /* azul del estado activo */
  --orange: #f59e0b;
  --green: #22c55e;
  --blue: #3b82f6;

  --radius-xl: 22px;
  --radius-lg: 18px;
  --radius-md: 14px;

  --container: 1120px;
}

*{ box-sizing:border-box; }
html, body{ height:100%; }
body{
  margin:0;
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
}

a{ color:inherit; text-decoration:none; }

.page{
  min-height: 100vh;
  display:flex;
  align-items:flex-start;
  justify-content:center;
  padding: 26px 22px;
}

.shell{
  width: 100%;
  max-width: var(--container);
  display:grid;
  grid-template-columns: 320px 1fr;
  gap: 26px;
}

@media (max-width: 980px){
  .shell{ grid-template-columns: 1fr; }
}

/* Cards */
.card{
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-soft);
}

.card.pad{ padding: 18px; }

.h1{
  font-size: 34px;
  line-height: 1.1;
  margin: 0;
  letter-spacing: -0.02em;
}

.sectionTitle{
  display:flex;
  align-items:center;
  gap: 10px;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
}

.subtle{ color: var(--muted); }
.small{ font-size: 12px; color: var(--muted2); }

/* Top area */
.topbar{
  display:flex;
  align-items:flex-start;
  justify-content: space-between;
  margin-bottom: 14px;
}

.contentCol{ padding-top: 6px; }

.stack{ display:flex; flex-direction:column; gap: 16px; }

.listStack{ display:flex; flex-direction:column; gap: 14px; }

/* Pills */
.pill{
  display:flex;
  align-items:center;
  gap: 10px;
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 14px 14px;
  box-shadow: 0 8px 18px rgba(17,24,39,0.06);
}

/* Fine text blocks */
.p{
  margin:0;
  color: var(--muted);
  font-size: 13.5px;
  line-height: 1.55;
}

.hr{
  height: 1px;
  background: rgba(17,24,39,0.06);
  margin: 10px 0;
  border: none;
}
```

---

## 8) src/App.vue

```vue
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
```

---

## 9) Componentes

### 9.1) src/components/Icon.vue

```vue
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
```

### 9.2) src/components/ContactButton.vue

```vue
<template>
  <a class="btn" :href="href" target="_blank" rel="noreferrer">
    <span class="spark">🤝</span>
    <span>Contáctame</span>
  </a>
</template>

<script setup>
defineProps({
  href: { type: String, default: 'mailto:alejandra@example.com' }
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
```

### 9.3) src/components/SkillPill.vue

```vue
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
```

### 9.4) src/components/Sidebar.vue

```vue
<template>
  <aside class="stack">
    <!-- Perfil -->
    <section class="card pad profile">
      <div class="avatar">
        <img v-if="avatarUrl" :src="avatarUrl" alt="Avatar" />
        <div v-else class="fallback">👩🏻‍💻</div>
      </div>

      <div class="who">
        <div class="name">Alejandra Pantoja</div>
        <div class="role">Ux Writer</div>
        <div class="meta">+57 3003679301</div>
        <a class="link" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          Linked in: Malejapg
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
      <SkillPill label="Escritura creativa" icon="pen" :bg="'rgba(59,130,246,0.16)'" />
      <SkillPill label="Figma" icon="badge" :bg="'rgba(59,130,246,0.12)'" />
      <SkillPill label="Trabajo en equipo" icon="dot" :bg="'rgba(59,130,246,0.10)'" />
      <SkillPill label="Customer journey" icon="dot" :bg="'rgba(59,130,246,0.10)'" />
    </section>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Icon from './Icon.vue'
import SkillPill from './SkillPill.vue'

const props = defineProps({
  avatarUrl: { type: String, default: '' }
})

const route = useRoute()
const isActive = (path) => (route.path === path ? 'active' : '')

const avatarUrl = computed(() => props.avatarUrl)
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
```

### 9.5) src/components/EducationCard.vue

```vue
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
```

### 9.6) src/components/ExperienceCard.vue

```vue
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
```

### 9.7) src/components/AboutCard.vue

```vue
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
```

---

## 10) Vistas (páginas independientes)

### 10.1) src/views/SkillsView.vue

```vue
<template>
  <div>
    <div class="topbar">
      <div class="sectionTitle">
        <Icon name="pen" :bg="'rgba(245,158,11,0.22)'" />
        <span>Habilidades</span>
      </div>
      <ContactButton />
    </div>

    <div class="stack">
      <AboutCard
        title="Acerca de mí"
        :p1="about1"
        :p2="about2"
      />

      <AboutCard
        title="A nivel personal"
        :p1="personal1"
        :p2="personal2"
      />
    </div>
  </div>
</template>

<script setup>
import Icon from '../components/Icon.vue'
import ContactButton from '../components/ContactButton.vue'
import AboutCard from '../components/AboutCard.vue'

const about1 = 'UX Writer con más de 5 años de experiencia en productos digitales, especializada en servicios financieros. Me enfoco en crear contenidos claros y confiables que simplifiquen la interacción con productos bancarios y fortalezcan la relación con los clientes.'
const about2 = 'Trabajo junto a equipos de diseño, producto y legal para asegurar que cada mensaje cumpla con la regulación, sin perder cercanía con el usuario. Desde la ideación hasta las pruebas, lidero la escritura para que las experiencias digitales sean intuitivas, seguras y significativas.'

const personal1 = 'Soy una persona creativa y curiosa, siempre en búsqueda de aprender y mejorar. Me mantengo al día en tendencias de diseño, escritura y tecnología para crear experiencias digitales confiables y cercanas.'
const personal2 = 'En mis tiempos libres canto como mezzosoprano en La Coral Brahms, disfruto del diseño de interiores y me encantan los juegos de mesa que me permitan sumergirme en historias. Doy asesoría a mujeres que quieren iniciar a trabajar en IT y también a personas que tengan bloqueos en su trabajo o busquen una opinión general sobre la redacción en sus sitios web.'
</script>
```

### 10.2) src/views/EducationView.vue

```vue
<template>
  <div>
    <div class="topbar">
      <div class="sectionTitle">
        <Icon name="cap" :bg="'rgba(34,197,94,0.22)'" />
        <span>Educación</span>
      </div>
      <ContactButton />
    </div>

    <div class="card pad" style="padding: 22px;">
      <div class="listStack">
        <EducationCard
          title="SENA | Servicio Nacional De Aprendizaje"
          subtitle="In progress | Desarrollo de sistemas de la información"
          date=""
        />
        <EducationCard
          title="Universidad de Bogotá Jorge Tadeo Lozano"
          subtitle="2011 - 2016 | Comunicación social-Periodismo"
          date=""
        />

        <div class="hr"></div>

        <div style="font-weight: 900; font-size: 18px; margin: 4px 2px 10px;">Entrenamiento adicional</div>

        <EducationCard
          title="UX en Español"
          subtitle="2021 | Masterclass UX Content Testing"
          date=""
        />
        <EducationCard
          title="Linked In"
          subtitle="2020 | Branding Fundamentals"
          date=""
        />
        <EducationCard
          title="Alcaldía Mayor de Bogotá"
          subtitle="2019 | Course in Artificial Intelligence (Básico)"
          date=""
        />
        <EducationCard
          title=""
          subtitle="2019 | Course in Big Data (Básico)"
          date=""
        />
        <EducationCard
          title="Partners Academy"
          subtitle="2019 | Digital Marketing & Digital Business Diplomat"
          date=""
        />
        <EducationCard
          title="SENA"
          subtitle="2016 | Course in Digital Imaging"
          date=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from '../components/Icon.vue'
import ContactButton from '../components/ContactButton.vue'
import EducationCard from '../components/EducationCard.vue'
</script>
```

### 10.3) src/views/ExperienceView.vue

```vue
<template>
  <div>
    <div class="topbar">
      <div class="sectionTitle">
        <Icon name="briefcase" :bg="'rgba(59,130,246,0.22)'" />
        <span>Experiencia laboral</span>
      </div>
      <ContactButton />
    </div>

    <div class="stack">
      <ExperienceCard
        company="inDriveMoney - App préstamos de inDrive"
        role="Ux writer"
        date="Febrero 2024 - Mayo 2026"
        :bullets="[
          'Escritura UX y redacción para productos de Créditos y Tarjetas en app.',
          'Optimización de flujos, reducción de fricción y mejora en tasas de conversión.',
          'Creación de guías de localización, onboarding, emails y push.',
          'Alineación con normas, tono y voice, y coordinación con equipos legales.',
          'Investigación de usuario, análisis de insights y validación de mensajes.'
        ]"
        logoText="iD"
        logoBg="rgba(34,197,94,0.25)"
      />

      <ExperienceCard
        company="Bancolombia - Multiplica"
        role="Chatbot designer / Senior UX writer"
        date="Nov 2023 (pausa) y retomé en Mayo de 2026"
        :bullets="[
          'Liderar la escritura UX y el diseño conversacional para productos clave.',
          'Creación de guías y lineamientos de voz y tono para Tabot en WhatsApp.',
          'Definir mensajes, botones y jerarquía para mejorar comprensión y acción.',
          'Coordinar con legal, fraude y producto para asegurar cumplimiento.',
          'Ajustar contenidos con base en hallazgos, métricas y pruebas.'
        ]"
        logoText="B"
        logoBg="rgba(59,130,246,0.18)"
      />

      <ExperienceCard
        company="Unites"
        role="Ux writer expert"
        date="Mayo 2022 - Noviembre 2023"
        :bullets="[
          'Escritura UX para el crecimiento de la app.',
          'Creación de tablas de NPS para mejorar la experiencia de usuarios.',
          'Investigación y análisis de intención para mejorar la localización.',
          'Participación en iniciativas de revenue y growth.',
          'Organización de catálogos/landings y redacción orientada a conversión.'
        ]"
        logoText="U"
        logoBg="rgba(59,130,246,0.16)"
      />

      <ExperienceCard
        company="BBVA - The Bridge"
        role="Ux writer / CTO Dynamics QA"
        date="Freelance ocasional por proyectos durante todo 2022"
        :bullets="[
          'Escritura UX para productos bancarios de BBVA.',
          'Construcción y alistamiento de flujos UI/UX.',
          'Microcopy para registro, pagos, transferencias y notificaciones.',
          'Apoyo en documentación y estandarización de contenido financiero.',
          'Trabajo con metodologías ágiles y equipos multidisciplinarios.'
        ]"
        logoText="BB"
        logoBg="rgba(17,24,39,0.06)"
      />

      <ExperienceCard
        company="Discovery Kids - Tecnomakers SAS"
        role="Ux writer"
        date="Enero 2021 - Febrero 2022"
        :bullets="[
          'Escritura UX para plataformas de streaming (Discovery+ y Discovery Kids).',
          'Iteración de copy para flujos de suscripción y acceso al contenido.',
          'Microcopy para navegación, reproducción y control parental.',
          'Acompañamiento a insights para mejorar usabilidad y claridad.',
          'Coordinación con equipos de producto y diseño.'
        ]"
        logoText="DK"
        logoBg="rgba(34,197,94,0.14)"
      />

      <ExperienceCard
        company="Start Up La Haus"
        role="Content writer"
        date="Febrero 2020 - Febrero 2021"
        :bullets="[
          'Escritura y copy para soluciones de bienes raíces.',
          'Redacción de emails, SMS y publicidad online.',
          'Creación de contenido en SEO.',
          'Comunicación y coordinación con equipos comerciales.'
        ]"
        extraTitle="Productos digitales trabajados"
        :extraBullets="[
          'Escritura UX para historias/landings de proyectos inmobiliarios.',
          'Redacción y estructuración de la nueva página de inicio.'
        ]"
        logoText="LH"
        logoBg="rgba(245,158,11,0.16)"
      />

      <ExperienceCard
        company="Picap - Cap Technologies S.A.S"
        role="Copywriter"
        date="Octubre 2019 - Abril 2020"
        :bullets="[
          'Creación y mantenimiento de estrategias de marketing 360.',
          'Redacción y publicación de contenidos en app (UX writing).',
          'Ideación de emails, SMS y push para conversión.',
          'Gestión de campañas y comunicación con RRPP.'
        ]"
        extraTitle="Community Manager (Ascenso a copywriter)"
        :extraBullets="[
          'Julio 2019 - Diciembre 2019',
          'Creación de campañas de contenido.',
          'Gestión y redacción de redes sociales.'
        ]"
        logoText="P"
        logoBg="rgba(59,130,246,0.14)"
      />

      <ExperienceCard
        company="LSO Agency"
        role="Community manager"
        date="Marzo 2017 - Octubre 2019"
        :bullets="[
          'Diseño y creación de contenido para redes sociales y sitio web.',
          'Conceptualización y gestión de redes sociales.',
          'Planificación de campañas.',
          'Gestión de comunidad online.'
        ]"
        logoText="LS"
        logoBg="rgba(17,24,39,0.06)"
      />
    </div>
  </div>
</template>

<script setup>
import Icon from '../components/Icon.vue'
import ContactButton from '../components/ContactButton.vue'
import ExperienceCard from '../components/ExperienceCard.vue'
</script>
```

---

## 11) Notas para que se vea idéntico a tus mockups

- **Tipografías:** ya está Inter (muy parecida al look del mockup).
- **Sombras y radios:** están calibrados a un look “soft” + tarjetas redondeadas.
- **Espaciado:** usa `--container` y el grid 320px + contenido.
- **Iconos:** están hechos en SVG simple para no depender de librerías.

---

## 12) Cómo correr

```bash
npm i
npm run dev
```

Rutas:
- `/habilidades`
- `/educacion`
- `/experiencia`

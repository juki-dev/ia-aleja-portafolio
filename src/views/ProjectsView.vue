<template>
  <div>
    <div class="topbar">
      <div class="sectionTitle">
        <Icon name="star" :bg="'rgba(168,85,247,0.22)'" />
        <span>Proyectos</span>
      </div>
      <ContactButton />
    </div>

    <div class="stack">
      <AboutCard
        :title="projects.about.title"
        :p1="projects.about.p1"
        :p2="projects.about.p2"
      />
    </div>
  </div>
</template>

<script setup>
import Icon from '../components/Icon.vue'
import ContactButton from '../components/ContactButton.vue'
import AboutCard from '../components/AboutCard.vue'
import projectsData from '../data/projects.json'

const projects = projectsData
</script>

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
        :title="skills.about.title"
        :p1="skills.about.p1"
        :p2="skills.about.p2"
      />

      <AboutCard
        :title="skills.personal.title"
        :p1="skills.personal.p1"
        :p2="skills.personal.p2"
      />
    </div>
  </div>
</template>

<script setup>
import Icon from '../components/Icon.vue'
import ContactButton from '../components/ContactButton.vue'
import AboutCard from '../components/AboutCard.vue'
import skillsData from '../data/skills.json'

const skills = skillsData
</script>

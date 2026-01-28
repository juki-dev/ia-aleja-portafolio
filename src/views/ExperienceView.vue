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
        v-for="(exp, index) in experience.experiences"
        :key="index"
        :company="exp.company"
        :role="exp.role"
        :date="exp.date"
        :bullets="exp.bullets"
        :logoText="exp.logoText"
        :logoBg="exp.logoBg"
        :extraTitle="exp.extraTitle"
        :extraBullets="exp.extraBullets"
      />
    </div>
  </div>
</template>

<script setup>
import Icon from '../components/Icon.vue'
import ContactButton from '../components/ContactButton.vue'
import ExperienceCard from '../components/ExperienceCard.vue'
import experienceData from '../data/experience.json'

const experience = experienceData
</script>

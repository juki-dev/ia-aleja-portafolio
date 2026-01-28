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
          v-for="(edu, index) in education.formal"
          :key="'formal-' + index"
          :title="edu.title"
          :subtitle="edu.subtitle"
          :date="edu.date"
        />

        <div class="hr"></div>

        <div style="font-weight: 900; font-size: 18px; margin: 4px 2px 10px;">{{ education.additionalTraining.title }}</div>

        <EducationCard
          v-for="(training, index) in education.additionalTraining.items"
          :key="'training-' + index"
          :title="training.title"
          :subtitle="training.subtitle"
          :date="training.date"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from '../components/Icon.vue'
import ContactButton from '../components/ContactButton.vue'
import EducationCard from '../components/EducationCard.vue'
import educationData from '../data/education.json'

const education = educationData
</script>

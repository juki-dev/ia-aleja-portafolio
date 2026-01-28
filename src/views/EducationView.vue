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

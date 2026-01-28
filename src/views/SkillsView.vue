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

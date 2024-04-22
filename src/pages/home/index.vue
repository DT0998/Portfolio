<script setup lang="ts">
import IntroduceComponent from '@/components/Introduce/index.vue';
import ProjectsComponent from '@/components/Projects/index.vue';
import DetailsComponent from '@/components/Details/index.vue';
</script>

<template>
  <IntroduceComponent />
  <ProjectsComponent id="01" title="Designing the future of education" desc="Designing a platform to help educators build better
                      online courseware" extraClass="xl:flex-row" />
  <ProjectsComponent id="02" title="Designing the future of education" desc="Designing a platform to help educators build better
                      online courseware" extraClass="xl:flex-row-reverse" />
  <ProjectsComponent id="03" title="Designing the future of education" desc="Designing a platform to help educators build better
                      online courseware" extraClass="xl:flex-row" />
  <DetailsComponent />
</template>

<script setup lang="ts">
import Introduce from '@/components/Introduce/index.vue';
import Projects from '@/components/Projects/index.vue';
import Details from '@/components/Details/index.vue';
</script>

<template>
  <Introduce />
  <Projects id="01" title="Designing the future of education" desc="Designing a platform to help educators build better
                      online courseware" extraClass="xl:flex-row" typeModel="laptop" />
  <Projects id="02" title="Designing the future of education" desc="Designing a platform to help educators build better
                      online courseware" extraClass="xl:flex-row-reverse" typeModel="mobile" />
  <Projects id="03" title="Designing the future of education" desc="Designing a platform to help educators build better
                      online courseware" extraClass="xl:flex-row" typeModel="laptop" />
  <Details />
</template>

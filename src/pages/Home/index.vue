<script setup lang="ts">
import Introduce from '@/components/Introduce/index.vue';
import Projects from '@/components/Projects/index.vue';
import Details from '@/components/Details/index.vue';
import { deviceModels } from '@/utils/data/device';
const project01 = [
  {
    ...deviceModels.laptop,
  }
]
const project02 =
  [{
    ...deviceModels.phone,
  },
  {
    ...deviceModels.phone,
  }]
const project03 = [
  {
    ...deviceModels.laptop,
  }
]
</script>

<template>
  <Introduce />
  <Projects id="01" title="Designing the future of education" desc="Designing a platform to help educators build better
                      online courseware" extraClass="xl:flex-row" typeModel="laptop" :models="project01"/>
  <Projects id="02" title="Designing the future of education" desc="Designing a platform to help educators build better
                      online courseware" extraClass="xl:flex-row-reverse" typeModel="phone" :models="project02" />
  <Projects id="03" title="Designing the future of education" desc="Designing a platform to help educators build better
                        online courseware" extraClass="xl:flex-row" typeModel="laptop" :models="project03" />
  <Details />
</template>

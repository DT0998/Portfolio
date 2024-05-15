<script setup lang="ts">
import Introduce from '@/components/Introduce/index.vue';
import Projects from '@/components/Projects/index.vue';
import Details from '@/components/Details/index.vue';
import { deviceModels } from '@/utils/data/device';
import sprTexture from '@/assets/images/Device/spr-lesson-builder-dark.jpg';
import sprTextureLarge from '@/assets/images/Device/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '@/assets/images/Device/spr-lesson-builder-dark-placeholder.jpg';
import gamestackTextureLarge from '@/assets/images/Device/gamestack-list-large.jpg';
import gamestackTexture from '@/assets/images/Device/gamestack-list.jpg';
import gamestackTexturePlaceholder from '@/assets/images/Device/gamestack-list-placeholder.jpg';
import gamestackTexture2Large from '@/assets/images/Device/gamestack-login-large.jpg';
import gamestackTexture2 from '@/assets/images/Device/gamestack-login.jpg';
import gamestackTexture2Placeholder from '@/assets/images/Device/gamestack-login-placeholder.jpg';
const project01 = [
  {
    ...deviceModels.laptop,
    texture:
    {
      srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
      placeholder: sprTexturePlaceholder,
    },

  }
]
const project02 =
  [{
    ...deviceModels.phone,
    texture:
    {
      srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
      placeholder: gamestackTexturePlaceholder,
    },
  },
  {
    ...deviceModels.phone,
    texture:
    {
      srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
      placeholder: gamestackTexture2Placeholder,
    },

  }]
const project03 = [
  {
    ...deviceModels.laptop,
    texture:
    {
      srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
      placeholder: sprTexturePlaceholder,
    },

  }
]
</script>

<template>
  <Introduce />
  <Projects id="01" title="Designing the future of education" desc="Designing a platform to help educators build better
                      online courseware" extraClass="xl:flex-row" typeModel="laptop" :models="project01" />
  <Projects id="02" title="Designing the future of education" desc="Designing a platform to help educators build better
                      online courseware" extraClass="xl:flex-row-reverse" typeModel="phone" :models="project02" />
  <Projects id="03" title="Designing the future of education" desc="Designing a platform to help educators build better
                        online courseware" extraClass="xl:flex-row" typeModel="laptop" :models="project03" />
  <Details />
</template>

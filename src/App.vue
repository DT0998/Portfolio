<script setup lang="ts">
import { RouterView } from 'vue-router';
import Layout from './layouts/index.vue';
import { useDark } from '@vueuse/core/index.cjs';
useDark({
  selector: 'body',
  valueDark: 'dark',
  valueLight: 'light'
})
</script>

<template>
  <div class="app">
    <Layout>
      <RouterView />
    </Layout>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/variables.scss';

.dark {
  /* dark mode */
  background: $bgDark;
  color: $textDark;
}

.light {
  /* light mode */
  background: $bgLight;
  color: $textLight;
}
</style>

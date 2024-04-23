<script setup lang="ts">
import { RouterView } from 'vue-router';
import Layout from './layouts/index.vue';
import { useDark } from '@vueuse/core/index.cjs';
import AOS from "aos";
import { onMounted } from "vue";

useDark({
  selector: 'body',
  valueDark: 'dark',
  valueLight: 'light'
})
onMounted(() => {
  AOS.init();
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

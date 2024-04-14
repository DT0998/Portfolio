<script setup lang="ts">
import { RouterView } from 'vue-router';
import Layout from './layouts/index.vue'
</script>

<template>
  <div class="app">
    <Layout>
      <RouterView />
    </Layout>
  </div>
</template>

<style lang="scss">
.dark {
  /* dark mode */
  background: oklch(17.76% 0 0);
  color: #fff;
}
.light {
  /* light mode */
  background: oklch(96.12% 0 0);
  color: #000;
}
</style>

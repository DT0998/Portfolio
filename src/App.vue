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
  background: hsl(240, 100%, 10%);
  color: #fff;
}
</style>

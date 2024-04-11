<script setup lang="ts">
import Header from './header/index.vue';
import Footer from './footer/index.vue';
</script>

<template>
    <Header />
    <main class="px-[15px] md:px-[48px] lg:px-[160px] xl:px-[192px]">
        <slot />
        <Footer />
    </main>
</template>

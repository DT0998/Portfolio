<script setup lang="ts">
import Header from './Header/index.vue';
import Footer from './Footer/index.vue';
</script>

<template>
    <Header />
    <main class="px-[15px] md:px-[48px] lg:px-[160px] xl:px-[192px]">
        <slot />
        <Footer />
    </main>
</template>

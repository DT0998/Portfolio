<script setup lang="ts">
import NavMobile from "@/layouts/nav-mobile/index.vue";
import NavDesktop from "@/layouts/nav-desktop/index.vue";
import { useDark } from '@vueuse/core';
const isDark = useDark();
</script>

<template>
    <header class="flex flex-col">
        <div
            class="fixed w-[48px] left-[24px] md:left-[48px] lg:left-[58px] top-[24px] md:top-[48px] lg:top-[58px] bottom-[24px] md:bottom-[48px] lg:bottom-[58px] flex flex-col z-[5] mt-[8px]">
            <v-icon name="fa-tumblr" width="48" height="29" :class="{ 'text-white': isDark, 'text-black': !isDark }"
                class="cursor-pointer" />
            <!-- nav desktop -->
            <NavDesktop />
        </div>
        <!-- nav mobile -->
        <NavMobile />
    </header>
</template>


<style lang="scss"></style>

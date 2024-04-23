<script setup lang="ts">
import ButtonDarkmode from "@/components/ButtonDarkmode/index.vue";
import { useMediaQuery, useDark } from '@vueuse/core';
const isTablet = useMediaQuery('(max-width: 768px)')
const isDark = useDark();
</script>

<template>
    <div v-if="!isTablet" class="flex flex-auto justify-center">
        <nav class="flex flex-col justify-between items-center">
            <ul class="flex flex-col font-medium">
                <router-link to="/">
                    <li
                        class="[writing-mode:vertical-lr] p-[16px] rotate-180 cursor-pointer menu-title my-[10px] relative flex justify-center">
                        Projects
                        <div class="menu-line absolute max-w-[192px] h-full">
                        </div>
                    </li>
                </router-link>
                <router-link to="/">
                    <li
                        class="[writing-mode:vertical-lr] p-[16px] rotate-180 cursor-pointer menu-title my-[10px] relative flex justify-center">
                        Details
                        <div class="menu-line absolute max-w-[192px] h-full">
                        </div>
                    </li>
                </router-link>
                <router-link to="/contact">
                    <li
                        class="[writing-mode:vertical-lr] p-[16px] rotate-180 cursor-pointer menu-title my-[10px] relative flex justify-center">
                        Contact
                        <div class="menu-line absolute max-w-[192px] h-full">
                        </div>
                    </li>
                </router-link>
            </ul>
            <ul>
                <a href="https://github.com/DT0998" target="_blank">
                    <v-icon name="bi-github" width="24" height="24"
                        :class="{ 'text-white': isDark, 'text-black': !isDark }" class="logo-github" />
                </a>
            </ul>
        </nav>
        <ButtonDarkmode
            extraClass="fixed right-[24px] md:right-[48px] lg:right-[58px] top-[24px] md:top-[48px] lg:top-[58px] bottom-[24px] md:bottom-[48px] lg:bottom-[58px]" />
    </div>
</template>


<style lang="scss">
@import '@/assets/style/variables.scss';
@import '@/layouts/style.scss';

.logo-github {
    transition: color 0.6s;
}

.logo-github:hover {
    color: $mainColor;
}
</style>
<script setup lang="ts">
import ButtonDarkmode from "@/components/ButtonDarkmode/index.vue";
import { ref } from 'vue';
import { useMediaQuery, useDark } from '@vueuse/core';
import { dataMenuList } from '@/utils/data/menu';
const isTablet = useMediaQuery('(max-width: 768px)')
const isDark = useDark();
const isHoverMenu = ref(0);
</script>

<template>
    <div v-if="!isTablet" class="flex flex-auto justify-center">
        <nav class="flex flex-col justify-between items-center">
            <ul class="flex flex-col font-medium">
                <li :key="menu.id"
                    class="[writing-mode:vertical-lr] p-[16px] rotate-180 cursor-pointer menu-title my-[10px] relative flex justify-center overflow-hidden"
                    @mouseleave="isHoverMenu = 0" @mouseover="isHoverMenu = menu.id" v-for="menu of dataMenuList">
                    <router-link :to="menu.path">
                        {{ menu.name }}
                        <div class="menu-line absolute max-w-[192px] h-full"
                            :class="{ 'menu-active-desktop': isHoverMenu === menu.id, 'menu-deactive-desktop': isHoverMenu !== menu.id }">
                        </div>
                    </router-link>
                </li>
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
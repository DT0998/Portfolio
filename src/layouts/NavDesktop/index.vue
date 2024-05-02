<script setup lang="ts">
import ButtonDarkmode from "@/components/ButtonDarkmode/index.vue";
import { computed } from 'vue';
import { useMediaQuery, useDark } from '@vueuse/core';
import { dataMenuList } from '@/utils/data/menu';
import { useStore } from 'vuex'
import { onHoverMenu, onActiveLinkMenu } from '@/store/layouts/Nav/store';
const isTablet = useMediaQuery('(max-width: 768px)')
const isDark = useDark();
const store = useStore();
const isHoverMenu = computed(() => store.state.nav.isHoverMenu);
const isActiveLinkMenu = computed(() => store.state.nav.isActiveLinkMenu);
const menuActiveClass = (menuId: number) => {
    if (isHoverMenu.value === menuId || isActiveLinkMenu.value === menuId) {
        return 'menu-active-desktop';
    }
    if (isHoverMenu.value !== menuId || isActiveLinkMenu.value !== menuId) {
        return 'menu-deactive-desktop';
    }
}
</script>

<template>
    <div v-if="!isTablet" class="flex flex-auto justify-center">
        <nav class="flex flex-col justify-between items-center">
            <ul class="flex flex-col font-medium">
                <router-link :key="menu.id" :to="menu.path" v-for="menu of dataMenuList">
                    <li class="[writing-mode:vertical-lr] p-[16px] rotate-180 cursor-pointer menu-title my-[10px] relative flex justify-center overflow-hidden"
                        @mouseleave="store.commit(onHoverMenu, 0)" @mouseover="store.commit(onHoverMenu, menu.id)"
                        @click="store.commit(onActiveLinkMenu, menu.id)">
                        {{ menu.name }}
                        <div class="menu-line absolute max-w-[192px] h-full" :class="menuActiveClass(menu.id)">
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
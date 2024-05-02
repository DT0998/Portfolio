<script setup lang="ts">
import ButtonDarkmode from "@/components/ButtonDarkmode/index.vue";
import { useMediaQuery, useDark } from '@vueuse/core';
import { computed, reactive, ref } from "vue";
import { variables } from '@/assets/style/variables';
import { dataMenuList } from '@/utils/data/menu';
import { useStore } from 'vuex';
import { onHoverMenu, onActiveLinkMenu } from '@/store/layouts/Nav/store';
const store = useStore();
const isHoverMenu = computed(() => store.state.nav.isHoverMenu);
const isActiveLinkMenu = computed(() => store.state.nav.isActiveLinkMenu);
const isDark = useDark();
const isTablet = useMediaQuery('(max-width: 768px)')
const openMenu = ref(false)
const isHoverMenuBar = ref(false);

const NavigateActiveMenuMobile = (menuId: number) => {
    store.commit(onActiveLinkMenu, menuId);
    // delay close menu
    setTimeout(() => {
        toggleMenu();
    }, 500);
}

const menuActiveClass = (menuId: number) => {
    if (isHoverMenu.value === menuId || isActiveLinkMenu.value === menuId) {
        return 'menu-active-mobile';
    }
    if (isHoverMenu.value !== menuId || isActiveLinkMenu.value !== menuId) {
        return 'menu-deactive-mobile';
    }
}

const toggleMenu = () => {
    openMenu.value = !openMenu.value
}

// dark theme style nav
const darkThemeStyleNav = reactive({
    background: `color-mix(in lab, ${variables.$bgDark} 70%, transparent)`,
})

// white theme style nav
const lightThemeStyleNav = reactive({
    background: `color-mix(in lab, ${variables.$bgLight} 70%, transparent)`,
})

// dark theme style menu bar
const darkThemeStyleMenuBar = reactive({
    background: `color-mix(in lab, ${variables.$colorMixDark} 10%, transparent)`,
    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)',
})

// white theme style menu bar
const lightThemeStyleMenuBar = reactive({
    background: `color-mix(in lab, ${variables.$colorMixLight} 10%, transparent)`,
    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)',
})

</script>

<template>
    <div v-if="isTablet">
        <nav class="flex flex-col justify-between items-center flex-auto fixed z-[11] w-full h-full overlay"
            :class="{ 'transform-none': openMenu, 'close-menu': !openMenu }"
            :style="[isDark ? darkThemeStyleNav : lightThemeStyleNav]">
            <ul class="w-full h-full flex items-center justify-center flex-col" data-aos="fade-up">
                <router-link :key="menu.id" :to="menu.path" v-for="menu of dataMenuList">
                    <li class="p-[24px] text-center flex justify-center relative overflow-hidden w-[192px] "
                        @mouseleave="store.commit(onHoverMenu, 0)" @mouseover="store.commit(onHoverMenu, menu.id)"
                        @click="NavigateActiveMenuMobile(menu.id)">
                        {{ menu.name }}
                        <div class="menu-line absolute w-full" :class="menuActiveClass(menu.id)">
                        </div>
                    </li>
                </router-link>
            </ul>
            <div
                class="absolute right-[24px] md:right-[48px] left-[24px] md:left-[48px] bottom-[24px] md:bottom-[16px]">
                <ul class="w-full flex justify-between items-center">
                    <a href="https://github.com/DT0998" target="_blank">
                        <v-icon name="bi-github" width="48" height="29"
                            :class="{ 'text-white': isDark, 'text-black': !isDark }" />
                    </a>
                    <ButtonDarkmode />
                </ul>
            </div>
        </nav>
        <button
            class="menu-wrapper fixed right-[24px] md:right-[48px] top-[24px] md:top-[48px] z-[11] flex flex-col p-[8px] h-[50px]"
            @click="toggleMenu()" :class="{ 'active': openMenu }" @mouseleave="isHoverMenuBar = false"
            @mouseover="isHoverMenuBar = true"
            :style="[isHoverMenuBar && (isDark ? darkThemeStyleMenuBar : lightThemeStyleMenuBar)]">
            <div class="menu-bar one-bar relative cursor-pointer w-[24px] min-h-[5px]"
                :class="{ 'bg-white': isDark, 'bg-black': !isDark }"></div>
            <div class="menu-bar two-bar relative cursor-pointer w-[24px] min-h-[5px]"
                :class="{ 'bg-white': isDark, 'bg-black': !isDark }"></div>
        </button>
    </div>
</template>


<style lang="scss">
@import '@/assets/style/variables.scss';
@import '@/layouts/style.scss';

.close-menu {
    transform: translate3d(0, -100%, 0);
}

.overlay {
    backdrop-filter: $backdrop;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition: all .5s;
}

.one-bar {
    top: 8px;
    animation-delay: 0.1s;
    transition: all 0.3s;
}

.two-bar {
    top: 16px;
    transition: all 0.3s;
}


@keyframes slideOut {
    0% {
        width: 100%;
        left: 0%;
        right: auto;
    }

    50% {
        width: 0%;
        left: 0%;
        right: auto;
    }

    51% {
        width: 0%;
        right: 0%;
        left: auto;
    }

    100% {
        width: 100%;
        right: 0%;
        left: auto;
    }
}

.menu-wrapper:hover .menu-bar.active {
    animation: none;
}

.active .one-bar {
    top: 20px;
    transform: rotate(45deg);
}

.active .two-bar {
    transform: rotate(-45deg);
}
</style>

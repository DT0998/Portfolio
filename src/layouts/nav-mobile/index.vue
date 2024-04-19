<script setup lang="ts">
import ButtonDarkmode from "@/components/button-darkmode/index.vue";
import { useMediaQuery, useDark } from '@vueuse/core';
import { reactive, ref } from "vue";
const isDark = useDark();
const isTablet = useMediaQuery('(max-width: 768px)')
const openMenu = ref(false)
const isHover = ref(false);
const toggleMenu = () => {
    openMenu.value = !openMenu.value
}

// dark theme style nav
const darkThemeStyleNav = reactive({
    background: 'color-mix(in lab, oklch(17.76% 0 0) 70%, transparent)',
})

// white theme style nav
const lightThemeStyleNav = reactive({
    background: 'color-mix(in lab, oklch(96.12% 0 0) 70%, transparent)',
})

// dark theme style menu
const darkThemeStyleMenu = reactive({
    background: 'color-mix(in lab, oklch(100% 0 0) 10%, transparent)',
    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)',
})

// white theme style menu
const lightThemeStyleMenu = reactive({
    background: 'color-mix(in lab, oklch(0% 0 0) 10%, transparent)',
    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)',
})

</script>

<template>
    <div v-if="isTablet">
        <nav class="flex flex-col justify-between items-center flex-auto fixed z-[3] w-full h-full overlay"
            :class="{ 'transform-none': openMenu, 'close-menu': !openMenu }"
            :style="[isDark ? darkThemeStyleNav : lightThemeStyleNav]">
            <ul class="w-full h-full flex items-center justify-center flex-col ">
                <li class="p-[24px] w-full text-center">Projects</li>
                <li class="p-[24px] w-full text-center">Details</li>
                <li class="p-[24px] w-full text-center">Contact</li>
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
            class="menu-wrapper fixed right-[24px] md:right-[48px] top-[24px] md:top-[48px] z-[5] flex flex-col p-[8px] h-[50px]"
            @click="toggleMenu()" :class="{ 'active': openMenu }" @mouseleave="isHover = false"
            @mouseover="isHover = true" :style="[isHover && (isDark ? darkThemeStyleMenu : lightThemeStyleMenu)]">
            <div class="menu-bar one-bar relative cursor-pointer w-[24px] min-h-[5px]"
                :class="{ 'bg-white': isDark, 'bg-black': !isDark }"></div>
            <div class="menu-bar two-bar relative cursor-pointer w-[24px] min-h-[5px]"
                :class="{ 'bg-white': isDark, 'bg-black': !isDark }"></div>
        </button>
    </div>
</template>


<style lang="scss">
.close-menu {
    transform: translate3d(0, -100%, 0);
}

.overlay {
    --backdrop: blur(4px) saturate(120%);
    backdrop-filter: var(--backdrop);
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

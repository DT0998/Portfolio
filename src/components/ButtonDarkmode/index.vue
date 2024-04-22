<script setup lang="ts">
import { useToggle, useDark } from "@vueuse/core";
import { reactive, ref } from "vue";
import { variables } from '@/assets/style/variables';
interface IButtonDarkmodeProps {
    extraClass?: string;
}
const { extraClass } = defineProps<IButtonDarkmodeProps>();
const isDark = useDark();
const toggleDarkmode = useToggle(isDark);
const isHover = ref(false);

// dark theme style button
const darkThemeStyleBtn = reactive({
    background: `color-mix(in lab, ${variables.$colorMixDark} 10%, transparent)`,
    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)',
})

// light theme style button
const lightThemeStyleBtn = reactive({
    background: `color-mix(in lab, ${variables.$colorMixLight} 5%, transparent)`,
    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)',
})
</script>

<template>
    <div :class="[extraClass]" class="p-[8px] h-[50px] cursor-pointer" @click="toggleDarkmode()"
        @mouseleave="isHover = false" @mouseover="isHover = true"
        :style="[isHover && (isDark ? darkThemeStyleBtn : lightThemeStyleBtn)]">
        <!-- button dark mode -->
        <button class="scale-75 toggle-mode"
            :class="{ 'toggle-darkmode': isDark, 'toggle-lightmode': !isDark }"></button>
    </div>
</template>


<style lang="scss">
@import './style.scss';
</style>
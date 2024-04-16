<script setup lang="ts">
import { useToggle, useDark } from "@vueuse/core";
import { reactive, ref } from "vue";
interface IButtonDarkmodeProps {
    extraClass?: string;
}
const { extraClass } = defineProps<IButtonDarkmodeProps>();
const isDark = useDark();
const toggleDarkmode = useToggle(isDark);
const isHover = ref(false);

// dark theme style button
const darkThemeStyleBtn = reactive({
    background: 'color-mix(in lab, oklch(100% 0 0) 10%, transparent)',
    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)',
})

// white theme style button
const lightThemeStyleBtn = reactive({
    background: 'color-mix(in lab, oklch(0% 0 0) 0%, transparent)',
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
.toggle-mode {
    --size: 2rem;
    width: var(--size);
    height: var(--size);
    --ray-size: calc(var(--size) * -0.4);
    --offset-orthogonal: calc(var(--size) * 0.65);
    --offset-diagonal: calc(var(--size) * 0.45);
    border-radius: 999px;
    transition: all .5s;
}

.toggle-darkmode {
    @extend .toggle-mode;
    color: hsl(240, 100%, 95%);
    animation: moon .5s forwards;
}


.toggle-lightmode {
    @extend .toggle-mode;
    color: hsl(40, 100%, 50%);
    animation: sun .5s forwards;
}

@keyframes moon {

    0% {
        box-shadow: 0;
    }

    100% {
        box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;

    }
}

@keyframes sun {
    0% {
        box-shadow: 0;
    }

    100% {
        box-shadow: inset 0 0 0 var(--size),
            calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size),
            var(--offset-orthogonal) 0 0 var(--ray-size),
            0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size),
            0 var(--offset-orthogonal) 0 var(--ray-size),
            calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1) 0 var(--ray-size),
            var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size),
            calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0 var(--ray-size),
            var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0 var(--ray-size);
    }
}
</style>
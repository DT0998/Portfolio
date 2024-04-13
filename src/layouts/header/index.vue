<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { useMediaQuery } from '@vueuse/core';
import { ref } from 'vue'
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const isDark = useDark({
    selector: 'body',
    valueDark: 'dark',
    valueLight: 'light',
});
const toggleDarkmode = useToggle(isDark);
</script>

<template>
    <header
        class="fixed w-[48px] left-[24px] md:left-[48px] lg:left-[58px] top-[24px] md:top-[48px] lg:top-[58px] bottom-[24px] md:bottom-[48px] lg:bottom-[58px] flex flex-col">
        <div>
            <v-icon name="bi-github" fill="white" width="48" height="29" />
        </div>
        <nav class="flex flex-col justify-between items-center flex-auto">
            <ul>
                <li>
                    Project
                </li>
                <li>
                    Details
                </li>
                <li>
                    Contact
                </li>
            </ul>
            <ul>
                <li>
                    <v-icon name="bi-github" fill="white" width="24" height="24" />
                </li>
            </ul>
        </nav>
        <div
            class="fixed right-[24px] md:right-[48px] lg:right-[58px] top-[24px] md:top-[48px] lg:top-[58px] bottom-[24px] md:bottom-[48px] lg:bottom-[58px]">
            <!-- button dark mode -->
            <button @click="toggleDarkmode()" class="scale-75 toggle-mode cursor-pointer"
                :class="{ 'toggle-darkmode': isDark, 'toggle-lightmode': !isDark }"></button>
        </div>
    </header>
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
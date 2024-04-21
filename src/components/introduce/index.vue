<script setup lang="ts">
import { reactive } from "vue";
import { useDark } from "@vueuse/core";
import { variables } from '@/assets/style/variables';
const isDark = useDark();
// dark theme style line
const darkThemeStyleLine = reactive({
    background: `color-mix(in lab, ${variables.$colorMixDark} 30%, transparent)`,
})

// white theme style line
const lightThemeStyleLine = reactive({
    background: `color-mix(in lab, ${variables.$colorMixLight} 30%, transparent)`,
})

// dark theme style plus
const darkThemeStylePlus = reactive({
    color: variables.$colorMixDark,
})

// white theme style plus
const lightThemeStylePlus = reactive({
    color: variables.$colorMixLight,
})

</script>

<template>
    <section class="h-screen flex items-start flex-col justify-center md:p-[64px]">
        <span class="text-[1.125rem] opacity-40 mb-[32px]">
            TRIEU DUONG
        </span>
        <h2 class="w-full">
            <div class="flex items-center h-[42px] md:h-[80px]">
                <span class="text-bold text-[2.6rem] md:text-[5rem]">Developer</span>
                <div class="line h-[2px] ml-[20px] w-full" :style="[isDark ? darkThemeStyleLine : lightThemeStyleLine]">
                </div>
            </div>
            <div class="flex items-center h-[42px] md:h-[80px] mt-[5px]">
                <div class="h-full relative z-[1]">
                    <div class="introduce w-full absolute top-0 z-[10] w-full h-full"></div>
                    <div class="content-introduce flex items-center w-fit h-full">
                        <v-icon name="co-plus" class="opacity-40 mr-[10px] md:w-[64px] md:h-[100px] h-[25px] w-[42px] "
                            :style="[isDark ? darkThemeStylePlus : lightThemeStylePlus]" />
                        <span class="text-bold text-[2.6rem] md:text-[5rem] title-introduce"></span>
                        <!-- <span class="text-bold text-[2.6rem] lg:text-[5rem]">Illustrator</span> -->
                    </div>
                </div>
            </div>
        </h2>
    </section>
</template>

<style lang="scss">
@import '@/assets/style/variables.scss';

.line {
    content: "";
}

.introduce {
    background: linear-gradient(to left, $mainColor 50%, transparent 50%);
    background-size: 200% 100%;
    animation: slideLeftToRight 14s ease 5s 1 forwards;
    transition: all 1s ease .4s;
}

.content-introduce {
    animation: show 14s ease infinite;
    transition: all 1s ease .4s;
    animation-delay: calc(5s + 14s);
    animation-duration: 13s;
}

.title-introduce::after {
    content: "Illustrator";
}

@keyframes show {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes slideLeftToRight {
    0% {
        background-position: right bottom;
    }

    100% {
        background-position: left bottom;
    }
}
</style>
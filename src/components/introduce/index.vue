<script setup lang="ts">
import { reactive } from "vue";
import { useDark } from "@vueuse/core";
const isDark = useDark();
// dark theme style line
const darkThemeStyleLine = reactive({
    background: "color-mix(in lab, oklch(100% 0 0) 30%, transparent)",
})

// white theme style line
const lightThemeStyleLine = reactive({
    background: "color-mix(in lab, oklch(0% 0 0) 30%, transparent)",
})

// dark theme style plus
const darkThemeStylePlus = reactive({
    color: "oklch(100% 0 0)",
})

// white theme style plus
const lightThemeStylePlus = reactive({
    color: "oklch(0% 0 0)",
})

</script>

<template>
    <section class="h-screen flex items-start flex-col justify-center">
        <span class="text-[1.125rem]">
            Trieu Duong
        </span>
        <h2 class="w-full">
            <div class="flex items-center h-[42px] md:h-[80px]">
                <span class="text-bold text-[2.6rem] md:text-[5rem]">Developer</span>
                <div class="line h-[2px] ml-[20px] w-full" :style="[isDark ? darkThemeStyleLine : lightThemeStyleLine]">
                </div>
            </div>
            <div class="flex items-center h-[42px] md:h-[80px]">
                <v-icon name="co-plus" class=" opacity-40 mr-[10px] md:w-[64px] md:h-[100px] h-[25px] w-[42px]"
                    :style="[isDark ? darkThemeStylePlus : lightThemeStylePlus]" />
                    <span class="text-bold text-[2.6rem] md:text-[5rem]">Animator</span>
                    <!-- <span class="text-bold text-[2.6rem] lg:text-[5rem]">Illustrator</span> -->
            </div>
        </h2>
    </section>
</template>

<style lang="scss">
.line {
    content: "";
}
</style>
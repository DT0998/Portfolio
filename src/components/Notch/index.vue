<script setup lang="ts">
import { useDark } from "@vueuse/core";
import { reactive } from "vue";
import { variables } from '@/assets/style/variables';
const isDark = useDark();
interface INotchProps {
    title?: string;
    extraClassContainer?: string;
    extraClassLine?: string;
    extraClassNotch?: string;
}
const { title, extraClassLine, extraClassNotch, extraClassContainer } = defineProps<INotchProps>();
// dark theme style notch line
const darkThemeStyleNotchLine = reactive({
    background: `${variables.$mainColor}`,
})

// white theme style notch line
const lightThemeStyleNotchLine = reactive({
    background: `${variables.$colorMixLight}`,
})

// dark theme style notch text
const darkThemeStyleNotchText = reactive({
    color: `${variables.$mainColor}`,
})

// white theme style notch text
const lightThemeStyleNotchText = reactive({
    color: `${variables.$colorMixLight}`,
})

</script>
<template>
    <div class="flex items-center gap-[16px]" :class="[extraClassContainer]">
        <div class="line-project h-[2px]" :style="[isDark ? darkThemeStyleNotchLine : lightThemeStyleNotchLine]"
            :class="[extraClassLine]">
            <div class="notch-project h-[8px]" :style="[isDark ? darkThemeStyleNotchLine : lightThemeStyleNotchLine]"
                :class="[extraClassNotch]"></div>
        </div>
        <span :style="[isDark ? darkThemeStyleNotchText : lightThemeStyleNotchText]" class="font-bold">{{ title }}</span>
    </div>
</template>


<style lang="scss">
@import '@/assets/style/animations.scss';

.line-project {
    content: "";
}

.notch-project {
    content: "";
    transform: translateX(-4px);
    clip-path: polygon(0 -1px, 100% -1px, calc(100% - 10px) 100%, 10px 100%);
}
</style>

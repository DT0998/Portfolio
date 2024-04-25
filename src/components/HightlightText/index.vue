<script setup lang="ts">
import { useDark } from "@vueuse/core";
import { reactive, ref } from "vue";
import { variables } from '@/assets/style/variables';
const isHoverHightlightText = ref(false);
const isDark = useDark();
interface IHightlightTextProps {
    title?: string;
}
const { title } = defineProps<IHightlightTextProps>();

// dark theme style title
const darkThemeStyleTitle = reactive({
    color: `${variables.$mainColor}`,
})

// white theme style title
const lightThemeStyleTitle = reactive({
    color: `${variables.$colorMixLight}`,
})

// dark theme style hightlight line
const darkThemeStyleHightlightLine = reactive({
    background: `color-mix(in lab, ${variables.$colorMixDark} 30%, transparent)`,
})

// white theme style hightlight line
const lightThemeStyleHightlightLine = reactive({
    background: `color-mix(in lab, ${variables.$colorMixLight} 30%, transparent)`,
})

// dark theme style hightlight slide line
const darkThemeStyleHightlightSlideLine = reactive({
    background: `${variables.$mainColor}`,
})

// white theme style hightlight slide line
const lightThemeStyleHightlightSlideLine = reactive({
    background: `${variables.$colorMixLight}`,
})
</script>


<template>
    <a :style="[isDark ? darkThemeStyleTitle : lightThemeStyleTitle]"
        class="ml-[5px] pb-[2px] relative z-[1] overflow-hidden cursor-pointer"
        @mouseleave="isHoverHightlightText = false" @mouseover="isHoverHightlightText = true">
        {{ title }}
        <span class="hightlight-line h-[2px] absolute bottom-0 left-0 w-full"
            :style="[isDark ? darkThemeStyleHightlightLine : lightThemeStyleHightlightLine]">
        </span>
        <span class="hightlight-slide-line h-[2px] absolute bottom-0 left-0 w-full"
            :style="[isDark ? darkThemeStyleHightlightSlideLine : lightThemeStyleHightlightSlideLine]"
            :class="{ 'hightlight-slide-active': isHoverHightlightText, 'hightlight-slide-deactive': !isHoverHightlightText }">
        </span>
    </a>
</template>

<style lang="scss">
@import '@/assets/style/animations.scss';

.hightlight-line {
    content: "";
}

.hightlight-slide-line {
    content: "";
    transition: all .6s ease .4s;
}

.hightlight-slide-active {
    @include slideHightlightLineActive(forwards);
}

.hightlight-slide-deactive {
    @include slideHightlightLineDeactive(forwards);
}
</style>
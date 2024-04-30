<script setup lang="ts">
import { variables } from '@/assets/style/variables';
import { reactive } from 'vue';
interface IHightlightLineProps {
    isActive?: boolean;
    isDark?: boolean;
}
const { isActive, isDark } = defineProps<IHightlightLineProps>();
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
    <span class="hightlight-line h-[2px] absolute bottom-0 left-0 w-full"
        :style="[isDark ? darkThemeStyleHightlightLine : lightThemeStyleHightlightLine]">
    </span>
    <span class="hightlight-slide-line h-[2px] absolute bottom-0 left-0 w-full"
        :style="[isDark ? darkThemeStyleHightlightSlideLine : lightThemeStyleHightlightSlideLine]"
        :class="{ 'hightlight-slide-active': isActive, 'hightlight-slide-deactive': !isActive }">
    </span>
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
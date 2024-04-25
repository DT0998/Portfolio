<script setup lang="ts">
import { variables } from '@/assets/style/variables';
import { useDark } from "@vueuse/core";
import { reactive, ref } from "vue";
interface IHightlightButtonProps {
    title?: string;
    icon?: string;
}
const { title, icon } = defineProps<IHightlightButtonProps>();
const isHoverHightlightBtn = ref(false);
const isDark = useDark();
// dark theme style send me
const darkThemeStyleSendMe = reactive({
    color: `${variables.$mainColor}`,
})

// white theme style send me
const lightThemeStyleSendMe = reactive({
    color: `${variables.$colorMixLight}`,
})

// dark theme style bg send me
const darkThemeStyleBgSendMe = reactive({
    background: `${variables.$mainColor}`,
})

// white theme style bg send me
const lightThemeStyleBgSendMe = reactive({
    background: `${variables.$colorMixLight}`,
})
</script>

<template>
    <div class="flex items-center" :style="[isDark ? darkThemeStyleSendMe : lightThemeStyleSendMe]"
        @mouseleave="isHoverHightlightBtn = false" @mouseover="isHoverHightlightBtn = true">
        <div class="relative overflow-hidden">
            <div class="w-full absolute top-0 z-[10] w-full h-full animation-slideltr z-[1] opacity-20"
                :style="[isDark ? darkThemeStyleBgSendMe : lightThemeStyleBgSendMe]"
                :class="{ 'hightlight-btn-active': isHoverHightlightBtn, 'hightlight-btn-deactive': !isHoverHightlightBtn }">
            </div>
            <div class="px-[10px] flex items-center">
                <v-icon :name="icon" class="mr-[10px] h-[24px] w-[24px] relative z-[10]" />
                <span class="text-[18px] font-bold relative z-[10]">{{ title }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/style/animations.scss';

.hightlight-btn-active {
    @include hightlightBtnActive();
}

.hightlight-btn-deactive {
    @include hightlightBtnDeactive();
}
</style>

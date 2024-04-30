<script setup lang="ts">
import { useDark } from "@vueuse/core";
import { reactive, ref } from "vue";
import { variables } from '@/assets/style/variables';
import HightLightLine from '@/components/HightlightLine/index.vue';
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
</script>


<template>
    <a :style="[isDark ? darkThemeStyleTitle : lightThemeStyleTitle]"
        class="ml-[5px] pb-[2px] relative z-[1] overflow-hidden cursor-pointer"
        @mouseleave="isHoverHightlightText = false" @mouseover="isHoverHightlightText = true">
        {{ title }}
       <HightLightLine :isActive="isHoverHightlightText" :isDark="isDark" />
    </a>
</template>

<style lang="scss">

</style>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { useDark } from "@vueuse/core";
import { variables } from '@/assets/style/variables';
import Notch from '@/components/Notch/index.vue';
import ModelDevice, { type IModel } from '@/components/ModelDevice/index.vue';
const isHoverBtn = ref(false);
const isDark = useDark();
interface IProjectsProps {
    id?: string;
    title?: string;
    desc?: string;
    extraClass?: string;
    typeModel?: string;
    models?: IModel;
}
const { id, title, desc, extraClass, models } = defineProps<IProjectsProps>();
// dark theme style button
const darkThemeStyleBtn = reactive({
    background: `${variables.$mainColor}`,
})

// white theme style button
const lightThemeStyleBtn = reactive({
    background: `${variables.$colorMixLight}`,
})
</script>
<template>
    <div class="flex flex-col-reverse my-[64px] gap-[48px] px-[10px]" :class="[extraClass]">
        <div class="flex flex-col items-center">
            <div class="max-w-[480px]">
                <Notch :title="id" extraClassLine="max-w-[90px]" extraClassNotch="max-w-[64px] "
                    extraClassContainer="gap-[16px]" />
                <h2 class="text-[24px] lg:text-[36px] mb-[24px] font-bold" data-aos="fade-up">{{ title }}</h2>
                <p data-aos="fade-up">
                    <span class="opacity-60 lg:text-[18px] mb-[24px] block">
                        {{ desc }}
                    </span>
                </p>
                <div data-aos="fade-up">
                    <a>
                        <button class="flex items-center w-fit py-[10px] px-[24px] btn-viewproject cursor-pointer"
                            :style="[isDark ? darkThemeStyleBtn : lightThemeStyleBtn]"
                            :class="{ 'text-black': isDark, 'text-white': !isDark }" @mouseleave="isHoverBtn = false"
                            @mouseover="isHoverBtn = true">
                            <span class="text-[18px]">
                                View Project
                            </span>
                            <v-icon name="bi-arrow-right" width="24" height="24" class="ml-[4px] btn-icon"
                                :class="{ 'translate-x-1': isHoverBtn, 'translate-x-0': !isHoverBtn }" />
                        </button>
                    </a>
                </div>
            </div>
        </div>
        <div data-aos="fade-up">
            <ModelDevice :typeModel="typeModel" :models="models" />
        </div>
    </div>
</template>

<style lang="scss">
.btn-viewproject {
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%);
    transition: all 0.6s ease;
}

.btn-viewproject:hover {
    transform: scale(1.1);
}

.btn-icon {
    transition: all 0.6s ease;
}
</style>

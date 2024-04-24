<script setup lang="ts">
import { reactive, ref, onMounted, onUnmounted } from "vue";
import { useDark } from "@vueuse/core";
import { variables } from '@/assets/style/variables';
import titleBinary from "@/components/TitleBinary/index.vue";
const titlesIntroduce = ["Illustrator", "Animator"];
const titleIntroduce = ref(titlesIntroduce[0]);
let titleIntroduceIndex = 0;
let intervalIdTitleIntroduce: number | undefined;
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

// change title introduce
const changeTitleIntroduce = () => {
    // Increment the title index
    titleIntroduceIndex = (titleIntroduceIndex + 1) % titlesIntroduce.length;

    // Update the current title based on the title index
    titleIntroduce.value = titlesIntroduce[titleIntroduceIndex];
};

onMounted(() => {
    intervalIdTitleIntroduce = setInterval(changeTitleIntroduce, 10000);
})

onUnmounted(() => {
    clearInterval(intervalIdTitleIntroduce);
});
</script>

<template>
    <section class="h-screen flex items-start flex-col justify-center md:p-[64px]">
        <titleBinary extraClass="text-[1.125rem] opacity-60 md:mb-[32px] tracking-[.3em] font-medium"
            title="TRIEU DUONG" />
        <h2 class="w-full">
            <div class="flex items-center h-[42px] md:h-[80px]">
                <div class="h-full">
                    <div class="w-full h-full flex items-center animation-content overflow-hidden relative z-[1]">
                        <div class="introduce-top w-full absolute top-0 z-[10] w-full h-full animation-slideltr">
                        </div>
                        <span class="text-bold text-[2.6rem] md:text-[5rem] lg:text-[100px] content-introduce-top">
                            Developer
                        </span>
                    </div>
                </div>
                <span class="line h-[2px] ml-[20px] w-full"
                    :style="[isDark ? darkThemeStyleLine : lightThemeStyleLine]">
                </span>
            </div>
            <div class="flex items-center h-[42px] md:h-[80px] mt-[5px]">
                <div class="h-full relative z-[1] overflow-hidden">
                    <div class="introduce w-full absolute top-0 z-[10] w-full h-full animation-slideltr"></div>
                    <div class="flex items-center w-fit h-full animation-content content-introduce">
                        <v-icon name="co-plus"
                            class="opacity-40 md:mr-[10px] md:w-[64px] md:h-[100px] h-[25px] w-[42px]"
                            :style="[isDark ? darkThemeStylePlus : lightThemeStylePlus]" />
                        <span class="text-bold text-[2.6rem] md:text-[5rem] lg:text-[100px]">{{ titleIntroduce }}</span>
                    </div>
                </div>
            </div>
        </h2>
    </section>
</template>

<style lang="scss">
@import '@/assets/style/animations.scss';

.line {
    content: "";
    transition: all .6s ease .4s;
    @include lineLeftToRight(forwards);
}

.introduce-top {
    @include slideBackground(forwards);
}

.content-introduce-top {
    @include showTop(forwards);
}

.introduce {
    @include slideBackground(infinite);
}

.content-introduce {
    @include showBottom(infinite);
}
</style>
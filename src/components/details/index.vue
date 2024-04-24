<script setup lang="ts">
import titleBinary from '@/components/TitleBinary/index.vue';
import myAvatar from '@/assets/images/Details/myAvatar.jpg';
import NotchComponent from '@/components/Notch/index.vue';
import { variables } from '@/assets/style/variables';
import { useDark } from "@vueuse/core";
import { reactive } from "vue";

const isDark = useDark();
// dark theme style notch line
const darkThemeStyleSendMe = reactive({
   color: `${variables.$mainColor}`,
})

// white theme style notch line
const lightThemeStyleSendMe = reactive({
   color: `${variables.$colorMixLight}`,
})
</script>
<template>
   <div class="flex my-[40px] flex-col xl:flex-row gap-[48px]">
      <div class="w-full h-full">
         <titleBinary extraClass="text-[36px] md:mb-[32px] font-bold" title="Hi there" />
         <div class="mb-[32px]">
            <p>I'm Trieu</p>
         </div>
         <router-link to="/contact">
            <div class="flex items-center" :style="[isDark ? darkThemeStyleSendMe : lightThemeStyleSendMe]">
               <v-icon name="io-send" class="mr-[10px] h-[24px] w-[24px]" />
               <span class="text-[18px]">Send me a message</span>
            </div>
         </router-link>
      </div>
      <div class="w-full h-full">
         <NotchComponent title="About me" extraClassLine="max-w-[90px]" extraClassNotch="max-w-[64px]"
            extraClassContainer="mt-[30px] xl:mt-[220px] mb-[40px]" />
         <div class="h-full relative z-[1] overflow-hidden">
            <div class="avatar w-full absolute top-0 z-[10] w-full h-full animation-slideltr"></div>
            <img :src="myAvatar" alt="its me" class="avatar-img" />
         </div>
      </div>
   </div>
</template>

<style lang="scss">
@import '@/assets/style/animations.scss';

.avatar {
   @include slideBackground(forwards);
}

.avatar-img {
   transition: all .6s ease .4s;
   @include showTop(forwards);
}
</style>

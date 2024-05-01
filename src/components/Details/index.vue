<script setup lang="ts">
import titleBinary from '@/components/TitleBinary/index.vue';
import myAvatar from '@/assets/images/Details/myAvatar.jpg';
import Notch from '@/components/Notch/index.vue';
import HightlightText from '@/components/HightlightText/index.vue';
import HightlightButton from '@/components/HightlightButton/index.vue';
</script>

<template>
   <div class="flex my-[40px] flex-col xl:flex-row gap-[48px]">
      <div class="w-full h-full">
         <titleBinary extraClass="text-[36px] md:mb-[32px] font-bold px-[10px]" title="Hi there" />
         <div class="mb-[32px] px-[10px]" data-aos="zoom-in-up">
            <p class="flex ">
               <span class="opacity-60">
                  I'm Trieu
               </span>
               <HightlightText title="adadadad" />
            </p>
         </div>
         <HightlightButton title="Send me a message" icon="io-send" navigateTo="/contact" />
      </div>
      <div class="w-full h-full px-[10px]">
         <Notch title="About me" extraClassLine="max-w-[90px]" extraClassNotch="max-w-[64px]"
            extraClassContainer="mt-[30px] xl:mt-[220px] mb-[40px] px-[10px] gap-[16px]" />
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

<script setup lang="ts">
import titleBinary from '@/components/TitleBinary/index.vue';
import myAvatar from '@/assets/images/Details/myAvatar.jpg';
import NotchComponent from '@/components/Notch/index.vue';
</script>
<template>
   <div class="flex my-[40px] flex-col xl:flex-row gap-[48px]">
      <div class="w-full">
         <titleBinary extraClass="text-[36px] md:mb-[32px] font-bold" title="Hi there" />
         <div>
            <span>Send me a message</span>
         </div>
      </div>
      <div class="w-full">
         <NotchComponent title="About me" extraClassLine="w-[90px]" extraClassNotch="w-[64px]"
            extraClassContainer="mt-[30px] xl:mt-[220px] mb-[40px]" />
         <img :src="myAvatar" alt="its me" />
      </div>
   </div>
</template>

<style lang="scss"></style>

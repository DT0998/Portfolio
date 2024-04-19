<script setup lang="ts">
import NavMobile from "@/layouts/nav-mobile/index.vue";
import NavDesktop from "@/layouts/nav-desktop/index.vue";
import SvgTumblr from "@/components/svg-tumblr/index.vue";
</script>

<template>
    <header class="flex flex-col">
        <div
            class="fixed w-[48px] left-[24px] md:left-[48px] lg:left-[58px] top-[24px] md:top-[48px] lg:top-[58px] lg:bottom-[58px] flex flex-col z-[5] mt-[8px]">
            <!-- svg tumblr -->
            <SvgTumblr />
            <!-- nav desktop -->
            <NavDesktop />
        </div>
        <!-- nav mobile -->
        <NavMobile />
    </header>
</template>


<style lang="scss"></style>

<script setup lang="ts">
import NavMobile from "@/layouts/NavMobile/index.vue";
import NavDesktop from "@/layouts/NavDesktop/index.vue";
import SvgTumblr from "@/components/SvgTumblr/index.vue";
</script>

<template>
    <header class="flex flex-col">
        <div
            class="fixed w-[48px] left-[24px] md:left-[48px] lg:left-[58px] top-[24px] md:top-[48px] lg:top-[58px] lg:bottom-[58px] flex flex-col z-[12] mt-[8px]">
            <!-- svg tumblr -->
            <router-link to="/">
                <SvgTumblr />
            </router-link>
            <!-- nav desktop -->
            <NavDesktop />
        </div>
        <!-- nav mobile -->
        <NavMobile />
    </header>
</template>


<style lang="scss"></style>

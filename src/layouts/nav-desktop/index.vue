<script setup lang="ts">
import ButtonDarkmode from "@/components/button-darkmode/index.vue";
import { useDark } from "@vueuse/core";
import { useMediaQuery } from '@vueuse/core';
const isTablet = useMediaQuery('(max-width: 768px)')
const isDark = useDark({
    selector: 'body',
    valueDark: 'dark',
    valueLight: 'light',
});
</script>

<template>
    <div v-if="!isTablet" class="flex flex-auto justify-center">
        <nav class="flex flex-col justify-between items-center">
            <ul class="flex flex-col">
                <li class="[writing-mode:vertical-lr] p-[16px] rotate-180">
                    Project
                </li>
                <li class="[writing-mode:vertical-lr] p-[16px] rotate-180">
                    Details
                </li>
                <li class="[writing-mode:vertical-lr] p-[16px] rotate-180">
                    Contact
                </li>
            </ul>
            <ul>
                <li>
                    <v-icon name="bi-github" width="24" height="24"
                        :class="{ 'text-white': isDark, 'text-black': !isDark }" />
                </li>
            </ul>
        </nav>
        <ButtonDarkmode
            extraClass="fixed right-[24px] md:right-[48px] lg:right-[58px] top-[24px] md:top-[48px] lg:top-[58px] bottom-[24px] md:bottom-[48px] lg:bottom-[58px]" />
    </div>
</template>


<style lang="scss"></style>
<script setup lang="ts">
interface IButtonDarkmodeProps {
    extraClass?: string;
    title?: string;
}
const { extraClass, title } = defineProps<IButtonDarkmodeProps>();
</script>
<!-- text-[1.125rem] opacity-40 md:mb-[32px]  -->

<template>
    <span class="font-medium" :class="[extraClass]">
        <span>T</span>
        <span>R</span>
        <span>I</span>
        <span>E</span>
        <span>U</span>
        <span></span>
        <span>D</span>
        <span>U</span>
        <span>O</span>
        <span>N</span>
        <span>G</span>
    </span>
</template>
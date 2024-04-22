<script setup lang="ts">
import { ref, onMounted } from 'vue';
interface ITitleBinaryProps {
    extraClass?: string;
    title?: string;
}
const { extraClass, title } = defineProps<ITitleBinaryProps>();
const characterTitle = ref<string[]>([]);
const handleConvertCharacter = () => {
    if (title) {
        characterTitle.value = title.split('');
    } else {
        characterTitle.value = [];
    }
};

onMounted(() => {
    handleConvertCharacter();
});
</script>

<template>
    <span :class="[extraClass]">
        <span v-for="(character, index) in characterTitle" :key="index">{{ character }}</span>
    </span>
</template>
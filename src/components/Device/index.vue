<script setup lang="ts">
import type { IModel } from '../ModelDevice/index.vue';
import { onMounted, ref, watch } from 'vue';

interface IDeviceProps {
    model: IModel,
    size?: string,
    extraHeight?: number,
}

export interface ITargetPosition {
    x: number;
    y: number;
    z: number;
}
const { model, size, extraHeight } = defineProps<IDeviceProps>();

const { texture, url, position } = model;

onMounted(() => {
})
</script>

<template>
    <View3D :src="url" class="w-full h-full" />
</template>

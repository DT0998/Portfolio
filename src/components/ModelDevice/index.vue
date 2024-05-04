<script setup lang="ts">
import { rotationSpringConfig } from '@/utils/data/device';
import { useMotionProperties, useSpring } from '@vueuse/motion';
import Device, { type ITargetPosition } from '@/components/Device/index.vue';
import { ref } from 'vue';
import { useMediaQuery } from '@vueuse/core';
interface IModelDeviceProps {
    typeModel?: string;
    showDelay?: number;
    cameraPosition?: ICameraPosition;
    models?: IModel[];
    show?: boolean;
}
interface ICameraPosition {
    x: number;
    y: number;
    z: number;
}
interface ITexture {
    placeholder: string;
    sizes: string;
    srcSet: string;
}

export interface IModel {
    animation?: string;
    height?: number;
    position?: ITargetPosition;
    texture?: ITexture;
    url?: string;
    width?: number;
}
const { typeModel, models, show = true, showDelay = 0, cameraPosition = { x: 0, y: 0, z: 8 } } = defineProps<IModelDeviceProps>();
const isPhoneScreen = useMediaQuery('(max-width: 1024px)')
const phoneSizes = `${isPhoneScreen} 30vw, 20vw`;
const laptopSizes = `${isPhoneScreen} 80vw, 40vw`;
</script>
<template>
    <div>
        <canvas />
        <template v-if="typeModel === 'laptop'">
            <Device :model="model" :size="laptopSizes" v-for="(model, index) in models" :key="index" />
        </template>
        <template v-if="typeModel === 'phone'">
            <Device :model="model" :size="phoneSizes" v-for="(model, index) in models" :key="index" />
        </template>
    </div>
</template>
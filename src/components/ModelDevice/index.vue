<script setup lang="ts">
import { rotationSpringConfig } from '@/utils/data/device';
import { useMotionProperties, useSpring } from '@vueuse/motion';
import Device, { type ITargetPosition } from '@/components/Device/index.vue';
import { computed, onMounted, ref, watch } from 'vue';
import { useMediaQuery } from '@vueuse/core';
import { PerspectiveCamera } from 'three';
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
    srcSet: string;
}

export interface IModel {
    animation?: string;
    height?: number;
    position?: ITargetPosition;
    texture: ITexture;
    url: string;
    width?: number;
}
const { typeModel, models, show = true, showDelay = 0, cameraPosition = { x: 0, y: 0, z: 8 } } = defineProps<IModelDeviceProps>();
const isPhoneScreen = useMediaQuery('(max-width: 1024px)')
const phoneSizes = `${isPhoneScreen} 30vw, 20vw`;
const laptopSizes = `${isPhoneScreen} 80vw, 40vw`;
let camera: PerspectiveCamera = new PerspectiveCamera();
const container = ref<HTMLElement | any>(null);

onMounted(() => {
})
</script>
<template>
    <div ref="container" class="flex justify-center items-center w-full h-full" role="img">
        <div :data-device="typeModel" class="w-[512px] h-[512px]">
            <template v-if="typeModel === 'laptop'">
                <Device :model="model" :size="laptopSizes" v-for="(model, index) in models" :key="index" />
            </template>
            <template v-if="typeModel === 'phone'">
                <Device :model="model" :size="phoneSizes" v-for="(model, index) in models" :key="index" />
            </template>
        </div>
    </div>
</template>
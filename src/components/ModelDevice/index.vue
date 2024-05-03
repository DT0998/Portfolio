<script setup lang="ts">
interface IModelDeviceProps {
    typeModel?: string;
    texture?: IModelDeviceTextures[];
    showDelay?: number;
    cameraPosition?: IModelDeviceCameraPosition;
}
interface IModelDeviceCameraPosition {
    x: number;
    y: number;
    z: number;
}
interface IModelDeviceTextures {
    srcSet: string;
    placeholder: string;
}
const { typeModel, texture, showDelay = 0, cameraPosition = { x: 0, y: 0, z: 8 } } = defineProps<IModelDeviceProps>();
</script>
<template>Model Device {{ typeModel }}</template>
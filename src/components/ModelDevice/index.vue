<script setup lang="ts">
interface IModelDeviceProps {
    type?: string;
    texture?: string;
}
const {type} = defineProps<IModelDeviceProps>();
</script>
<template>Model Device</template>
<script setup lang="ts">
import type { WebGLRendererParameters } from 'three';
import type { IModel } from '../ModelDevice/index.vue';
import { onMounted } from 'vue';

interface IDeviceProps {
    rerender?: WebGLRendererParameters,
    model: IModel,
    size?: string,
    modelGroup?: string
}

export interface ITargetPosition {
    x: number;
    y: number;
    z: number;
}
const { rerender, model, size, modelGroup } = defineProps<IDeviceProps>();
const loadModel = async () => {
    const { texture, url, position } = model;
}
onMounted(() => {
    console.log('model', model);
    loadModel();
})
</script>

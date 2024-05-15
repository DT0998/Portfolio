import { TextureLoader } from "three";
import { DRACOLoader, GLTFLoader } from "three-stdlib";

const dracoLoader = new DRACOLoader();
const gltfLoader = new GLTFLoader();
// draco path https://naver.github.io/egjs-view3d/docs/tutorials/Compression/Draco
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
gltfLoader.setDRACOLoader(dracoLoader);

/**
 * GLTF model loader configured with draco decoder
 */
export const modelLoader = gltfLoader;
export const textureLoader = new TextureLoader();
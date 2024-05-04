import iphone11 from '@/assets/models/Device/iphone-11.glb';
import macbookPro from '@/assets/models/Device/macbook-pro.glb';

export const ModelAnimationType = {
    PhoneFadeUp: 'phone-fade-up',
    LaptopOpen: 'laptop-open',
};
interface IDeviceModelData {
    url: string;
    width: number;
    height: number;
    position: { x: number; y: number; z: number };
    animation: string;
}

interface IDeviceModels {
    phone: IDeviceModelData;
    laptop: IDeviceModelData;
}

export const deviceModels: IDeviceModels = {
    phone: {
        url: iphone11,
        width: 374,
        height: 512,
        position: { x: 0, y: 0, z: 0 },
        animation: ModelAnimationType.PhoneFadeUp,
    },
    laptop: {
        url: macbookPro,
        width: 1280,
        height: 800,
        position: { x: 0, y: 0, z: 0 },
        animation: ModelAnimationType.LaptopOpen,
    },
};


export const MeshType = {
    Frame: 'Frame',
    Logo: 'Logo',
    Screen: 'Screen',
};

export const rotationSpringConfig = {
    stiffness: 40,
    damping: 20,
    mass: 1.4,
    restSpeed: 0.001,
};
import iphone11 from '@/assets/models/Device/iphone-11.glb';
import macbookPro from '@/assets/models/Device/macbook-pro.glb';

export const ModelAnimationType = {
    MobileFadeUp: 'mobile-fade-up',
    LaptopOpen: 'laptop-open',
};

export const deviceModels = {
    phone: {
        url: iphone11,
        width: 374,
        height: 512,
        position: { x: 0, y: 0, z: 0 },
        animation: ModelAnimationType.MobileFadeUp,
    },
    laptop: {
        url: macbookPro,
        width: 1280,
        height: 800,
        position: { x: 0, y: 0, z: 0 },
        animation: ModelAnimationType.LaptopOpen,
    },
};

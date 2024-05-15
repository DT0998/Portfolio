import { createStore } from 'vuex'
import { navModule } from '../../store/layouts/Nav/store';
import { deviceModule } from '@/store/device/store';

export const store = createStore({
    modules: {
        // Add modules here
        nav: navModule,
        device: deviceModule
    }
});
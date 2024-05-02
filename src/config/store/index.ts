import { createStore } from 'vuex'
import { navModule } from '../../store/layouts/Nav/store';

export const store = createStore({
    modules: {
        // Add modules here
        nav: navModule
    }
});
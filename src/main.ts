import './assets/style/main.scss'
import 'aos/dist/aos.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiGithub, CoMoon, CoPlus, BiArrowRight, IoSend, CoWarning } from 'oh-vue-icons/icons'
import { store } from './config/store'
import { MotionPlugin } from '@vueuse/motion'
import "@egjs/vue3-view3d/css/view3d-bundle.min.css";
import View3D from "@egjs/vue3-view3d";

// import use icon
addIcons(BiGithub, CoMoon, CoPlus, BiArrowRight, IoSend, CoWarning)
const app = createApp(App)

// add all icons to the library so you can use it in your page
app.use(router)
app.use(store)
app.use(MotionPlugin)

// This will register the component named "View3D"
app.use(View3D);

app.component('v-icon', OhVueIcon)
app.mount('#app')

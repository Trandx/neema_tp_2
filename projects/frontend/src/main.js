import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import './assets/css/formCss.css'

import './assets/css/custom.css'

// import vueform css

import '@vueform/multiselect/themes/default.css';

// import fontawesome
import '@fortawesome/fontawesome-free/css/all.css'
// import tailwind css
import './assets/css/flowbite.css'

import './assets/css/tailwind.css'


const app = createApp(App)

const pinia = createPinia().use(piniaPersist)

app.use(pinia)
app.use(router)

app.mount('#app')

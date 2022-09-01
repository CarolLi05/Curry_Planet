import { createApp } from 'vue'

// Pinia
import { createPinia } from 'pinia'

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// fontawsome
import '@fortawesome/fontawesome-free'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import App from './App.vue'
import router from './router'

// Pinia
const pinia = createPinia()
const app = createApp(App)
app.use(VueAxios, axios)
app.use(pinia)
app.use(router)

app.mount('#app')

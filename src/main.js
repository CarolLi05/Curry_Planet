import { createApp } from 'vue'

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// fontawsome
import '@fortawesome/fontawesome-free'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)

app.mount('#app')

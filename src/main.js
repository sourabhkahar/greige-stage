import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import LoaderVue from './components/LoaderVue.vue'
import VueNumber  from 'vue-number-animation'
const app = createApp(App)
app.use(router)
app.use(VueNumber)
app.component('LoaderVue', LoaderVue)
app.mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import BaseButton from '@/components/BaseButton.vue'
const app = createApp(App)
const pinia = createPinia()

app.component('base-button', BaseButton)
app.use(pinia)
app.mount("#app")

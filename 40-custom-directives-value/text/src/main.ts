import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vShowOnHover from './directives/showOnHover'

createApp(App)
.directive('showOnHover', vShowOnHover)
.mount('#app')

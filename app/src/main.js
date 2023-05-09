import  { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// import 'bootstrap/dist/css/bootstrap.css'
// import "bootstrap/dist/css/bootstrap.css"
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

const app = createApp(App)
app.use(router)
app.use(bootstrap)
app.mount('#app')




import { createApp } from 'vue'
// import App from './App.vue'
import App from './App'
// import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './styles/index.scss'

const app = createApp(App)

// app.use(Antd).mount('#app')
app.mount('#app')

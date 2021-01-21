import { createApp } from 'vue'
import router from './router'
import store from './store'
import reportWebVitals from './reportWebVitals'
// import App from './App.vue'
import App from './App'
// import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// import './styles/index.scss'
import '/@/styles/index.scss'

const app = createApp(App)

// app.use(Antd).mount('#app')
app.use(router).use(store).mount('#app')

// Web Vitals日志输出
// eslint-disable-next-line
reportWebVitals(console.log)
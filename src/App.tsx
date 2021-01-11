import * as vue from 'vue'
import { defineComponent } from 'vue'
import Logo from './assets/logo.png'
import HelloWorld from './components/HelloWorld'

const React = { createElement: vue.h, Fragment: vue.Fragment }

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <img alt="Vue logo" src={Logo} />
        <h2>Vue 后台管理系统</h2>
        <HelloWorld msg="Hello Vue 3 + Vite" />
      </>
    )
  },
})

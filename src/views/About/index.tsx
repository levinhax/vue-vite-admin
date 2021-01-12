// import * as vue from 'vue' // 已配置插件 @vitejs/plugin-vue-jsx
import { defineComponent } from 'vue'
import { Button } from 'ant-design-vue'
import './index.scss'
import Logo from '../../assets/logo.png'

// const React = { createElement: vue.h, Fragment: vue.Fragment } // 已配置插件 @vitejs/plugin-vue-jsx

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div class="about-wrapper">
        <h2 class="title">About</h2>
        <img alt="Vue logo" src={Logo} width="120" height="120" />
        <Button type="primary" style={{ width: '80px' }}>
          {() => '按钮'}
        </Button>
      </div>
    )
  },
})

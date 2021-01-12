// import * as vue from 'vue' // 已配置插件 @vitejs/plugin-vue-jsx
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

// const React = { createElement: vue.h, Fragment: vue.Fragment } // 已配置插件 @vitejs/plugin-vue-jsx

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <div id="nav">
          <RouterLink to="/">{() => 'Home'}</RouterLink> |{' '}
          <RouterLink to="/about">{() => 'About'}</RouterLink>
        </div>
        <RouterView />
      </>
    )
  },
})

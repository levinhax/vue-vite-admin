// import * as vue from 'vue' // 已配置插件 @vitejs/plugin-vue-jsx
import { defineComponent, onMounted, ref, computed } from 'vue'
import { useStore } from 'vuex'
import { Button } from 'ant-design-vue'
import './index.scss'
import Logo from '../../assets/logo.png'
import { getGlobEnvConfig } from '/@/utils/env'

// const React = { createElement: vue.h, Fragment: vue.Fragment } // 已配置插件 @vitejs/plugin-vue-jsx

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore()
    let userName = ref('初始用户名')
    userName = computed(() => store.state.user.userName)
    console.log('userName: ', userName.value)

    const handleLogin = (): void => {
      console.log('提交用户信息')
      store.dispatch('user/Login', {
        token: '测试token',
      })
    }

    const handleChangeInfo = (): void => {
      console.log('更新用户信息')
      store.dispatch('user/GetInfo')
    }

    onMounted(() => {
      console.log('getGlobEnvConfig: ')
      const globalEnvConfig = getGlobEnvConfig()
      console.log(globalEnvConfig)

      console.log('store: ')
      console.log(store.state.user.userName)
    })

    return () => (
      <div class="about-wrapper">
        <h2 class="title">About</h2>
        <img alt="Vue logo" src={Logo} width="120" height="120" />
        <p>用户名: {userName.value}</p>
        <Button type="primary" style={{ marginRight: '20px' }} onClick={handleLogin}>
          {() => '登录'}
        </Button>
        <Button type="primary" onClick={handleChangeInfo}>
          {() => '更新用户信息'}
        </Button>
      </div>
    )
  },
})

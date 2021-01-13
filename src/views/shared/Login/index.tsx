import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { Form, Input, Button, message } from 'ant-design-vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import './index.scss'

/** 登陆接口 */
interface IState {
  username: string
  password: string
  type: boolean
}

export default defineComponent({
  name: 'Login',
  setup() {
    const router = useRouter()
    const loginState = reactive<IState>({ username: '', password: '', type: false })
    const { Password } = Input

    const handleKeyDown = (event: { keyCode: any }) => {
      if (event.keyCode === 13) {
        message.info('您按下了enter键')
      }
    }

    const handleLogin = async (): Promise<void> => {
      loginState.type = !loginState.type
      // const { code, data } = await LoginApi(login_list)
      // /** 成功登陆 */
      // if (code === 20000) {
      //     localStorage.token = data.token
      //     router.push('/')
      // } else {
      //     /** 错误提示 */
      //     message.error(data.msg)
      //     loginState.username = ''
      //     loginState.password = ''
      //     loginState.type = false
      // }

      if (loginState.username === 'admin' && loginState.password === '123456') {
        message.success('登录成功，即将进入系统内部')
        setTimeout(() => {
          router.push('/')
        }, 3000)
      } else {
        message.error('请输入正确的账号密码')
      }
    }

    return () => (
      <div class="login-wrapper">
        <div class="login-logo">
          <h1>Vue3 Antd</h1>
        </div>

        <div class="login-content">
          <Form>
            {() => (
              <>
                <Form.Item>
                  {() => (
                    <Input
                      onKeydown={handleKeyDown}
                      size="large"
                      disabled={loginState.type}
                      value={loginState.username}
                      onChange={(e: Event) => {
                        loginState.username = (e.target as HTMLInputElement).value
                      }}
                      allow-clear
                      v-slots={{ prefix: () => <UserOutlined /> }}
                      placeholder="账号"
                      style={{ width: '400px' }}
                    ></Input>
                  )}
                </Form.Item>

                <Form.Item>
                  {() => (
                    <Password
                      onKeydown={handleKeyDown}
                      size="large"
                      disabled={loginState.type}
                      value={loginState.password}
                      onChange={(e: Event) => {
                        loginState.password = (e.target as HTMLInputElement).value
                      }}
                      allow-clear
                      v-slots={{ prefix: () => <LockOutlined /> }}
                      placeholder="账号"
                      style={{ width: '400px' }}
                    ></Password>
                  )}
                </Form.Item>

                <Form.Item>
                  {() => (
                    <Button
                      size="large"
                      onClick={handleLogin}
                      type="primary"
                      block
                      style={{ width: '400px' }}
                    >
                      {() => '登录'}
                    </Button>
                  )}
                </Form.Item>
              </>
            )}
          </Form>
        </div>
      </div>
    )
  },
})

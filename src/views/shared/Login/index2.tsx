import { Form, Input, Button, message } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { defineComponent, reactive } from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
// import { LoginApi } from '@/api/login'

/** 登陆接口 */
interface IState {
  username: string
  password: string
  type: boolean
}

const Login = defineComponent({
  setup() {
    const router = useRouter()
    const { Item } = Form

    const { Password } = Input
    const loginState = reactive<IState>({ username: '', password: '', type: false })

    const handleLogin = async (): Promise<void> => {
      loginState.type = !loginState.type
      message.info(`用户名: ${loginState.username}`)
      router.push('/')
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
    }
    const handleKeyDown = (event: { keyCode: any }) => {
      if (event.keyCode === 13) {
      }
    }

    return () => (
      <Form class="login-form-style">
        {() => (
          <>
            <Item>
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
                ></Input>
              )}
            </Item>
            <Item>
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
                ></Password>
              )}
            </Item>
            <Item>
              {() => (
                <Button
                  size="large"
                  onClick={handleLogin}
                  loading={loginState.type}
                  type="primary"
                  block
                >
                  {() => '登陆'}
                </Button>
              )}
            </Item>
          </>
        )}
      </Form>
    )
  },
})

export default defineComponent({
  setup() {
    return () => (
      <div>
        <h1 class="login-title-style">系统登陆</h1>
        <Login></Login>
      </div>
    )
  },
})

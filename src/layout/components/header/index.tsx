import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { Layout, Dropdown, Menu } from 'ant-design-vue'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LogoutOutlined,
  SmileOutlined,
} from '@ant-design/icons-vue'
import './index.scss'

const { Header: ALayoutHeader } = Layout

interface IProps {
  collapsed: boolean
  handleSetCollapsed: (coll: boolean) => void
}

export default defineComponent({
  name: 'PageHeader',
  components: { ALayoutHeader },
  props: {
    collapsed: {
      type: Boolean,
    },
    handleSetCollapsed: Function,
  },
  emits: ['handle-set-collapsed'],
  setup(props, { emit }) {
    const collapsed = { ...props }
    const router = useRouter()

    const handleSetCollapsed = () => {
      emit('handle-set-collapsed')
    }

    const onMenuClick = (e: any) => {
      // 退出按钮被点击
      if (e.key === 'logout') {
        console.log('登出')
        router.push('/login')
      }
    }

    return () => (
      <a-layout-header class="basic-layout-header-wrapper" style="padding: 0 12px;">
        {collapsed ? (
          <MenuUnfoldOutlined class="head-collapsed-icon" onClick={handleSetCollapsed} />
        ) : (
          <MenuFoldOutlined class="head-collapsed-icon" onClick={handleSetCollapsed} />
        )}

        <div class="rightBox">
          {/* 个人中心 */}
          <Dropdown
            overlay={
              <Menu class="menu" selectedKeys={[]} onClick={onMenuClick}>
                <Menu.Item key="user">
                  <UserOutlined />
                  个人中心
                </Menu.Item>
                <Menu.Item key="logout">
                  <LogoutOutlined />
                  退出登录
                </Menu.Item>
              </Menu>
            }
            placement="bottomRight"
          >
            <div class="userhead all_center">
              <SmileOutlined />
              <span class="username">admin</span>
            </div>
          </Dropdown>
        </div>
      </a-layout-header>
    )
  },
})

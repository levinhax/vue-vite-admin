<template>
  <div style="width: 200px">
    <a-menu
      v-model:open-keys="openKeys"
      v-model:selected-keys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      @click="handleMenuClick"
    >
      <template v-for="item in menuList" :key="item.name">
        <sub-menu :menu-info="item" />
      </template>
    </a-menu>
  </div>
</template>

<script>
import { reactive, toRefs, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Menu } from 'ant-design-vue'
import SubMenu from './subMenuItem.vue'
import { menuData } from './constant'

export default {
  name: 'Menu',
  components: {
    'a-menu': Menu,
    'sub-menu': SubMenu,
  },
  props: {
    collapsed: {
      // 侧边栏菜单是否收起
      type: Boolean,
    },
  },
  setup(props) {
    // 当前路由
    const currentRoute = useRoute()
    const router = useRouter()
    // const menuList = ref([
    //   {
    //     key: '1',
    //     title: 'Option 1',
    //   },
    //   {
    //     key: '2',
    //     title: 'Navigation 2',
    //     children: [
    //       {
    //         key: '2.1',
    //         title: 'Navigation 3',
    //         children: [{ key: '2.1.1', title: 'Option 2.1.1' }],
    //       },
    //     ],
    //   },
    // ])
    const menuList = ref(menuData)

    // 获取当前打开的子菜单
    const getOpenKeys = () => [currentRoute.matched[1]?.name]
    const state = reactive({
      openKeys: getOpenKeys(),
      selectedKeys: [currentRoute.name],
    })

    // 监听菜单收缩状态
    watch(
      () => props.collapsed,
      newVal => {
        console.log('collapsed: ', newVal)
        state.openKeys = newVal ? [] : getOpenKeys()
        state.selectedKeys = [currentRoute.name]
      }
    )

    // 跟随页面路由变化，切换菜单选中状态
    watch(
      () => currentRoute.fullPath,
      () => {
        if (currentRoute.name == 'login' || props.collapsed) return
        state.openKeys = getOpenKeys()
        state.selectedKeys = [currentRoute.name]
      }
    )

    // 点击菜单
    // const handleMenuClick = async ({ key, keyPath }: { key: string, keyPath: string[] }): void => {
    const handleMenuClick = async ({ item, key, keyPath }) => {
      console.log(item, key, keyPath)
      state.openKeys = keyPath
      state.selectedKeys = [key]
      router.push({ name: key })
    }

    return {
      ...toRefs(state),
      menuList,
      handleMenuClick,
    }
  },
}
</script>

<template>
  <a-layout class="layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible class="layout-sider">
      <logo :collapsed="collapsed" />
      <aside-menu :collapsed="collapsed" />
    </a-layout-sider>

    <a-layout>
      <page-header v-model:collapsed="collapsed" @handle-set-collapsed="handleSetCollapsed" />
      <a-layout-content class="layout-content">
        <!-- <router-transition :not-need-key="true" :animate="false" /> -->
        <router-view></router-view>
      </a-layout-content>
      <!-- <page-footer /> -->
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { Layout } from 'ant-design-vue'
import PageHeader from './components/header'
import AsideMenu from './components/menu/index.vue'
import Logo from './components/logo'
// import PageFooter from './components/footer'
// import RouterTransition from '/@/components/routerTransition/index.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    PageHeader,
    AsideMenu,
    Logo,
    // PageFooter,
    [Layout.name]: Layout,
    [Layout.Content.name]: Layout.Content,
    [Layout.Sider.name]: Layout.Sider,
    // RouterTransition,
  },
  setup() {
    const collapsed = ref<boolean>(false)
    const asiderWidth = computed(() => (collapsed.value ? '80px' : '256px'))

    const handleSetCollapsed = () => {
      collapsed.value = !collapsed.value
    }

    return {
      collapsed,
      handleSetCollapsed,
      asiderWidth,
    }
  },
})
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  display: flex;
  height: 100vh;
  overflow: hidden;

  .layout-sider {
    max-width: 320px;
  }

  .ant-layout {
    overflow: hidden;
  }

  .layout-content {
    flex: none;
    min-height: calc(100vh - 80px);
  }
}
</style>

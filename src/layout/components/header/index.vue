<template>
  <a-layout-header class="basic-layout-header-wrapper" style="padding: 0 12px">
    <MenuUnfoldOutlined v-if="collapsed" class="head-collapsed-icon" @click="handleSetCollapsed" />
    <MenuFoldOutlined v-else class="head-collapsed-icon" @click="handleSetCollapsed" />
  </a-layout-header>
</template>

<script>
import { defineComponent } from 'vue'
import { Layout } from 'ant-design-vue'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import './index.scss'

const { Header: ALayoutHeader } = Layout

export default defineComponent({
  name: 'PageHeader',
  components: { ALayoutHeader, MenuUnfoldOutlined, MenuFoldOutlined },
  props: {
    collapsed: {
      type: Boolean,
    },
  },
  emits: ['handle-set-collapsed'],
  setup(props, { emit }) {
    // const collapsed = ref(props.collapsed)

    const handleSetCollapsed = () => {
      emit('handle-set-collapsed')
    }
    return {
      handleSetCollapsed,
    }
  },
})
</script>

<template>
  <template v-if="!menuInfo.meta.hidden">
    <a-sub-menu v-if="menuInfo.children?.length" :key="menuInfo.name" v-bind="$attrs">
      <template #title>
        <span>
          <menu-item-icon :item="menuInfo.meta" />
          <span>{{ menuInfo.meta.title }}</span>
        </span>
      </template>
      <template v-for="item in menuInfo.children" :key="item.name">
        <template v-if="!item.children">
          <a-menu-item :key="item.name">
            <menu-item-icon :item="item.meta" />
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :key="item.name" :menu-info="item" />
        </template>
      </template>
    </a-sub-menu>
    <a-menu-item v-else :key="menuInfo.name">
      <menu-item-icon :item="menuInfo.meta" />
      {{ menuInfo.meta.title }}
    </a-menu-item>
  </template>
</template>

<script>
import { defineComponent } from 'vue'
import { Menu } from 'ant-design-vue'
import MenuItemIcon from './menuItemIcon.vue'

export default defineComponent({
  name: 'SubMenu',
  components: {
    'a-sub-menu': Menu.SubMenu,
    'a-menu-item': Menu.Item,
    MenuItemIcon,
  },
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
})
</script>

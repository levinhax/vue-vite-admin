<template>
  <template v-if="!menuInfo.meta.hidden">
    <a-sub-menu v-if="menuInfo.children?.length" :key="menuInfo.name" v-bind="$attrs">
      <template #title>
        <span>
          <icon-font style="color: aliceblue" :type="menuInfo.meta.icon" :script-url="scriptUrl" />
          <span>{{ menuInfo.meta.title }}</span>
        </span>
      </template>
      <template v-for="item in menuInfo.children" :key="item.name">
        <template v-if="!item.children">
          <a-menu-item :key="item.name">
            <icon-font style="color: aliceblue" :type="item.meta.icon" :script-url="scriptUrl" />
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :key="item.name" :menu-info="item" />
        </template>
      </template>
    </a-sub-menu>
    <a-menu-item v-else :key="menuInfo.name">
      <icon-font style="color: aliceblue" :type="menuInfo.meta.icon" :script-url="scriptUrl" />
      {{ menuInfo.meta.title }}
    </a-menu-item>
  </template>
</template>

<script>
import { defineComponent, ref, h } from 'vue'
import { Menu } from 'ant-design-vue'
import iconfont from '../../../components/iconfont'

export default defineComponent({
  name: 'SubMenu',
  components: {
    'a-sub-menu': Menu.SubMenu,
    'a-menu-item': Menu.Item,
    'icon-font': iconfont,
  },
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    const scriptUrl = ref('//at.alicdn.com/t/font_2313455_zm24065hu0s.js') // 自定义icon，https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a&helptype=code

    return {
      scriptUrl,
    }
  },
})
</script>

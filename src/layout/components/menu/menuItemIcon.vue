<template>
  <icon-font
    v-if="item.icon.indexOf('icon-') === 0"
    style="color: aliceblue"
    :type="item.icon"
    :script-url="scriptUrl"
  />
  <span v-else-if="item.icon === ''"></span>
  <component :is="item.icon" v-else></component>
</template>

<script>
import { defineComponent, ref } from 'vue'
import iconfont from '../../../components/iconfont'
// import * as Icon from '@ant-design/icons-vue';
import { DashboardOutlined, MailOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'MenuItemIcon',
  components: {
    'icon-font': iconfont,
    // ...Icon
    DashboardOutlined,
    MailOutlined,
  },
  props: {
    item: {
      required: true,
      type: Object,
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

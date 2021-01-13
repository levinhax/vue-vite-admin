import { defineComponent, ref } from 'vue'
import Logo from '../../../assets/logo.png'
import './index.scss'

export default defineComponent({
  name: 'Logo',
  components: {},
  props: {
    collapsed: {
      type: Boolean,
    },
  },
  setup() {
    return () => (
      <div class="logo">
        <img src={Logo} alt="" class="logo-img"></img>
        <h2 class="title">Vue vite Back</h2>
      </div>
    )
  },
})

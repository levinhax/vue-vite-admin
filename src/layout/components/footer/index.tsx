import { defineComponent } from 'vue'
import { Layout } from 'ant-design-vue'
import { GithubOutlined, CopyrightOutlined } from '@ant-design/icons-vue'
import './index.scss'

const { Footer: ALayoutFooter } = Layout

export default defineComponent({
  name: 'PageFooter',
  components: { ALayoutFooter },
  setup() {
    return () => (
      <>
        <a-layout-footer class="page_footer">
          <div class="page_footer_link">
            <a href="https://github.com/vuejs/vue-next" target="_blank">
              vue 3.0
            </a>
            <a href="https://github.com/levinhax" target="_blank">
              <GithubOutlined />
            </a>
            <a href="https://github.com/vueComponent/ant-design-vue" target="_blank">
              {' '}
              ant-design-vue 2.0
            </a>
          </div>
          <div class="copyright">
            Copyright <CopyrightOutlined /> 2020{' '}
          </div>
        </a-layout-footer>
      </>
    )
  },
})

// import * as vue from 'vue' // 已配置插件 @vitejs/plugin-vue-jsx
import { defineComponent, ref, onMounted } from 'vue'
import { getEnv } from '../utils/env'

// const React = { createElement: vue.h, Fragment: vue.Fragment } // 已配置插件 @vitejs/plugin-vue-jsx

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  setup(prop) {
    const count = ref(0)

    onMounted(() => {
      const envVariables = getEnv()
      console.log(`Env Variables and Modes: ${envVariables}`)
    })

    return () => (
      <>
        <h1>{prop.msg}</h1>
        <button
          onClick={() => {
            count.value++
          }}
        >
          count is: {count.value}
        </button>
        <p>
          Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
        </p>
      </>
    )
  },
})

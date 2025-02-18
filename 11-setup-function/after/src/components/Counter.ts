import { ref, defineComponent, computed, h } from 'vue'
import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default defineComponent({
  props: {
    msg: { type: String, required: true },
  },
  setup() {
    const count = ref(0);
    const inc = () => count.value++;
    return { count, inc }
  },

  render(_ctx: any, _cache: any, $props: any, $setup: any, $data: any, $options: any) {
    return (_openBlock(), _createElementBlock("p", null, [
        _createTextVNode(" Wow = " + _toDisplayString(_ctx.count) + " ", 1 /* TEXT */),
        _createElementVNode("button", { onClick: _ctx.inc }, "+1", 8 /* PROPS */, ["onClick"])
    ]))
  }
})


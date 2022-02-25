import { Directive } from 'vue'
export const onlyNumber: Directive = {
  beforeMount(el: any, binding: any, vnode: any) {
    const input = el.children[0];
    var reg = /[^\d]/g;
    if (binding.arg) {
      input.maxLength = binding.arg;
    }
    if (binding.value) {
      reg = binding.value;
    }
    input.oninput = function () {
      this.value = this.value.replace(reg, '');
      if (vnode.dirs[0].instance) { // 手动触发双向绑定
        vnode.dirs[0].instance.$emit('input', this.value);
      } else {
        vnode.elm.dispatchEvent(new CustomEvent('input', this.value));
      }
    };
  },
}

export default {
  install: (Vue, options = {}) => {
    Vue.directive(options.name || 'ref', {
      bind: function (el, binding, vnode) {
        binding.value(vnode.componentInstance || el, vnode.key)
      },
      update: function (el, binding, vnode) {
        binding.value(vnode.componentInstance || el, vnode.key)
      },
      unbind: function (el, binding, vnode) {
        if(!el.parentNode && !el.parentElement) {
          binding.value(undefined, vnode.key)
        }
      },
    })
  },
}

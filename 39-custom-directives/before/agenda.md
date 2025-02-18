# Custom Directives

1. What is a directive

```
const vMyDirective = {
  // called before bound element's attributes
  // or event listeners are applied
  created(el, binding, vnode) {
    // see below for details on arguments
  },
  // called right before the element is inserted into the DOM.
  beforeMount(el, binding, vnode) {},
  // called when the bound element's parent component
  // and all its children are mounted.
  mounted(el, binding, vnode) {},
  // called before the parent component is updated
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // called after the parent component and
  // all of its children have updated
  updated(el, binding, vnode, prevVnode) {},
  // called before the parent component is unmounted
  beforeUnmount(el, binding, vnode) {},
  // called when the parent component is unmounted
  unmounted(el, binding, vnode) {}
}
```

2. Example: vShowOnHover

3. Register directive globally

```
createApp(App)
.directive('showOnHover', vShowOnHover)
.mount('#app')
```

4. Your turn
    - Create 2 more components which use our new directive
    - Create a new directive `v-debug` that prints a `console.log` in each of the hooks of the directive with the hook's parameters. 
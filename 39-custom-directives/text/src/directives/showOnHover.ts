import { Directive } from 'vue'

const vShowOnHover: Directive = {
  mounted(el) {    
    el.showOnHover = {
      originalTextColor: window.getComputedStyle(el).color,
      show() {
        el.style.color = el.showOnHover.originalTextColor;
      },
      hide() {
        el.style.color = 'transparent';
      },
      destroy() {
        el.removeEventListener('mouseenter', el.showOnHover.show);
        el.removeEventListener('mouseleave', el.showOnHover.hide);
      }
    }    
    el.showOnHover.hide();
    el.addEventListener('mouseenter', el.showOnHover.show);
    el.addEventListener('mouseleave', el.showOnHover.hide);
  },

  unmounted(el) {
    el.showOnHover.destroy();    
  }
}

export default vShowOnHover;

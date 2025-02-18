import { Directive } from 'vue'

const vShowOnHover: Directive = {
  mounted(el, {value}) {    
    el.showOnHover = {
      originalTextColor: window.getComputedStyle(el).color,
      originalBackgroundColor: window.getComputedStyle(el).backgroundColor,
      show() {
        el.style.color = el.showOnHover.originalTextColor;
        el.style.backgroundColor = el.showOnHover.originalBackgroundColor;
      },
      hide() {
        el.style.color = 'transparent';
        el.style.backgroundColor = value || el.showOnHover.originalBackgroundColor;
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

  updated(el, {value}) {
    el.style.backgroundColor = value || el.showOnHover.originalBackgroundColor;
  },

  unmounted(el) {
    el.showOnHover.destroy();    
  }
}

export default vShowOnHover;

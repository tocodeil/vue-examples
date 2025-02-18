import { Directive } from "vue";

export default {
    mounted(el: any, {value}) {    
      console.log(`mounted`);
      el.showOnHover = {
        show() {
          el.style.color = el.showOnHover.originalColor;
        },
        hide() {
          el.style.color = el.showOnHover.hideColor;
        }
      };
      el.showOnHover.hideColor = value;
      el.showOnHover.originalColor = window.getComputedStyle(el).color
      
      el.addEventListener('mouseenter', el.showOnHover.show)
      el.addEventListener('mouseleave', el.showOnHover.hide)
      el.showOnHover.hide();
    },
    unmounted(el: any) {
      console.log(`unmounted`);
      el.removeEventListener('mouseenter', el.showOnHover.show);
      el.removeEventListener('mouseleave', el.showOnHover.hide);
    },
    updated(el: any, {value}) {
      console.log(`updated`);
      el.showOnHover.hideColor = value;
      el.showOnHover.originalColor = window.getComputedStyle(el).color
    }
  } as Directive
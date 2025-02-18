export default {
    mounted(el: any) {    
      console.log(`mounted`);
      el.showOnHover = {
        show() {
          el.style.color = el.showOnHover.originalColor;
        },
        hide() {
          el.style.color = 'transparent'
        }
      };
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
    updated(el: any) {
      console.log(`updated`);
      el.showOnHover.originalColor = window.getComputedStyle(el).color
    }
  }
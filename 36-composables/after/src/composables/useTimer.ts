import {ref, onMounted, onUnmounted} from 'vue';

export default function useTimer(ms = 1000) {
    let timer: any;
    const ticks = ref(0);

    onMounted(() => {
      timer = setInterval(() => {
        ticks.value++;
      }, ms);
    });
    
    onUnmounted(() => {
      if (timer) {
        clearInterval(timer);
      }
    })

    return ticks;
}

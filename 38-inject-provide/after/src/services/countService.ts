import {ref, provide, readonly} from 'vue';
import type { InjectionKey } from 'vue';

export const CountServiceKey = Symbol() as InjectionKey<ReturnType<typeof createCountService>>;

export default function createCountService() {
    const count = ref(0);

    function inc() {
        count.value++;
    }
    provide(CountServiceKey, {count: readonly(count), inc});
    return {count: readonly(count), inc};
}

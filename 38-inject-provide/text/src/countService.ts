import { InjectionKey, Ref, readonly } from "vue";

export type CountService = {
  inc: () => void,
  value: Ref<number>,
};

export const countServiceKey = Symbol() as InjectionKey<CountService>;

export default (value: Ref<number>) => ({
  inc: () => value.value++,
  value: readonly(value),
});

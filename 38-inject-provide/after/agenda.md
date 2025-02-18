# Inject / Provide

1. Prop Drilling Example
https://tinyurl.com/4hdwrntr

2. Problems with Prop Drilling

3. Solution: Provide / Inject
    - Top component "provide"
    - Bottom component "inject"

4. Counter example
    - Move counter logic to another file
    - Create "ref" in top component
    - provide count ref to children
    - inject count to share `count` value
    - use InjectionKey for type safety
    export const countServiceKey = Symbol() as InjectionKey<CountService>;

5. Your turn
    - Update the code to create 3 groups of counters,
      each group holds a shared count value


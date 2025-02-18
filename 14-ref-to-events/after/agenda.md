# Convert Reactive Data To Events

1. Why

2. How - `watch` function
    watch(reactiveData, () => {
        // data changed
    })

    watch(() => reactiveData, () => {
        // data changed
    })

    watchEffect(() => {
        if (text.value === 'secret') {
            emit('win');
        }
    })

3. Demo: TextboxWithTarget

4. Your turn
    - Write a component that shows 2 <input />. Also show a message if the text in both inputs is equal. Use `v-if`.

    - Write a component that shows 2 <input />, this time emit an event when the text is equal and another event when the text is different. Catch the events from an upper component and show a message from there.
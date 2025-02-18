# Slots

1. Review starter code List.vue

2. What if we wanted to style the <li> differently? 
   Or add an emoji after some items?
   Or connect "click" events to some handler in App.vue ?

3. Solution - slots
    - Create a default slot with default value <li>
    - Pass item to the slot
    - Pass props from the `List` to the `item`

4. Your turn
    - Create the list as `ref([...])` and use <input /> with `v-model` to modify the items
    - Show the list with `JSON.stringify()` to prove changes cause the data to change


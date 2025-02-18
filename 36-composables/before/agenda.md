# Composition API

1. Starter code
    - NewsTicker.vue
    - Timer.vue

2. Extract common code to a function - composable

3. Compose the common behaviour to both components

4. Your turn
    - Create a component of image carousel. Change main image every x ms
    - Create a function named "useWindowSize" that returns 2 reactive objects: width and height. 
    These objects hold the values of `window.innerHeight` and `window.innerWidth`, and updated on resize events.
    Don't forget to clean up the event handler.

    - Create a component that uses `useWindowSize` to show the current window size.

    - Check out
    https://vueuse.org/functions.html
    and find interesting APIs


# Classes & Style

1. Class / Style as object
    - Demo: ImageGallery active thumbnail class
    - Header style

2. Class / Style as array

3. Passthrough props
    - Single root component
    - Multiple root component with v-bind="$attrs"

4. How scoped style works in the browser

5. Your turn
    - Update the code so if image index 2 is active the main image will also have `bw` class
    - Update <Counter /> to have class "even" when the value is even,
      and "odd" when the value is odd
    - Update <App /> and add it the following style block:

    ```
    <style scoped>
    .even {font-size: 20px}
    </style>
    ```
    Does the style rule affect <Counter /> ? Why? Suggest a way to define it only in <App />
    
# VDom

1. What is VDOM

<script>
const count = ref(1);
</script>

<template>
	<p>Hello {{count}}</p>
	<button>Click Here</button>
</template>
=> Render function -> Virtual DOM

2. How vue converts template to render function
	- https://template-explorer.vuejs.org/
	
3. Your turn
	- Take 3 templates we wrote in previous lessons and convert them to render functions
	- See what parts are cached and what happens to the reactive data
	

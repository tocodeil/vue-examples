# Select Country & City

1. Write a custom Select component
	- It's called FancySelect
	- It takes current value and list of options
	- It emits a "change" event
	- In the future we'll replace the interface with v-model
	
2. Use FancySelect from App.vue to show 2 select boxes for country and city selection
	- When country changes, reset city select
	- List of cities is a computed value (depends on current country)

3. Let's break things
	- Modify the code so every time a user changes country, a random city from that country is selected
	- fix the bug with "watch"
	
4. Your turn
	- Add a "Reset" button that resets both select boxes
	- The attribute "multiple" marks the select as multi select. Set it on the city and see what happens when you select multiple cities.
	- Replace our FancySelect with vue-select:
	https://vue-select.org/
	

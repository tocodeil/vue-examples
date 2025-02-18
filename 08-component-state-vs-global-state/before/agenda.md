# Component State, Subtree State and Global State

1. Component State
	- Counter component
	- ref inside component
	- Each has its own value
	
2. Subtree State
	- step is shared to all counters
	- CounterGroup component
	- pass state down as props
	
3. Global State
	- language is shared in all components
	- language.ts defines the global language settings
	- components import global reactive variables
	
4. When to use Each

5. Your turn
	- In <Counter /> Change "count" to global state
	- Add another language
	- Change language from global state to subtree state to component state
	

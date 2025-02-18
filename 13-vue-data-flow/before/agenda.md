# Props down, Events Up

1. Demo: Can't change reactive variable via props

2. Solution: Events
	defineEmit(['select']);
	emit('select', ...)
	
3. Your Turn
	- Create a <CounterGroup> that shows max value 
	  of the counters
	  
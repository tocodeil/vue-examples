# Example: Max counter in group

1. Save all states in top level component
    - Create a <CounterGroup /> component with an array of counts
    - Pass to each Counter its relevant value
    - When user clicks, emit an event and update the value in <CounterGroup />

2. Save only max in top level component
    - Create a <CounterGroup /> component with max value
    - When a <Counter /> increases, emit an event with its new value and its id
    - Save max value and max id in top level component

3. Which one should you use

4. Your turn
    - Update <CounterGroup /> to take size as prop
    - What happens when multiple counters have max value? Modify the code (in both solutions) so that if multiple different counters have the same max value no counter should be green.
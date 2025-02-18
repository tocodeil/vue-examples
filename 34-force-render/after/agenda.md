# Update Types

1. Update `server.js` to not save the updated task

2. Explanation - vue "check" event vs :checked ref

3. Better implementation: Passimistic updates
    - uncheck checkbox after "checked" event
    - check it back only after server responded with updated data

4. Better implementation: Optimistic updates
    - modify vue query cache with the expected change
    - if server returns different answer, update the UI



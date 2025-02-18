# Vue Query Mutations

1. Starter Code Review
    - Server side
    - Queries
    - Components

2. Get todos from server

3. Create new task

```
  const {mutate: addTodoMutation} = useMutation({
    mutationFn: createTodo,
    onSettled: (data, variables, context) => {
        queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  })
```

4. Update task "done" status
    - useMutation: https://tanstack.com/query/latest/docs/framework/react/reference/useMutation#usemutation

    - connect mutation to checkbox "update" event

5. Update task "text"

6. Create new "task"

7. Your turn
    - Implement "Delete task"
    - Try to update server code so it won't save our changes.
      What do you expect should happen? What happened?
      Try to think why, and we'll talk about this in the next lesson
      
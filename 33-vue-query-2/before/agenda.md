# Vue Query Mutations

1. Starter Code Review
    - Server side
    - Queries
    - Components

2. Get todos from server

3. Update task "done" status
    - useMutation: https://tanstack.com/query/latest/docs/framework/react/reference/useMutation#usemutation

    ```
    useMutation({
        mutationFn: addTodo,
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
        onError: (error, variables, context) => {},
    })
    ```
    - connect mutation to checkbox "update" event

4. Update task "text"

5. Create new "task"

6. Your turn
    - Implement "Delete task"
    - Try to update server code so it won't save our changes.
      What do you expect should happen? What happened?
      Try to think why, and we'll talk about this in the next lesson
      
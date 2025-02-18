# Vue Query - part 1

0. The need for vue-query
    - problems with fetch on mount
    
    Component <---> Cache <-----> Network Code

1. Install the dependency
    - npm i @tanstack/vue-query

    - Update main.ts

    ```
    import { VueQueryPlugin } from '@tanstack/vue-query'

    createApp(App)
    .use(VueQueryPlugin)
    .mount('#app')
    ```

2. Write query
    - get character from swapi.dev in file `queries/swapi.ts`

3. Use the query in component
    ```
    const { status, data, error } = useQuery({
        queryKey: ['character', 1],
        queryFn: ({ queryKey }) => getCharacter(queryKey[1])
    })
    ```

4. Change query key to get different items
    ```
    const { status, data, error } = useQuery({
        queryKey: computed(() => ['character', id]),
        queryFn: ({ queryKey }) => getCharacter(queryKey[1])
    })
    ```

5. Error Handling
    - What happens on HTTP 404
    - Throw error
    - Set retry count

6. Your Turn
    - Create a component named <Film> to get film info
    - Update <Character /> to show <Film /> in the list of films
# List with Delete Many

1. Create list of items with ids
    - crypto.randomUUID

2. Create a MultiSelectDelete component
    - Show list of items
    - Allow selection
    - Save "selected" in the item (i.e. create a new "ref" with the data from App.vue AND selection status)
    - Add "Delete selected" button

4. Your Turn
    - Modify <App /> so the list is a "ref" 
    - What happens when new items are added to <App /> from within <App /> ? (for example add a button to add a new item)
    - Fix the code in <MultiSelectDelete />
    - Modify the code so the list is received as "v-model", 
      and modified from within <MultiSelectDelete /> when items are deleted.
    - Show another <MultiSelectDelete /> with the same list and verify the two are synchronized
    
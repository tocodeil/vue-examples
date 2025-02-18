# Component v-model 

1. Props + Change Event => v-model

2. Example: Phone Number Editor
    - defineModel<string>

3. Writable computed

```
const number = ref('052-2292123');
const prefix = computed({
  get() {
    return number.value.substring(0, 3);
  },
  set(newValue) {
    number.value = newValue + '-' + number.value.substring(4, 11);
  }
});

```

4. Your turn
    - Add phone prefixes "03", "04", ...
    - Pass the prefix list from App.vue as optional param
    - Pass a second boolean model

5. Tip: Pass another boolean v-model named "valid" and set it
to true / false from within the component based on the number's validity.

```
const valid = defineModel('valid')
```

```
<PhoneNumber v-model="number" v-model:valid="valid" />
```
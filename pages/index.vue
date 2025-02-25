<template>
   <div>
      <banner/>

      <br> 
      <options-api/>
      <br>
      <composition-api/>
      <br>

      <h2>recent Notes: {{foo}} </h2>
      {{ $hello('nuxt!') }}
      {{ $consolelt(foo) }}
      <NoteCard/>
      <br>
      <p> {{data.hello}}</p>

      <ChildComponent :message="dynamicValue" @update="handleUpdate" />
   </div>

</template>

<script setup>

const dynamicValue = ref('Hello from Parent Component !');

const foo = useFoo()
const { $hello, $consolelt } = useNuxtApp();
console.log('useNuxtApp():', useNuxtApp());
const handleUpdate = (value) => {
    // dynamicValue.value = value;
    console.log('handle update:', value);
};

// console.log('useNuxtApp():', useNuxtApp());

const {data}=await useFetch('/api/hello');

</script>

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
   </div>
</template>

<script setup>
const foo=useFoo()
const { $hello, $consolelt } = useNuxtApp()
// console.log('useNuxtApp():', useNuxtApp());
const {data}=await useFetch('/api/hello')
</script>

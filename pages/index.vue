<template>
   <div>
    <banner/>
    <h2>recent Notes: {{foo}} </h2>
    <NoteCard/>
   </div>
</template>

<script setup>
const foo=useFoo()
cosnt {$hello}=useNuxtApp()
console.log('useNextApp():', useNuxtApp());
</script>

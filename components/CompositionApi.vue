<template>
<div>
    <h1> {{title}} </h1>
    <h4>Function : {{hello()}} </h4>

</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const title = ref('Composition API')
const hello=()=>{
    return 'Hello from Composition API'
}

onMounted(()=>{
    setTimeout(()=>{
        title.value='Composition API (Updated)'
    },1000)
})

</script>


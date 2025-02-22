<template>
<div>
    <h1>About</h1>
    <button @click="enableLayout()">Update Layout</button>
</div>    
</template>

<script setup>
definePageMeta({
    layout: false,
    middleware:[function (to,from){console.log('In page middleware!')}]
})

function enableLayout(params) {
    setPageLayout('custom')
}
</script>

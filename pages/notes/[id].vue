<template>
    <div>
        <h1>{{$route.params.id}}</h1>
        <button @click="copyUrl">Copy URL</button>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'custom'
})

const {copyToClipboard}=useClipboardCopy()

const copyUrl=()=>{
    copyToClipboard(window.location.href)
}
</script>
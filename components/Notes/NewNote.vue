<template>
    <div>
        <input v-model="newNote" v-focus type="text" placeholder="Type New note ..."/>
        <h1> {{newNote}} </h1>
    </div>
</template>

<script setup>
const newNote= ref('');

const vFocus = {
    mounted: (el) => el.focus()
};

</script>
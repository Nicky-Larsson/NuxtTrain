<template>
    <div>
        <h1>Notes simple</h1>
        <!--
        <NewNote/>
        <br>
        <NoteCard/>
        <br>
        -->

        <button @click="showModal=!showModal">Add New {{ showModal }}</button>
        <br>
        <div id = "flex">
            <component :is="showModal ? newNote : noteCard"/>
            <component :is="showModal ? newNote : noteCard"/>
            <component :is="showModal ? newNote : noteCard"/>
        </div>
        
        
        <br>
        <br>
    </div>
</template>

<script setup>
    const showModal = ref(true)
    const newNote   = resolveComponent('NewNote')
    const noteCard  = resolveComponent('NoteCard')
</script>


<style>
.flex{
    display: flex;
}
</style>
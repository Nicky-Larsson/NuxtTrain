<template>
  <div>
    <nuxt-link to="/about"> About </nuxt-link>
    <br>
    <nuxt-link to="/notes"> Notes </nuxt-link>
    <br>
    <nuxt-link to="/"> Home </nuxt-link>
    <br>
    <nuxt-link v-bind:to="`/notes/${randomNumber()}`">Notes by id</nuxt-link>
    <br>

    <slot/>
  </div>
</template>

<script setup>

const randomNumber=()=>{
    // return Math.floor(Math.random() * 100) + 1
    return useState(() => Math.floor(Math.random() * 100) + 1).value
}

</script>

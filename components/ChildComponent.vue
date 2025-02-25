<template>
<div>
    <p>this is Child Component</p>
    <p> {{message}} </p>
    <button @click="sendUpdate">Click me</button>
  </div>
</template>

<script setup>

    const emit = defineEmits(['update']);
    const props = defineProps({
        message: {
            type: String,
            required: 'this is a default value !'
        }
    });

    const sendUpdate = () => {
        emit('update', 'Hello from Child Component !');
    };

</script>
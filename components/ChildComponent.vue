<template>
<div>
    <p>this is Child Component</p>
    <p> {{message}} </p>
    <button @click="sendUpdate">Click me</button>
  </div>
</template>


<script setup  lang='ts'>
    const emit = defineEmits(['update']);

    interface Props {
        message: string;
    }

    const props = defineProps<Props>();
    
    /* const props = defineProps({
        message: {
            type: String,
            required: 'this is a default value !'
        }
    }); */
    
    const sendUpdate = () => {
        emit('update', 'value from Child');
    };
</script>
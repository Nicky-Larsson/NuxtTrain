<template>  
<div>   
    <button @click="showNodal = !showNodal">Show Modal Transport</button>
    <teleport to="body">
        <div v-if="showNodal" class="modal">
        <div>
            <h1>This is Modal  transport</h1>
            <button @click="showNodal = !showNodal">Close Modal</button>
        </div>
        </div>
    </teleport>
    <br>
    <br>




</div>

</template>


<script setup>

const showNodal = ref(false);

</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0ch 10ch rgba(0, 0, 0, 0.5);
}

</style>


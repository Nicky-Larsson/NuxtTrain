<template>
   <div>
      <ChildComponent message="Hello from Parent Component !"/>
      <br>
      <banner/>

      <br> 
      <options-api/>
      <br>
      <composition-api/>
      <br>

      <h2>recent Notes: {{foo}} </h2>
      {{ $hello('nuxt!') }}
      {{ $consolelt(foo) }}
      <NoteCard/>
      <br>
      <p> {{data.hello}}</p>

      <ChildComponent :message="dynamicValue" @update="handleUpdate" />
      <br>

      <ChildSlotComponent>
         <template v-slot:header="slotProps">   
            <br>
            <ChildComponent :message="slotProps.value"  @update="handleUpdate" />
         </template>

         <template v-slot:default="slotProps">
            <h1>{{slotProps.mainSlotValue}}</h1>
         </template>

         <template v-slot:footer="slotProps">
            <h1>Footer Section</h1>
            <h1>{{slotProps.message}}</h1>
         </template>
      </ChildSlotComponent>
      <!--
      -->
      <br>
      <br>

      <teleportComponent/>
      <br>
      <br>
      <transition>
         <p v-if="show"> hello nuxt </p>
      </transition>
      
      <transition name="fade">
         <p v-if="show"> hello named transition </p>
      </transition>

      <br>
      <button @click="show = !show">toggle</button>
      <br>


   </div>

</template>

<script setup>

   const dynamicValue = ref('Hello from Parent Component !');
   const show = ref(true);

   const foo = useFoo()
   const { $hello, $consolelt } = useNuxtApp();
   console.log('useNuxtApp():', useNuxtApp());
   const handleUpdate = (value) => {
      // dynamicValue.value = value;
      console.log('handle update:', value);
   };

   // console.log('useNuxtApp():', useNuxtApp());
   const {data}=await useFetch('/api/hello');

</script>

<style>
   .v-enter-active, .v-leave-active {
      transition: opacity 0.5s ease;
   }

   .v-enter-from, .v-leave-to {
      opacity: 0;
   }

   .fade-enter-active, .fade-leave-active {
      transition: opacity 0.5s ease;
   }

   .fade-enter-from, 
   .fade-leave-to {
      opacity: 0;
   }

</style>>


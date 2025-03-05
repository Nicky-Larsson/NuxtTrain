<template>
  <div>
    <header>
      <slot name="header" :value="headerValue">Default Header</slot>
    </header>
    <main>
      <slot :mainSlotValue="mainValue">Default Main</slot>
    </main>
    <footer     >
      <slot name="footer" :message="footerValue">Default Footer</slot>
    </footer>
  </div>
</template>

<script setup>
    // import { ref } from 'vue';
    const headerValue = ref('this value is from slots Component Header !');
    const mainValue = ref('Main section');
    const footerValue = ref('This Value is from Slots Component for FOOTER');
</script>

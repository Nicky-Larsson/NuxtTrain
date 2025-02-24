 <template>
    <div>
        <h1 v-bind:class="isRed ? 'isRed' : 'isGreen'" v-debug>
        Welcome to Out Notes App! Banner
        </h1>
        <h1> Full Name : {{ fullName }} </h1>
        <h1>{{ isFive + 5 }}</h1>
        <button @click="firstName= 'Jack'">Update</button>

        <button @click="increment()">Increment</button>
        <button @click="greet('Salam Alikoum')">greeting</button>
        <br>
        <img v-bind:src="imgSrc" width="100" />

        <h1>Count : {{ count }}</h1>
    </div>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue';

    const firstName = ref('John');
    const lastName = ref('Doe');
    const fullName = computed(() => `${firstName.value}  ${lastName.value}`);

    const isRed = ref(true);
    const isFive = ref(5);
    const count = ref(0);

    function increment() {
    count.value++;
    }

    function greet(message:string) {
    alert(message);
    }

    const imgSrc = ref(
    "https://s5o.ru/storage/simple/cyber/edt/e0/09/43/3a/cyberef5f41a852e.jpg"
    );
</script>


<style scoped>
.isRed {
  color: red;
}
.isGreen {
  color: green;
}
img {
  border-radius: 50%;
}
h1 {
  font-size: 2rem;
}
</style> >



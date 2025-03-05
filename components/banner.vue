 <template>
    <div>
        <h1 v-bind:class="isRed ? 'isRed' : 'isGreen'" v-debug>
        Welcome to Out Notes App! Banner
        </h1>

        <button @click="isRed = !isRed">Toggle Color</button>



        <h1> Full Name : {{ fullName }} </h1>
        <h1>{{ isFive + 5 }}</h1>
        <button @click="firstName= 'Jack'">Update</button>
        <button @click="fullName= 'Jack Rock'">Update Full</button>
        <button @click="increment()">Increment</button>
        <button @click="greet('Salam Alikoum')">greeting</button>
        <br>
        <img v-bind:src="imgSrc" width="100" />
        <h1>Count : {{ count }}</h1>

        <button @click="isWelcomeVisible = !isWelcomeVisible">Toggle Welcome</button>
        <button @click="isRed = !isRed">change Color</button>

        {{isWelcomeVisible}}

        <h1 v-if="isWelcomeVisible" :class="isRed ? 'isRed' : 'isGreen'" v-debug>
             Welcome to out Notes App!
        </h1> 

        <h1 :class="isRed ? 'isGreen' : 'isRed'" v-debug>
             Mré7babik fTatbi9 V2
        </h1>

        <button @click="status = 'loading'">Loading</button>
        <button @click="status = 'error'">error</button>
        <button @click="status = 'success'">success</button>

        <p v-if="status === 'loading'">Loading...</p>
        <p v-else-if="status === 'error'">Error!</p>
        <p v-else-if="status === 'success'">Success!</p>
        <p v-else>Idle</p>

        <p v-show="status === 'loading'">Loading...</p>
        <p v-show="status === 'error'">Error!</p>
        <p v-show="status === 'success'">Success!</p>
        <p v-show="status === 'idle'">Idle</p>


        <ul>
        <li v-for="(item,idx) in items" :key="item" @click="showAlert(item)">
                {{ item }} -- index:{{ idx }} 
            </li>
        </ul>

        <ul>
            <li v-for="(value, key, index) in user" :key="key">
                {{ key }}: {{ value }} -- index:{{ index }}
            </li>

        </ul>


    </div>
</template>

<script setup lang="ts">
    import { computed, reactive, ref, onBeforeMount, onBeforeUnmount, onUnmounted, onMounted, onBeforeUpdate, onUpdated, watch } from 'vue';

    // hooks and lifecycle
    const isRed = ref(false);
    
    /*

    onBeforeMount(() => {
        alert('Before Mount');
    });

    onMounted(() => {
        alert('Mounted');
    });

    onBeforeUpdate(() => {
        alert('Before Update');
    });

    onUpdated(() => {
        alert('Updated');
    });

    onBeforeUnmount(() => {
        alert('Before Unmount');
    });

    onUnmounted(() => {
        alert('Unmounted');
    });


    watch(isRed, (newValue, oldValue) => {
        alert(`New Value is: ${newValue}, oldValue was: ${oldValue}`);
    });

    watch(
        () => isRed.value,
        (newValue, oldValue) => {
            alert(`New Value is: ${newValue}, oldValue was: ${oldValue}`);
        },
        { immediate: true,
          deep: true,
          once: true,
          
         }
    )
    */

    const items = ref(['Apple', 'Banana', 'Cherry']);

    const user = reactive({
        name: 'John Doe',
        age: 25,
        emaol: 'test@mail.com'
    });



    const showAlert = (item: string) => {
        alert(item);
    };

    // const isRed = ref(false);
    const status = ref('idle');
    const isWelcomeVisible = ref(true);
    const firstName = ref('John');
    const lastName = ref('Doe');
    // const fullName = computed(() => `${firstName.value}  ${lastName.value}`);

    const fullName = computed({ 
        get() {
            return `${firstName.value}  ${lastName.value}`
        },
        set(value) {
            const names = value.split(' ');
            firstName.value = names[0];
            lastName.value = names[1];
        }
    });

  

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



<template>
<div>
    <h1> {{title}} </h1>
    <h4>Function : {{hello()}} </h4>
</div>
</template>

<script>
export default {
    data(){
        return{
            title:'Options API'
        }
    },
    methods:{
        hello(){
            return 'Hello from Options API'
        }
    },
    mounted(){
        setTimeout(()=>{
            this.title='Options API (Updated)'
        },1000)
    }
}
</script>


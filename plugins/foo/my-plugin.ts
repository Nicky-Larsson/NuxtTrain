export default defineNuxtPlugin((NuxtApp)=>{
    console.log('NuxtApp', NuxtApp);
    return{
        provide:{
            hello:(msg:string)=> `Hello ${msg}`,
            consolelt:(data:string)=> console.log('consolelt', data)
        }
    }
})
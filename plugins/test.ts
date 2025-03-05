export default defineNuxtPlugin(( {vueApp} )=>{
    console.log("vueApp : ",vueApp);
    vueApp.directive('debug', {
        mounted: (el) => console.log('debug-->', el.innerHTML)
        });
    });
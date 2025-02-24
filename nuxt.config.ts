// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  components:[
    {
      path:'~/components',
      pathPrefix: false
    }
  ]
 , 
  hooks:{
    'pages:extend'(pages){
      function setMiddleware(pages:any){
        for (const page of pages) {
          if(page.path==='/notes') {
            page.meta||={}
            page.meta.middleware=['named']
          }
        }
      }
      setMiddleware(pages)
    }
  },

  imports:{
    dirs:[
      'composables',
      'composables/**',
    ]
  },

  plugins: [
    '~/plugins/foo/my-plugin',]
})

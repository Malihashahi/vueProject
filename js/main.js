Vue.createApp(
  {  
     data(){
        return{
           title : 'webpage',
           boolean : true,
           obj: {
             name :'maliha shahi'
           },
           array :['mliha ','bahar'],
           fun :() =>{
             return 'start vue.js'
           }
        }
     }
   }
).mount('#app');
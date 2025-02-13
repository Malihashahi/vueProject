Vue.createApp(
  {  
     data(){
        return{
        
        }
     },
     
     methods:{
       button(){
         console.log(this.$refs.title.style.color='red')
       }

     }
    
   }
).mount('#app');
Vue.createApp(
  {  
     data(){
        return{
        name : 'bahar'
        }
     },
     methods:{
        update(event,name){
            
               this.name =name
               console.log(name,event)
        }
     }
   }
).mount('#app');
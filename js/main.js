Vue.createApp(
  {  
     data(){
        return{
         name :'',
         active: false
        }
     },
     watch:{
       active(value){
         console.log(value)
       }
     },
     computed:{
          isActive(){
              console.log('uppercase !!')
              return this.active ? 'Active' : 'not Active'
      }
     },
     methods:{
       upperCase(){
          console.log('uppercase !!1')
           return this.name.toUpperCase()
      },
      toggleActive(){
         this.active = !this.active
      }
      

     }
    
   }
).mount('#app');
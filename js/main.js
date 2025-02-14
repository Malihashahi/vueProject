Vue.createApp(
  {  
     data(){
        return{
         name :'nargis'

        }
     },
     
     methods:{
      updateName(){
        this.name ='bahar'
      }

     },
     beforeCreate(){
        console.log('Running before create')
     },
     created(){
      console.log('running created')
     },
     beforeMount(){
      console.log('running before mount')
     },
     mounted(){
      console.log('running mounted')
     },
     beforeUpdate(){
      console.log('running before update')
     },
     updated(){
      console.log('running  updated')
    
     }
    
   }
).mount('#app');
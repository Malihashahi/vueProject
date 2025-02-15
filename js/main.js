Vue.createApp(
  {  
     data(){
        return{
          formData:{
             name : '',
              message : ''
          }
        }
        
     },
     
     methods:{
      submitForm(){
         console.log(this.formData)
      }

    
   }}
).mount('#app');
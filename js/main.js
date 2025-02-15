Vue.createApp(
  {  
     data(){
        return{
          formData:{
             name : '',
              message : '',
              checkbox : [],
              radio : [],
              
          }
        }
        
     },
     
     methods:{
      submitForm(){
         console.log(this.formData)
      }

    
   }}
).mount('#app');
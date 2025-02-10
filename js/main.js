Vue.createApp(
  {  
     data(){
        return{
        name : 'bahar'
        }
     },
     methods:{
        update(){
            setTimeout(() => {
               this.name ='maliha'
            }, 2000);
        }
     }
   }
).mount('#app');
Vue.createApp(
   {   
       template:`
       <div><h1>hello from template{{name}}</h1></div>
       
       ` ,

       data() {
           return {
           name: 'Maliha Bahar'
           }
       }
   }
).mount('#app');
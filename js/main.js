Vue.createApp(
  {  
     data(){
        return{
          src :'https://picsum.photos/200/300/?blur=2',
          alt :'test text',
          href: 'https://vuejs.org/guide/introduction.html',
          text :'this v-text',
          html : '<strong>google.com</strong>'

          
        }
     }
   }
).mount('#app');
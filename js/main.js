import Home from "../components/Home.vue";


const app = Vue.createApp(
    {
        // components:{
        //     Home
        // },
        template: `
            <div> <h1>Name : </h1> </div>
            <Home />
        `,
        data() {
            return {
            }
        }
    }
);
app.component('Home' , Home);
app.mount('#app')
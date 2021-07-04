import VueRouter from 'vue-router' 
import Vue from 'vue' 
import Home from './views/home/Home.vue'
import Contact from './views/contact/Contact.vue'

var routes = [
   { path: '/', name: 'Home', component: Home},
   { path: '/contact', name: 'Contact', component: Contact},
];

Vue.use(VueRouter)
const router = new VueRouter({ routes});

export {
    router, routes
}

import Vue from 'vue';
import VueRouter from 'vue-router';

// STATIC PAGES
import Contact from '../views/Contact.vue';
import Policy from "../views/Policy.vue";
// DYNAMIC PAGES
import Home from '../views/Home.vue';
import Shop from '../views/Shop.vue';
import User from '../views/User.vue';
import Product from "../views/Product.vue";
import Cart from "../views/Cart.vue";

import Login from "../views/Login.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/account',
    name: 'User',
    component: User
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/policy',
    name: 'policy',
    component: Policy
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

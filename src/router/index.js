import Vue from 'vue';
import VueRouter from 'vue-router';

// STATIC PAGES
import Contact from '../views/Contact.vue';
import Policy from "../views/Policy.vue";
// DYNAMIC PAGES
import Login from "../views/Login.vue";
import Home from '../views/Home.vue';
import Shop from '../views/Shop.vue';
import User from '../views/User.vue';
import Product from "../views/Product.vue";
import Cart from "../views/Cart.vue";
// ADMIN
import AdminDisplayUsers from "../views/AdminVues/getUsers.admin.vue";
import AdminDisplayProducts from "../views/AdminVues/getProducts.admin.vue";
import AdminEditUser from "../views/AdminVues/EditUser.admin.vue";

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
  },
  {
    path: '/Admin/users/all',
    name: 'AdminDisplayUsers',
    component: AdminDisplayUsers
  },
  {
    path: '/Admin/products/all',
    name: 'AdminDisplayProducts',
    component: AdminDisplayProducts
  },
  {
    path: "/Admin/users/edit/:id",
    name: "AdminEditUser",
    component: AdminEditUser
  }
]

const router = new VueRouter({
  routes
})

export default router

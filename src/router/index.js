import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home.vue"
import About from "../components/About/About.vue"
import Product from "../components/Product/Product.vue"
import Stars from "../components/About/Stars"
import News from "../components/News/News.vue"
import Contact from "../components/Contact/Contact.vue"
import Events from "../components/About/Events.vue"
import ProductList from "../components/Product/ProductList.vue"
import Detail from "../components/Common/Detail.vue"

Vue.use(VueRouter)

const routes = [
  {path:"/",component:Home,},
  {path:"/about/about1",component:Stars},
  {path:"/about/about2",component:About},
  {path:"/about/about3",component:Events,props:{useCarousel:false}},
  {path:"/product",component:Product,
    children:[
      {path:"all",component:ProductList},
      {path:"product1",component:ProductList},
      {path:"product2",component:ProductList},
      {path:"product3",component:ProductList},
    ],
  },
  {path:"/gigbeat",component:News},
  {path:"/contact",component:Contact},
  // 详细内容路由
  {path:"/gigbeat/:Id",component:Detail},
  {path:"/about/about1/:Id",component:Detail},
  {path:"/product/all/:Id",component:Detail},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

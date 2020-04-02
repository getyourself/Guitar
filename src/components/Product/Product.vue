<template>
  <div class="product">
    <div>
      <div class="selectPro" @touchstart="showchoices">
        {{category[choice].type}}
        <div :class={triangle:true,rotateT:showcate}>
          
        </div>
      </div>
      <transition
          enter-class="SEenter"
          enter-active-class="SEactiveEnter"
          enter-to-class="SEenterTo"
          leave-active-class="SEactiveEnter"
          leave-class="SEenterTo"
          leave-to-class="SEenter"
        >
          <ul v-if="showcate" class="choose">
            <li v-for="(type,k) in category" :key=k :class='{"choosed":choice===k}' @touchstart="choice=k">
              <router-link :to="category[k].url" event="touchstart" @touchstart.native='showchoices'>
                {{category[k].type}}
              </router-link>
            </li>
          </ul>
        </transition>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import ProductList from "../Product/ProductList"
export default {
  data(){
    return{
      showcate:false,
      category:[{
        type:"全部",
        url:'/product/all'
      },{
        type:"弦乐器",
        url:"/product/product1"
      },{
        type:"木管乐器",
        url:"/product/product2"
      },{
        type:"铜管乐器",
        url:"/product/product3"
      }],
      choice:0,
    }
  },
  components:{
    ProductList,
  },
  methods:{
    showchoices(){
      window.console.log("点击")
      this.showcate = !this.showcate;
    },
  },
  mounted(){
    this.$router.push("/product/all")
  },
  
}
</script>

<style>
  
  .product>div{
    position: relative;
  }
  .selectPro{
    background: #222;
    height: 0.4rem;
    padding: 0 0.2rem;
    line-height: 0.4rem;
    color: #fff;
    margin-bottom: 0.2rem;
    font-size: 15px;
    cursor: pointer;
  }
  .triangle{
    border: 2px solid transparent;
    border-right-color: #fff;
    border-bottom-color: #fff;
    width: 7px;
    height: 7px;
    transform: rotate(45deg);
    transform-origin: 75% 75%;
    float: right;
    position: relative;
    top: 10px;
    transition: all 0.3s;
  }
  .rotateT{
    transform: rotate(-135deg)
  }
  .SEenter{
    height: 0;
  }
  .SEenterTo{
    height: 1.63rem;
  }
  .SEactiveEnter{
    transition: height .5s
  }
  .product .choose>li>a{
    color:#BBBBBB;
    display: block;
    height: 100%;
    text-align: center;
    line-height: 0.4rem;
    font-size: 0.13rem;
    border-bottom: #2F2E35 1px solid;
  }
  .product .choose{
    overflow: hidden;
    position: absolute;
    width: 100%;
    top: 0.4rem;
    background: rgba(10, 10, 10, 0.9);
    z-index: 100;
  }
  .choosed{
    background: #e42a4f;
  }
  .choosed>a{
    color:#fff!important;
  }
</style>
<template>
  <div id="app">
    <!-- 导航区域 -->
    <div id="nav">
      <ul>
        <li v-for="(item,key) in navData" :key=key @touchstart="hideAbout(item.Url)">
            <span v-if="item.children" class="more" @touchstart.stop="showSecondNavS"></span>
            <router-link :to="item.Url" event="touchstart" v-if="!item.children" :exact="item.Url=='/'">
              <!-- click事件慢于touchstart，导致点击后先触发隐藏关于我们，一级栏目位置发生变化，然后再触发routerlink的跳转，这样就点空了 -->
                {{item.Nav}}
            </router-link>
            <div v-if="item.children" class="moreAboutUs" :class="{'router-link-exact-active':showSecondNav}">
                {{item.Nav}}
            </div>
            <transition
                  enter-class="SNenter"
                  enter-active-class="SNactiveEnter"
                  enter-to-class="SNenterTo"
                  leave-active-class="SNactiveEnter"
                  leave-class="SNenterTo"
                  leave-to-class="SNenter"
                >
                  <ul v-if="item.children" v-show="showSecondNav" ref="ul">
                    <li v-for="(unit,k) in item.children" :key=k @touchstart.stop="">
                        <router-link :to="unit.Url" event="touchstart">
                            {{unit.Nav}}
                        </router-link>
                    </li>
                  </ul>
            </transition>
        </li>
      </ul>
    </div>
    <!-- 主要内容 -->
    <div id="content" :class={openNav:show}>
      <div class="head">
        <div class="openSide" @touchstart="showSide" :class={showed:show}>
            <span></span>
            <span></span>
        </div>
        <div class="logo">
          <router-link to="/">
            <img src="http://resources.jsmo.xin/templates/upload/16825/201907/1564367865475.png" alt="">
          </router-link>
        </div>
      </div>
      <div class="main">
          <router-view></router-view>
          <div class="footer">
            <div class="pageDes">
                (©)2020 mo342_32453-乐器类网站产品
            </div>
            <div class="support">
                <span>技术支持</span>
                <a href="">
                    <img :src="lemo" alt="">
                </a>
            </div>
          </div>
      </div>
      <div class="cover" v-show="show" @touchstart="show=false">

      </div>
    </div>
  </div>
</template>

<script>
  import lemo from "./assets/logolemo.png"
  export default {
    data(){
      return{
        show:false,lemo,
        navData:[
          {Id:1,Nav:"首页",Url:"/"},
          {Id:2,Nav:"产品",Url:"/product"},
          {Id:3,Nav:"关于",Url:"/about",children:[
            {Id:31,Nav:"明星代言",Url:"/about/x1"},
            {Id:31,Nav:"关于我们",Url:"/about/x2"},
            {Id:31,Nav:"最新活动",Url:"/about/x3"},
          ]},
          {Id:4,Nav:"音乐资讯",Url:"/news"},
          {Id:5,Nav:"联系",Url:"/contact"},
        ],
        showSecondNav:false,
      }
    },
    created(){
      var ajax = new XMLHttpRequest();
      ajax.open("GET","/api/topNav",false);
      ajax.send();
      window.console.log(ajax.responseText)
      let ajaxData = JSON.parse(ajax.responseText)
      ajaxData.unshift({Id:-1,Nav:"首页",Url:"/"})
      this.navData = ajaxData;
    },
    mounted(){
      var ul = this.$refs.ul[0]
      ul.style.height=`${ul.parentElement.nextSibling.scrollHeight / 100 * ul.children.length}rem`;
    },
    methods:{
      showSide(){
        this.show = true;
      },
      hideAbout(url){
        this.showSecondNav = url!=="/about"?false:!this.showSecondNav;
      },
      showSecondNavS(){
        this.showSecondNav = !this.showSecondNav;
        this.$router.push({path:"/about"})
      },
    },
    components:{
    
    },
    watch:{
      $route(){
        this.show = false;
        // 监控地址变化并显示内容页面，是路由守卫的替代方案
      }
    }
  }
</script>

<style>
.pages{
    color:white;
    width: 0.36rem;
    height: 0.36rem;
    background:#e42a4f;
    line-height: 0.36rem;
    text-align: center;
    margin: 20px auto;
  }
  /* 页码样式 */
  .loading{
    position: relative; 
    height: 250px;
  }
  .loading:empty:after{
    content:"";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,transparent,rgb(177, 184, 183),transparent);
    transform:translate(-100%,0);
    animation: loading 1s infinite;
  }
  @keyframes loading {
    to{
        transform: translate(100%,0)
      }
  }
  html{
    font-size: calc( 100vw / 3.75)
  }
  body{
    margin:0;
    font-size: 16px;
    overflow: hidden;
  }
  ul,h1,h2,h3,p{
    padding: 0;
    margin:0;
    list-style: none;
  }
  a{
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
  }
  /* 导航区域 */
  #nav{
    width:2.6rem;
    height: 100vh;
    background: #0e0e0e;
    position: absolute;
    top: 0;
  }
  #nav > ul>li{
    position: relative;
    min-height: 0.49rem;
    line-height: 0.49rem;
    border-top:1px solid rgba(235, 235, 235, 0.1);
  }
  #nav > ul{
    cursor: pointer;
   margin-top: 0.49rem;
  }
  #nav > ul li>a{
   color: #b7b7b7;
   font-size: 0.13rem;
   padding-left: 0.36rem;
   display: block;
   width: 100%;
   height: 100%;
   box-sizing: border-box
  }
  /* 二级导航 */
  #nav > ul li>.more{
    display: inline-block;
    width: 0.16rem;
    position: absolute;
    right: .2rem;
    height: 0.49rem;
    padding-top: 0.25rem;
    box-sizing: border-box;
  }
  #nav > ul li>.more:after{
    content:"";
    display: block;
    background: #474747;
    height: 1px;
  }
  .more~ul li{
    background:#141414;
    height: 0.49rem;
  }
  #nav .more~ul li a{
    color:#666!important;
    font-size: 0.13rem;
  }
  #nav .more~ul{
    overflow: hidden;
  }
  .moreAboutUs{
    padding-left: 0.36rem;
    color: #b7b7b7;
    font-size: 0.13rem;
  }
  .SNenter{
    height: 0!important;
  }
  .SNactiveEnter{
    transition: height 1s;
  }
  /* 链接选中变红 */
  #nav li .router-link-active{
    color: #e42a4f;
    background:  #1c1c1c;
  }
  #nav li .router-link-exact-active{
    color: #e42a4f;
    background:  #1c1c1c;
  }
  #nav .more~ul li .router-link-exact-active{
    color: #b7b7b7!important
  }
  /* 内容区域 */
  #content{
    width: 100%;
    height: 100%;
    background:#1e1e1e;
    transition: all .4s;
    position: relative;
  }
  #content .head{
    height: 0.5rem;
    overflow: hidden;
    position: relative;
  }
  .openSide{
    width: 0.3rem;
    height: 0.3rem;
    padding: 0.1rem 0.15rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    position:absolute;
    cursor: pointer;
  }
  .openSide span{
    transition: transform 0.4s;
    height:0.01rem;
    width: 0.3rem;
    background: lightgray;
    margin: 0.05rem 0;
  }
  #content .main{
    width: 100%;
    height: calc(100vh - 0.5rem);
    overflow-x: hidden;
    /* 横向的溢出不产生滚动条 */
    overflow-y: auto;
    background: #191919;
  }
  #content .cover{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;left:0;
  }
  .head .logo{
    width: 1.8rem;
    height: 0.3rem;
    margin: 0 auto;
    padding: 0.1rem 0
  }
  .head .logo img{
    width: 100%;
    height: auto;
  }
  /* 点击任意位置收起侧栏 */
  .cover{
    z-index: 10;
  }
  /* 点击展示侧栏 */
  .showed span:first-child{
    transform: rotate(45deg);
    position: relative;
    top: 0.05rem;
  }
  .showed span:last-child{
    transform: rotate(-45deg);
    position: relative;
    bottom:0.05rem;
  }
  .openNav{
    margin-left: 2.6rem;
    /* 似乎left没有办法过渡 */
  }
  /* 公用底栏样式 */
  .pageDes{
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: .1rem;
        color:#8e8e8e;
        height: 0.2rem;
        line-height: 0.2rem;
        padding: 10px 20px;
        background: #171717;
    }
    .support{
        height: 30px;
        display: flex;
        align-items: top;
        justify-content: space-between
    }
    .support img{
        height: 16px;
    }
    .support span{
        color:#8e8e8e;
        font-size: 10px;
        margin-left: 30px;
    }
    .support a{
        margin-top: 5px;
        margin-right: 100px;
    }
</style>

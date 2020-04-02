<template>
  <div id="home" v-if="event&&product&&about&&gigbeat&&contact&&star">
      <div class="loading">
          <Carousel></Carousel>
      </div>
      <div class="introHome">
          <h3>{{product.head.title}}</h3>
          <p>
              {{product.head.subtitle}}
          </p>
      </div>
      <ProductList :isHome='false'></ProductList>
      <div class="more-pro">
        <router-link :to="product.more.href">
            {{product.more.text}}
        </router-link>
      </div>
      <div class="introHome">
          <h3>{{about.head.title}}</h3>
          <p>
             {{about.head.subtitle}}
          </p>
      </div>
      <div class="aboutDescription">
          {{about.description}}
      </div>
      <div class="moreAbout">
          <router-link :to="about.more.href">
                {{about.more.text}}
          </router-link>
      </div>
      <div class="circus">
        <img :src="about.Img" alt="">
      </div>
      <div class="introHome">
          <h3>{{star.head.title}}</h3>
          <p>
              {{star.head.subtitle}}
          </p>
      </div>
      <Stars :isHome="true"></Stars>
      <div class="introHome">
          <h3>{{gigbeat.head.title}}</h3>
          <p>
              {{gigbeat.head.subtitle}}
          </p>
      </div>
      <NewsList></NewsList>
      <div class="moreAbout">
          <router-link :to="gigbeat.more.href">
                {{gigbeat.more.text}}
          </router-link>
      </div>
      <div class="introHome">
          <h3>{{event.head.title}}</h3>
          <p>
              {{event.head.subtitle}}
          </p>
      </div>
      <Events :useCarousel="true"></Events>
      <div class="partners">
          <ul>
              <li>
                  <a href="">
                      <img :src="partner1" alt="">
                  </a>
              </li>
              <li>
                  <a href="">
                      <img :src="partner2" alt="">
                  </a>
              </li>
              <li>
                  <a href="">
                      <img :src="partner3" alt="">
                  </a>
              </li>
              <li>
                  <a href="">
                      <img :src="partner4" alt="">
                  </a>
              </li>
              <li>
                  <a href="">
                      <img :src="partner5" alt="">
                  </a>
              </li>
          </ul>
      </div>
      <div class="contactHome">
           <div class="introHome">
            <h3>{{contact.head.title}}</h3>
            <p>
                {{contact.head.subtitle}}
            </p>
            </div>
            <div class="contactList">
                <div class="contactTitle">
                    魔艺(UEmo)极速建站系统
                </div>
                <p>地址：北京市建外SOHO东区2号楼</p>
                <p>邮编：100000</p>
                <p>电话：010-69557550</p>
                <p>手机：13521043975  /  13811334772</p>
                <p>传真：000-66668888</p>
                <p>邮箱：website@qq.com</p>
            </div>
      </div>
  </div>
</template>

<script>
import Carousel from "./Common/Carousel";
import ProductList from "../components/Product/ProductList"
import circus from "../assets/circus.jpg"
import Stars from "../components/About/Stars"
import NewsList from "../components/News/NewsList"
import Events from "../components/About/Events"
import partner1 from "../assets/partner1.png"
import partner2 from "../assets/partner2.png"
import partner3 from "../assets/partner3.png"
import partner4 from "../assets/partner4.png"
import partner5 from "../assets/partner5.png"

export default {
    data(){
        return{
            circus,partner4,partner5,partner3,partner2,partner1,
            about:null,product:null,gigbeat:null,contact:null,star:null,event:null
        }
    },
    components:{
        Carousel,ProductList,Stars,NewsList,Events
    },
    methods:{
      ajaxCall(colName){
        let ajax = new XMLHttpRequest();
        ajax.open("GET",`/api/getColumn?Nav=${colName}`,true);
        ajax.send();
        ajax.onload=()=>{
          window.console.log(JSON.parse(ajax.responseText),colName)
          switch(colName){
              case '关于':
                  this.about = JSON.parse(ajax.responseText).Column
                  break;
              case '产品':
                  this.product = JSON.parse(ajax.responseText).Column
                  break;
              case '音乐资讯':
                  this.gigbeat = JSON.parse(ajax.responseText).Column
                  break;
              case '联系':
                  this.contact = JSON.parse(ajax.responseText).Column;
                  break;
              case '明星代言':
                  this.star = JSON.parse(ajax.responseText).Column;
                  break;
              case '最新活动':
                  this.event = JSON.parse(ajax.responseText).Column;
                  break;
          }
        }
      }
    },
    created(){
        this.ajaxCall('联系');
        this.ajaxCall('产品');
        this.ajaxCall('关于');
        this.ajaxCall('音乐资讯');
        this.ajaxCall('明星代言');
        this.ajaxCall('最新活动');
    },
    mounted(){
        
    }
}
</script>

<style scoped>
    .introHome{
        font-weight: normal;
        padding: 0.3rem 0 0.2rem 0;
        color: white;
        text-align: center;
    }
    .introHome h3{
        height: 0.32rem;
        font-weight: 400
    }
    .introHome p{
      color:#656565;
      margin-top: 2px;
      font-size: 13px;
    }
    .more-pro{
        margin: 0.3rem auto;
        text-align: center;
        background:#262626;
    }
    .more-pro a{
        color:#aaa;
        font-family: "HELVETICANEUELTPRO-THEX";
        width: 96%;
        height: 40px;
        font-size: .12rem;
        line-height: 0.4rem;
    }
    .aboutDescription{
        text-align: left;
        font-size: .13rem;
        color:#6a6a6a;
        line-height: .2rem;
        margin: 10px 10px 0 10px;
        padding: 0 20px;
    }
    .moreAbout{
        width: 2.26rem;
        height: .4rem;
        background: #262626;
        margin: 0 auto;
        text-align: center;
        line-height: 0.4rem;
        margin-top:0.25rem;
        margin-bottom: 0.4rem;
    }
    .moreAbout a{
        color: #C5C5C5;
        display: block;
        height: 100%;
        font-size: 0.12rem;
    }
    .circus img{
        width: 100%;
    }
    .partners ul{
        display: flex;
        width: 100%;
    }
    .partners{
        padding: 0.3rem 0;
    }
    .partners ul img{
        width: 100%;
    }
    .contactList{
        padding: 0 0.2rem;
    }
    .contactTitle{
        color: #e6e6e6;
        font-size: .14rem;
        line-height: .2rem;
        margin-bottom: 10px;
        font-weight: normal;
    }
    .contactList p{
        line-height: .24rem;
        font-size: .12rem;
        color:#999999;
        height: .24rem;
        width: 100%;
    }
    .contactList .shareTo{
        display: flex;
    }
    .contactList .shareTo a{
        display: block;
        width: 0.3rem;
        height: 0.3rem;
        border-radius: .15rem;
        overflow: hidden;
        background: white
    }
    
   
</style>
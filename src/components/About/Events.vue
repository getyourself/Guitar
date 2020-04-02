<template>
  <div class="events">
      <div class="eventList" v-if="!useCarousel">
          <div class="eventUnit" v-for="(v,k) in events" :key=k>
              <a href="">
                  <img :src="v.Img" alt="">
              </a>
              <div class="eventDes">
                  <p>{{v.Title}}</p>
                  <p>{{v.Description}}</p>
              </div>
          </div>
          <div class="pages">
            {{page}}
          </div>
      </div>
      <div v-else style="position:relative">
          <swiper  :options="swiperOption" style="height:100%;width:100%">
            <!-- slides -->
            <swiperSlide v-for="item in events" :key="item.Id">
                <router-link :to="item.Url">
                    <div class="eventImg">
                        <img :src="item.Img" style="width:70%">
                    </div>
                    <div class="eventTitle">
                        {{item.Title}}
                    </div>
                    <div class="eventDes">
                        {{item.Description}}
                    </div>
                </router-link>
            </swiperSlide>
        </swiper>
        <div class="swiper-button-next swiper-next"></div>
        <div class="swiper-button-prev swiper-prev"></div>
      </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    props:{useCarousel:{default:true}},
    data(){
        return{
            events:[],
            page:null,
            swiperOption: {
                    autoplay: { //自动播放
                        disableOnInteraction: false,//表示永远不停止 autoPlay
                        delay:5000,//表示5秒自动滚动一下
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                }
        }
    },
    mounted(){
        
    },
    created(){
        let ajax = new XMLHttpRequest();
        ajax.open("GET",`/api/getConentList?Url=/about/about3&page=1`,true);
        ajax.send();
        ajax.onload=()=>{
            var ajaxData = JSON.parse(ajax.responseText)
            window.console.log(ajaxData,"活动")
            this.events = ajaxData.content;
            this.page = ajaxData.pageInfo.page;
        }
        
    },
    components:{
        swiper,swiperSlide
    }
}
</script>

<style scoped>
.bullet{
    display: inline-block;
    width: 5px; height:5px;
    border-radius: 50%;
    background: red;
    margin:0 3px;
}
.bulletActive{
    background: blue;
}
.eventList{
    margin-top: 20px;
    padding:0 20px;
}
.eventUnit{
    margin-top: 16px;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(114, 114, 114, 0.2);
    margin-bottom: 20px;
    width: calc(100% - 15px);
    height: auto;
    margin-right: 15px;
    font-size: 0.12rem;
}
.eventUnit>a{
    display: block;
    width: 100%;
}
.eventUnit>a img{
    width: 100%;
    height: auto;
}
.eventDes{
    margin-top: 10px;
}
.eventDes p:first-child{
    height: 40px;
    line-height: 40px;
    color:#CDCDCD;
    text-align: center;
    font-size: 0.16rem;
}
.eventDes p:last-child{
    text-align: left;
    line-height: 0.22rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #868686;
    height: 0.42rem;
    font-size: 0.13rem;
}
.swiper-next:after{
    content:""
}

.swiper-prev:after{
    content:""
}

.swiper-next{
    top: 33%;
    right: 0;
    width: 0.32rem;
    height: 0.52rem;
    background: url('http://resources.jsmo.xin/templates/upload/369/icon/jt.png') no-repeat -254px 4px;
}
.swiper-prev{
    cursor: pointer;
    top: 33%;
    left: 0;
    width: 0.32rem;
    height: 0.52rem;
    background: url('http://resources.jsmo.xin/templates/upload/369/icon/jt.png') no-repeat 11px 4px;
}
.swiper-button-disabled{
    display: none;
}
.eventImg{
    text-align: center;
}
.eventTitle{
    text-align: center;
    color: #CDCDCD;
    height: 40px;
    line-height: 40px;
    font-size: 0.16rem;
}
.eventDes{
    text-align: left;
    line-height: 22px;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    color:#868686;
    font-size: 0.13rem;
    width: 3.38rem;
    margin: 0 auto;
}
</style>
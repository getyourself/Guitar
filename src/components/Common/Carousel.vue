<template>
   <div class="swiper-container pros">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img :src="images[0]" alt="">
      </div>
      <div class="swiper-slide">
        <img :src="images[1]" alt="">
      </div>
      <div class="swiper-slide">
        <img :src="images[2]" alt="">
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from "../../../node_modules/swiper"
import "../../../node_modules/swiper/css/swiper.min.css"
export default {
    data(){
      return {
        images:[
          "http://resources.jsmo.xin/templates/upload/16825/201907/1564378596484.jpg",
          "http://resources.jsmo.xin/templates/upload/16825/201907/1564378508371.jpg",
          "http://resources.jsmo.xin/templates/upload/16825/201907/1564378613928.jpg"
        ],
      }
    },
    mounted(){
        var swiper = new Swiper('.pros', {
              autoplay:true,
              loop:true,
              pagination: {
                el: '.swiper-pagination',
              },
            });
    },
    components: {
     
    }
      
}
</script>

<style scoped>
     html, body {
      position: relative;
      height: 100%;
    }
    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
    }
    .swiper-container {
      width: 100%;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
  .swiper-slide img{
    width: 100%;
  }
</style>
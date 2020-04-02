<template>
  <div class="endorsement">
      <ul>
          <li v-for="(v,k) in musicians" :key=k>
              <router-link :to="v.Url" event="touchstart">
                  <div class="starPhoto">
                    <img :src="v.Img" alt="">
                  </div>
                  <div class="starInfo">
                      <div class="starName">
                          {{v.Title}}
                      </div>  
                      <div class="starTitle">
                          {{v.Author}}
                      </div>
                      <div class="starDescription">
                          {{v.Description}}
                      </div>
                  </div>
              </router-link>
          </li>
      </ul>
      <div class="pages" v-if="!isHome">
          {{page}}
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            musicians:[],
            page:null,
        }
    },
    props:{isHome:{default:false}},
    created(){
        let ajax = new XMLHttpRequest();
        ajax.open("GET",`/api/getConentList?Url=/about/about1&page=1`,true);
        ajax.send();
        ajax.onload=()=>{
            var ajaxData = JSON.parse(ajax.responseText)
            window.console.log(ajaxData,"明星")
            this.musicians = ajaxData.content;
            this.page = ajaxData.pageInfo.page;
        }  
    }
}
</script>

<style>
    .endorsement li{
        margin: 0 auto;
        width: 3.35rem;
        padding: 0.26rem 0;
        height: 0.94rem;
    }
    .starPhoto img{
        width: 0.87rem;
        height: 0.87rem;
    }
    .starPhoto{
        width: 0.87rem;
        border-radius: 0.44rem;;
        overflow: hidden;
        float: left;
    }
    .starInfo{
        float: right;
        width: 2.33rem;
        height: 0.94rem;
    }
    .starInfo .starName{
        font: 62.5% Arial,"微软雅黑";
        font-size: 0.16rem;
        font-family: "HELVETICANEUELTPRO-THEX";
        line-height: 0.18rem;
        color: #EEE;
        font-weight: normal;
        height: 0.29rem;
        -webkit-text-size-adjust: none;
    }
    .starInfo .starTitle{
        color: #656565;
        font-size: 0.12rem;
    }
    .starInfo .starDescription{
        font-size: 0.13rem;
        color:#949494;
        margin-top: 10px;
        line-height: 0.18rem;
        height: 37px;
        overflow: hidden;
    }
</style>
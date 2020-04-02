<template>
  <div>
    <div class="proList">
    <ul>
      <li v-for="(guit,key) in guitars" :key=key class="project-wrapper">
        <router-link :to="guit.Url" event="touchstart">
          <div class="project-img">
            <img :src="guit.Img" alt="">
          </div>
          <div class="project-info">
            <div>
              {{guit.Title}}
            </div>
            <p>价格{{guit.price}}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
  <div class="pages" v-if="isHome">
    {{page}}
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      guitars:[],
      page:null,
    }
  },
  props:{isHome:{default:true}},
  mounted(){
    console.log(this.$route.path)
    this.ajaxCall(this.$route.path)
  },
  methods:{
    ajaxCall(url){
      if(url==='/'){
        url='/product/all'
      }
      let ajax = new XMLHttpRequest();
      ajax.open("GET",`/api/getConentList?Url=${url}&page=1`,true);
      ajax.send();
      ajax.onload=()=>{
        var ajaxData = JSON.parse(ajax.responseText)
        window.console.log(ajaxData,"guitars")
        this.guitars = ajaxData.content;
        this.page = ajaxData.pageInfo.page
      }
    }
  },
  watch:{
    $route(){
      this.ajaxCall(this.$route.path);
    }
  }
}
</script>

<style scoped>
  .proList{
    margin-left: 2%;
  }
  .proList ul{
      display: flex;
      flex-wrap: wrap;
  }
  .project-wrapper{
    background: #1e1e1e;
    width: 1.76rem;
    height: 1.94rem;
    margin:0 7px 11px 0;
    padding-bottom: 0.5rem;
  }
  .project-wrapper a{
    color: white;
  }
  .project-wrapper .project-img img{
    width: 1.76rem;
    height: 1.95rem;
  }
  .project-info>*{
    text-align: left;
    margin-left: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-left: 0 0 10px 10px;
  }
  .project-info div{
    margin:10px 0 3px 10px;
    color:#e6e6e6;
    font-size: 13px;
    margin-bottom: 3px;
  }
   .project-info p{
     color:#7E7E7E;
     font-size: 10px;
   }
</style>
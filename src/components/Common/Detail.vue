<template>
  <div class="detail" v-if="content">
      <div class="Title">
          <p>{{content.Title}}</p>
          <p>{{content.Date.slice(0,10)}}</p>
      </div>
      <div class="contentDes">
          {{content.Description}}
      </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
          content:null,
      }
    },
    created(){
        let ajax = new XMLHttpRequest();
      ajax.open("GET",`/api/getContent?Id=${this.$route.params.Id}`,true);
      ajax.send();
      ajax.onload=()=>{
        var ajaxData = JSON.parse(ajax.responseText)
        window.console.log(ajaxData,"content")
        this.content = ajaxData.currentContent;
      }
    }
}
</script>

<style>
    .detail{
        width: 3.35rem;
        margin: 0 auto;
    }
    .Title{
        color:hsl(0,0%,100%);
        margin-top: 1rem;
    }
    .Title p:first-child{
        text-align: center;
        font-size: 0.26rem;
    }
    .Title p:last-child{
        font-size: 0.14rem;
        height: 0.24rem;
        text-align: center;
        color: #777;
    }
    .contentDes{
        color: hsl(0,0%,60%);
        font-size: .14rem;
        line-height: .24rem;
    }
</style>
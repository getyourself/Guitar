<template>
  <div class="about" v-html="content">
    
  </div>
</template>

<script>

export default {
  data(){
    return{
      content:null,
    }
  },
  components:{

  },
  created(){
    let ajax = new XMLHttpRequest();
        ajax.open("GET",`/api/getConentList?Url=${this.$route.path}&page=1`,true);
        ajax.send();
        ajax.onload=()=>{
            var ajaxData = JSON.parse(ajax.responseText)
            window.console.log(ajaxData,"关于")
            this.content = ajaxData.pNav[0].PageContent;
        }  
  }
}
</script>

<style>
  .about{
    padding: 0 20px;
  }
</style>
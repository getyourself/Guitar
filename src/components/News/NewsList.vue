<template>
  <div class="newsList">
    <ul>
        <li v-for="(v,k) in news" :key=k>
            <div class="newsItem">
                <router-link :to="v.Url||''" event="touchstart">
                    <div class="newsDate">
                        <p>{{v.Date.split('-')[1]+'-'+v.Date.split('-')[2].slice(0,2)}}</p>
                        <p>{{v.Date.split('-')[0]}}</p>
                    </div>
                    <div class="newsTitle">
                        {{v.Title}}
                    </div>
                    <div class="newsContent">
                        {{v.Description}}
                    </div>
                </router-link>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            news:[
                {Date:"2020-01-01222",Title:"摇滚明星克里斯马丁-马山芋",
                Description:"英伦摇滚乐队的首张；录音室专辑《Parachutes》获得第21届全英音乐奖最佳英国专辑奖..."},
                {Date:"2020-01-01222",Title:"马克西姆 拉赫曼尼诺夫-帕格尼尼主题狂想曲",
                Description:"拉氏毕业于莫斯科音乐学院；他的创作中深受柴可夫斯基影响，有深厚的民族音乐基础..."},
                {Date:"2020-01-01222",Title:"2017北京迷笛音乐节魔都音乐节来临",
                Descriptiont:"北京迷笛音乐节至今已举办20多届，已成为现代音乐最响亮的品牌之一并在上海、纽约等多地陆续举办，北京"},
                {Date:"2020-01-01222",Title:"2015草莓音乐节二手玫瑰",
                Description:"自成立之初就以‘‘坚持做中国特色的摇滚乐’’为宗旨，将东北二人转的音乐元素与现代摇滚乐不露声色的嫁接，"},
                {Date:"2020-01-01222",Title:"鼓手在乐队中的重要性-中国最受欢迎的十...",
                Description:"唐朝乐队是中国最出名的摇滚乐队之一他们是最早一批的中国摇滚圈音乐人当年的..."}
            ],
            page:null
        }
    },
    mounted(){

    },
    created(){
        let ajax = new XMLHttpRequest();
      ajax.open("GET",`/api/getConentList?Url=/gigbeat&page=1`,true);
      ajax.send();
      ajax.onload=()=>{
        var ajaxData = JSON.parse(ajax.responseText)
        window.console.log(ajaxData,"gigbeat")
        this.news = ajaxData.content;

      }
    }
}
</script>

<style>
    .newsItem{
        margin-top: 0.2rem;
        padding: 0 0.2rem 0.3rem 0.2rem;
        height: 1.7rem;
        box-sizing: border-box;
        cursor: pointer;
    }
    .newsItem a{
        color: #6a6a6a;
        font-family: "HELVETICANEUELTPRO-THEX", Arial;
    }
    .newsDate{
        margin-left: 10px;
        background-color:transparent;
        width: 0.76rem;
        padding: 0.1rem .1rem .1rem 0;
        margin-bottom: 10px;
    }
    .newsDate p:first-child{
        font-size: .24rem;
        line-height: 0.24rem;
    }
    .newsDate p:last-child{
        font-size: 0.12rem;
    }
    .newsTitle,.newsContent{
        margin: 0 10px;
    }
    .newsTitle{
        font-size: 0.16rem;
        height: 0.2rem;
        line-height: 0.2rem;
        color: #fff;
    }
    .newsContent{
        height: 0.45rem;
        line-height: 0.22rem;
        font-size: 0.13rem;
        color:#6a6a6a;
        overflow: hidden;
        margin-top: 10px;
    }
</style>
<template>
    <div id="Listcontext">
      <keep-alive>
        <div class="Recontext">
          <h2 class="ListTitle">
            <img :src="Recommend.titleIconUrl" class="titleIcon">
            {{Recommend.itemTitle}}
          </h2>
          <ul class="Recommend">
            <li v-for="(recomitem,recomindex) in RecommendItem" :key=recomindex  @click="RecomFun(RecomItem,recomitem.comicId)">
              <img :src = recomitem.cover>
              <h3>{{recomitem.name}}</h3>
              <p>{{recomitem.short_description}}</p>
            </li>
          </ul>
        </div>
      </keep-alive>
      <keep-alive>
          <div class="HotContext" style="padding-top: 0.6rem">
            <h2 class="ListTitle">
              <img :src="Hot.titleIconUrl" class="titleIcon">
              {{Hot.itemTitle}}
            </h2>
            <ul class="Three">
              <li v-for="(hotitem,hotindex) in HotItem" :key=hotindex @click="RecomFun(RecomItem,hotitem.comicId)">
                <img :src = hotitem.cover>
                <h3>{{hotitem.name}}</h3>
                <p>{{hotitem.short_description}}</p>
              </li>
            </ul>
          </div>
      </keep-alive>
      <keep-alive>
          <div class="NewsContext" style="padding-top: 0.6rem">
            <h2 class="ListTitle">
              <img :src="News.titleIconUrl" class="titleIcon">
              {{News.itemTitle}}
            </h2>
            <ul class="Three">
              <li v-for="(todayitem,toadyindex) in NewItem" :key=toadyindex >
                <img :src = todayitem.cover>
                <h3>{{todayitem.title}}</h3>
                <p>已更新到 {{todayitem.content}} 话</p>
              </li>
            </ul>
          </div>
      </keep-alive>
      <keep-alive>
          <div class="TodayContext" style="padding-top: 0.6rem">
            <h2 class="ListTitle">
              <img :src="Todays.titleIconUrl" class="titleIcon">
              {{Todays.itemTitle}}
            </h2>
            <ul class="Three">
              <li v-for="(todayitem,toadyindex) in TodayItem" :key=toadyindex @click="RecomFun(RecomItem,todayitem.comicId)">
                <img :src = todayitem.cover>
                <h3>{{todayitem.name}}</h3>
                <p>{{todayitem.short_description}}</p>
              </li>
            </ul>
          </div>
      </keep-alive>
    </div>
</template>

<script>
    export default {
      name: 'listcontext',
      data () {
        return {
          Recommend: [],
          Hot: [],
          Todays: [],
          News: [],
          RecomItem: {
            path: '/Cartoon',
            name: 'Cartoon'
          }
        }
      },
      filters: {
        CheckArr (value) {
        }
      },
      computed: {
        RecommendItem: function () {
          if (this.Recommend.comics) {
            return this.Recommend.comics.slice(0, 4)
          }
        },
        HotItem: function () {
          if (this.Hot.comics) {
            return this.Hot.comics.slice(0, 3)
          }
        },
        TodayItem: function () {
          if (this.Todays.comics) {
            return this.Todays.comics.slice(0, 3)
          }
        },
        NewItem: function () {
          if (this.News.comics) {
            return this.News.comics.slice(0, 2)
          }
        }
      },
      created () {
        var _this = this
        this.$http.get(this.baseUrl + '/api/home').then(function (response) {
          if (response.data) {
            _this.Recommend = response.data.data.returnData.comicLists[1]
            _this.Hot = response.data.data.returnData.comicLists[2]
            _this.Todays = response.data.data.returnData.comicLists[4]
            _this.News = response.data.data.returnData.comicLists[7]
          }
        })
          .catch(function (error) {
            console.log(error)
          })
      },
      methods: {
        RecomFun (items, remItem) {
          console.log(remItem)
          this.$router.push(items.path)
          this.$store.commit('SET_COMID', remItem)
        }
      }
    }
</script>

<style scoped>
    #Listcontext{
      padding:0.5rem 0;
      margin: 1rem 0;
    }
    #Listcontext img
    {
      width: 100%;
    }
    .Recontext,.HotContext,.TodayContext,.NewsContext{
      padding: 0.6rem 0 0.2rem 0;
      background: #fff;
      margin-bottom: 1rem;
      box-shadow: 0 0 4px #ccc;
    }
    .Recommend{
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      width: 100%;
    }
    #Listcontext .titleIcon
    {
      width: 34px;
      margin-right: 1%;
    }
    #Listcontext .ListTitle {
      padding: 0 0.2rem;
      display: flex;
      align-items: center;
      letter-spacing: 1px;
      font-weight: bold;
      font-size: 1.2rem;
      margin-bottom: 0.4rem;
    }
    li h3
    {
       overflow: hidden;
      text-overflow: ellipsis;
      white-space:nowrap;
      padding:4% 4% 0 4%;
      /* letter-spacing: 1px; */
      color: #2b2b2b;
      font-size:1rem;
      font-weight: bold;
      margin-bottom: 0.4rem;
    }
    li p
    {
      padding:0 4% 2% 4%;
      color: rgba(17, 17, 17, 0.73);
      font-size:0.8rem;
      margin-bottom: 0.2rem;
    }
    /*public*/

    .Recommend li{
      width: 48%;
      background: #fefefe;
      margin: 0.6rem 0;
      border-radius:2%;
    }
    .Recommend li:nth-child(2n-1){
      margin-right: 2%;
    }

    .Three{
        display: flex;
    }
    .Three li{
      width: 33%;
      padding: 1%;
      flex: 1;
    }
</style>

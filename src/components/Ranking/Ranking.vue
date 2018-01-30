<template>
 <transition name="fade">
    <div id="Ranking">
      <ul>
        <li v-for="(rankItem,rankIndex) in rankList" :key=rankIndex @click="JoinOther(rankItem.argValue, rankItem.argName)">
          <div class="rankLeft">
            <img :src=rankItem.cover alt="">
          </div>
          <div class="rankRight">
            <h2>{{rankItem.title}}</h2>
            <p>{{rankItem.subTitle}}</p>
          </div>
        </li>
      </ul>
    </div>
 </transition>
</template>

<script>
    export default {
      name: 'ranking',
      data () {
        return {
          rankList: []
        }
      },
      methods: {
        JoinOther (value, name) {
          this.$router.push('/Other')
          this.$store.commit('SET_ARG', {values: value, names: name})
        }
      },
      created () {
        var _this = this
        this.$http.get(this.baseUrl + '/api/rank').then(function (response) {
          if (response.data) {
            _this.rankList = response.data.data.returnData.rankinglist
          }
        })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
</script>

<style scoped>
  #Ranking{
    position: absolute;
    left: 0;
    top:0;
    width: 100%;
    margin-bottom: 3rem;
  }
  img{
    width: 100%;
  }
  #Ranking ul li
  {
    background: #fff;
    margin: 1rem 0;
    box-sizing: border-box;
    padding: 2%;
    display: flex;
    width: 100%;
  }
  #Ranking ul li:nth-child(1){
    margin-top: 0;
  }
  #Ranking ul li .rankLeft
  {
    width: 45%;
    margin-right: 5%;
  }
  #Ranking ul li .rankRight{
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
  }
  #Ranking ul li .rankRight h2{
    color: #000;
    font-size:1.1rem;
    margin-bottom: 0.6rem;
  }
  #Ranking ul li .rankRight p{
    font-size:0.8rem;
    line-height: 1rem;
    color: #888;
  }
</style>

<template>
  <transition name="fade">
    <div id="Category">
      <ul>
        <li v-for="(item,index) in CatList" :key=index @click="JoinOther(item.argValue, item.argName)">
          <img :src=item.cover>
          {{item.sortName}}
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
    export default {
      name: 'category',
      data () {
        return {
          CatList: []
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
      this.$http.get(this.baseUrl + '/api/Category').then(function (response) {
        if (response.data) {
          _this.CatList = response.data.data.returnData.rankingList
          console.log( _this.CatList)
        }
      })
        .catch(function (error) {
          console.log(error)
        })
    }
    }
</script>

<style scoped >
  #Category{
    position: absolute;
    width:100%;
    min-height:100%;
    background: #fff;
    left: 0;
    top:0;
  }
  #Category ul{
    display: flex;
    flex-wrap:wrap;
  }
  #Category ul li{
    border-radius: .2rem;
    background: #f9f9f9;
    margin: 1.5%;
    border:1px solid #eee;
    padding: 1%;
    box-sizing: border-box;
    text-align:center;
    width: 30%;
  }
  #Category ul li img{
    width: 100%
  }
</style>

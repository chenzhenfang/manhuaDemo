<template>
    <div id="Listmenu">
        <ul>
          <li v-for="(listTitle,indexs) in titleItem" :key=indexs @click="JoinOther(listTitle.argValue, listTitle.argName)">
            <img :src="listTitle.cover" >
            <span>{{listTitle.itemTitle}}</span>
          </li>
        </ul>
    </div>
</template>

<script>
    export default {
      name: 'Listmenu',
      data () {
        return {
          titleItem: []
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
        this.$http.get(this.baseUrl + '/api/home').then(function (response) {
          if (response.data) {
            _this.titleItem = response.data.data.returnData.comicLists[0].comics
            console.log(_this.titleItem)
          }
        })
        .catch(function (error) {
          console.log(error)
        })
      }
    }
</script>

<style scoped>
    #Listmenu{
      width: 100%;
    }
    #Listmenu ul
    {
      border-top:1px solid #eee;
      border-bottom: 1px solid #eee;
      width: 100%;
      display: flex;
      flex-wrap:wrap;
      box-shadow: 0 0 4px #eee;
    }
    #Listmenu ul li
    {
      background: #fff;
      letter-spacing: 2px;
      font-size: 1.1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      padding-top: 4%;
      padding-bottom: 4%;
    }
    #Listmenu ul li:nth-child(1){
      border-right:1px solid #eee;
      border-bottom: 1px solid #eee;
    }
    #Listmenu ul li:nth-child(2){
      border-bottom: 1px solid #eee;
    }
    #Listmenu ul li:nth-child(3){
      border-right: 1px solid #eee;
    }
    #Listmenu ul li img
    {
      width: 20%;
      margin-right: 10%;
    }
    #Listmenu ul li span{
        width: 50%;
    }
</style>

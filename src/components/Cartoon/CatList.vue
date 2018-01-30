<template>
    <div id="CartoonList">
      <template v-if="ComItem.comic">
        <div class="otherData">
          <span>最近更新时间：{{ComItem.comic.last_update_time | CheckData}}  </span>
          <p @click="arrSort">          
            <icon name="sort"></icon> 
            <span>排序</span>
          </p>
        </div>
      </template>
 
     <keep-alive>
      <div class="CartoonList" >
        <span v-for="(CarItem,index) in chapterList" :key=index @click='JoinItem(CarItem.chapter_id)'>
          {{CarItem.name}}
        </span>
      </div>
     </keep-alive>
    </div>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon'
  export default {
    name: 'CartoonList',
    data () {
      return {
        ComId: '',
        ComItem: [],
        chapter_id: '',
        chapterList: []
      }
    },
    filters: {
      CheckData (value) {
        var newDate = new Date(value)
        return newDate.getMonth() + 1 + '月' + newDate.getDate() + '日'
      }
    },
    created () {
      this.ComId = this.$store.getters.GET_COMID
      var _this = this
      this.$http.get(this.baseUrl + '/api/detail?comicid=' + this.ComId).then(function (response) {
        if (response.data) {
          _this.ComItem = response.data.data.returnData
          if (!_this.$store.state.ArrSort) {
            _this.chapterList = response.data.data.returnData.chapter_list.reverse()
          } else {
            _this.chapterList = response.data.data.returnData.chapter_list
          }
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    components: {
      Icon
    },
    methods: {
      arrSort () {
        this.$store.commit('SET_SORT_ARR')
        this.chapterList = this.chapterList.reverse()
      },
      JoinItem (item) {
        this.$router.push('/CarItem')
        this.$store.commit('SET_CHAPTER', item)
      }
    }
   
  }
</script>
<style scoped >
.CartoonList {
  margin: 4% 0 12% 0;
  display: flex;
  flex-wrap: wrap;
}
.CartoonList span {
  font-size:.9rem;
  background: #fff;
  border: 1px solid #aaa;
  display: block;
  width: 46%;
  margin: 1% 2%;
  padding: 2% 4%;
  border-radius: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  -webkit-text-overflow: ellipsis;
  -moz-text-overflow: ellipsis;
  white-space: nowrap;
}
.otherData{
  font-size: .9rem;
  color:#888;
  padding: 0 3%;
  margin-top: 4%;
  display: flex;
  justify-content: space-between;
}
.otherData p{
  display: flex;
  justify-content: center;
  align-items: center;
}
.otherData p span{
  margin-left:4px;
}
</style>

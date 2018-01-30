<template>
    <div id="CartoonList" >
      <template v-if="ComItem.length != 0">
        <div class="DelText">
          <h2>作品简介</h2>
        <p>
          {{ComItem.comic.description}}
        </p> 
        </div>
      </template>
    </div>
</template>

<script>
  export default {
    name: 'CartoonList',
    data () {
      return {
        ComId: '',
        ComItem: []
      }
    },
    created () {
      this.ComId = this.$store.getters.GET_COMID
      var _this = this
      this.$http.get(this.baseUrl + '/api/detail?comicid=' + this.ComId).then(function (response) {
        if (response.data) {
          _this.ComItem = response.data.data.returnData
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
</script>
<style scoped >
.DelText {
  padding: 0 2%;
  padding-top: 2%;
  position: relative;
  z-index: 100;
  font-size: 0.9rem;
  line-height: 1.2rem;
  overflow: hidden;
 
}
.DelText h2 {
  font-weight: bold;
  line-height: 2rem;
  font-size: 1rem;
  letter-spacing: 1px;
}
.DelText p{
  text-indent: 2em;
  line-height: 1.4rem;
}
</style>

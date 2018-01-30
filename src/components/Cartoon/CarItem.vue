<template>
    <div id="CartoonItem">
        <div class="backBtn" @click="RouteBack"> 
          <Icon name="chevron-left"></Icon> <span>返回</span>
        </div>
        <ul>
            <li v-for='(items, index) in chapter_Item' :key=index>
                <img :src=items.location alt="">
            </li>
        </ul>
    </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
export default {
  name: 'CartoonItem',
  data () {
    return {
      chapter_id: [],
      chapter_Item: []
    }
  },
  created () {
    this.chapter_id = this.$store.getters.GET_CHAPTER
    var _this = this
    this.$http
      .get(this.baseUrl + '/api/CateItem?chapter_id=' + this.chapter_id)
      .then(function (response) {
        if (response.data) {
          _this.chapter_Item = response.data.data.returnData.image_list
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
    RouteBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped >
#CartoonItem {
  position: absolute;
  width: 100%;
  height: 100%;
}
#CartoonItem ul {
  margin-top: 3rem;
  height: 100%;
}
img {
  width: 100%;
}
.backBtn {
  background: #6699CC;
  display: flex;
  align-items: center;
  position:fixed;
  z-index: 102;
  width: 100%;
  padding: 4% 2%;
  font-size: 1rem;
  letter-spacing: 1px;
  margin-bottom: 2%;
  color: #efefef;
}
.backBtn span {
  font-size: 0.8rem;
  margin-left: 6px;
}
</style>

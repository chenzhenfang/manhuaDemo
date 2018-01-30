<template>
 <transition name="fade">
    <div id='Other'>
       <div class='backBtn' @click='RouteBack'> 
          <Icon name='chevron-left'></Icon> <span>返回</span>
        </div>
        <div class='OtherCon'>
          <ul>
            <li v-for='(item, index) in other' :key='index' @click="RecomFun(item.comicId)">
              <div class='otherLeft'>
                <img :src=item.cover >
              </div>
              <div class='otherRight'>
                 <h2>{{item.name}}</h2>
                 <p>{{item.description}}</p>              
                <span>作者 {{item.author}}</span>
                <!-- <span class="OtherHot">热度 {{item.conTag | CheckHot }} 万</span> -->
              </div>
            </li>
          </ul>
        </div>
    </div>
 </transition>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
export default {
  name: 'Other',
  data () {
    return {
      argValue: '',
      argName: '',
      other: []
    }
  },
  filters: {
    CheckHot (value) {
      return (value / 10000).toFixed(2)
    }
  },
  created () {
    this.argValue = this.$store.state.argValue
    this.argName = this.$store.state.argName
    var _this = this
    this.$http
      .get(
        this.baseUrl + '/api/homeBtn?' + 'argName=' + this.argName + '&argValue=' + this.argValue)
      .then(function (response) {
        if (response.data) {
          _this.other = response.data.data.returnData.comics
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
    },
    RecomFun (remItem) {
      console.log(remItem)
      this.$router.push('/Cartoon')
      this.$store.commit('SET_COMID', remItem)
    }
  }
}
</script>
<style scoped>
#Other {
  width: 100%;
  position: absolute;
  min-height: 100%;
}
img {
  width: 100%;
}
.backBtn {
  background: #6699cc;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: fixed;
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
.OtherCon {
  margin-top: 3rem;
}

#Other ul {
  width: 100%;
}
#Other ul li {
  padding: 2%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid #ccc;
}
#Other ul li:last-child{
   border-bottom: 0;
}
#Other ul li .otherLeft {
  display: -webkit-box;
  box-sizing: border-box;
  width: 40%;
  margin-right:4%;
}
#Other ul li .otherRight {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60%;
  padding-right: 2%;
}
#Other ul li .otherRight h2{
  letter-spacing: 2px;
  font-size:1.1rem;
}
#Other ul li .otherRight p {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size:.9rem;
  line-height: 1.2rem;
}
#Other ul li .otherRight span{
  font-size:.8rem;
}
#Other ul li .otherRight .OtherHot{
  color: #6699cc;
}
</style>

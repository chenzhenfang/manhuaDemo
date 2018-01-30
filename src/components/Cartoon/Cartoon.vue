<template>
 <transition name="fade">
  <div id="Cartoon">
    <keep-alive>
      <template v-if="ComItem.length != 0">
      <div class="ComHead" ref="name">
        <div class="ComBg" v-bind:style="{backgroundImage: 'url(' + ComItem.comic.cover + ')'}"></div>
        <div class="ComBgBlack"></div>
        <div class="backBtn" @click="RouteBack"> 
          <Icon name="chevron-left"></Icon> <span>返回</span>
        </div>
          <div class="ComText">
            <div class="ComImg">
              <img :src="ComItem.comic.cover" v-if="ComItem.comic.cover">
            </div>
            <div class="ComDel">
              <span>{{ComItem.comic.name}}</span>
              <span>{{ComItem.comic.author.name}}</span>
              <ul>
                <li v-for="(theme,index) in ComItem.comic.theme_ids" :key=index>{{theme}}</li>
              </ul>
            </div>
          </div>     
      </div>
      </template>
    </keep-alive>
    <carBar :class="searchBarFixed == true ? 'isFixed' :''"  ></carBar>
    <router-view></router-view>
  </div>
 </transition>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
import carBar from '@/components/Cartoon/CarBar'
export default {
  name: 'Cartoon',
  data () {
    return {
      ComId: '',
      ComItem: [],
      backBtn: '/',
      searchBarFixed: '',
      HeadeHeight: ''
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, false)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll, false)
  },
  created () {
    this.ComId = this.$store.getters.GET_COMID
    var _this = this
    this.$http
      .get(this.baseUrl + '/api/detail?comicid=' + this.ComId)
      .then(function (response) {
        if (response.data) {
          _this.ComItem = response.data.data.returnData
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    RouteBack () {
      this.$router.push(this.backBtn)
    },
    handleScroll () {
      if (this.$refs.name) {
        this.HeadeHeight = this.$refs.name.offsetHeight
      }
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var offsetTop = this.HeadeHeight
      if (scrollTop > offsetTop) {
        this.searchBarFixed = true
      } else {
        this.searchBarFixed = false
      }
    }
  },
  components: {
    carBar,
    Icon
  }
}
</script>
<style scoped>
.isFixed{
  position: fixed;
  top:0;
  left: 0;
  background: #000;
  margin:0 !important;
  z-index: 1000;
}
#Cartoon{
  /* position: absolute; */
  min-height: 100%;
  width: 100%;
  background: #fff;
}
.ComBg {
  z-index: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(8px);
}
.ComBgBlack {
  z-index: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}
#Cartoon .ComHead {
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  padding: 0 5% 5% 5%;
}

.ComHead .backBtn {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 102;
  padding: 4% 0;
  font-size: 1rem;
  letter-spacing: 1px;
  margin-bottom: 2%;
  color: #efefef;
}
.ComHead .backBtn span{
  font-size:.8rem;
  margin-left:6px;
}
.ComText {
  z-index: 100;
  display: flex;
}

.ComText .ComImg {
  z-index: 100;
  width: 35%;
}

.ComText .ComImg img {
  border-radius: 5px;
  border: 1px solid #fff;
  width: 100%;
}
.ComText .ComDel span {
  display: block;
  margin-bottom: 0.4rem;
}
.ComText .ComDel ul {
  display: flex;
}
.ComText .ComDel ul li {
  text-align: center;
  display: block;
  width: auto;
  box-sizing: border-box;
  margin-right: 4%;
  border: 1px solid #efefef;
  padding: 2%;
}
.ComDel {
  z-index: 100;
  margin-left: 5%;
  color: #efefef;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

</style>

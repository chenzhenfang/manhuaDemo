<template>
    <div id="Banner">
      <keep-alive>
        <!-- swiper -->
        <swiper :options="swiperOption">
          <swiper-slide v-for="(image,index) in bannerItem" :key=index>
            <img :src=image.cover>
          </swiper-slide>
          <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
      </keep-alive>    
    </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    name: 'banner',
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        bannerItem: [],
        swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          effect: 'fade',
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: true
          }
        }
      }
    },
    created () {
      var _this = this
      this.$http.get(this.baseUrl + '/api/home').then(function (response) {
        if (response.data) {
          _this.bannerItem = response.data.data.returnData.galleryItems
        }
      })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>
<style scoped>
    img{
      width: 100%;
    }
</style>

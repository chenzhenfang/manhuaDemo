<template>
    <div id="CarBar">
      <ul>
          <li v-for="(Caritem,index) in CarItem" :key=index @click="CarActive(Caritem.path)" :class="{Caractive: Caritem.path == active}">
              {{Caritem.title}}
          </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: 'CarBar',
      created () {
         this.active = this.$route.path
      },
      data () {
        return {
          active: '',
          CarItem: [
            {
              title: '详情',
              index: 1,
              path: '/Cartoon/CarDel'
            },
            {
              title: '目录',
              index: 2,
              path: '/Cartoon/CatList'
            }
          ]
        }
      },
      methods: {
        CarActive (cartext) {
          this.$store.commit('SET_CAR_BAR', cartext)
          this.active = this.$store.state.carBar
          this.$router.push(cartext)
        }
      }
    }
</script>
<style scoped >
    #CarBar{
        margin-top: 1%;
        width: 100%;
    }
    #CarBar ul{
       background: #efefef;
       display: flex;
    }
     #CarBar ul li{
         background: #fefefe;
         text-align: center;
         flex:1;
         padding: 3% 0;
         border-bottom: 1px solid #ccc;
     }
     .Caractive{
         color:#6699CC;
     }
</style>

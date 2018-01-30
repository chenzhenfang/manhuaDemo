<template>
    <div id="navBar" v-if="CheckNav">
      <ul>
        <li v-for="(item,index) in navTitle" @click.prevent="navSwitch(item,index)" :class="{active: activeName == index}" :key=index>
          <icon :name="item.icon"></icon>
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>
</template>

<script>
    import Icon from 'vue-awesome/components/Icon'
    export default {
      name: 'navbar',
      data () {
        return {
          activeName: '0',
          navTitle: [
            {
              title: '首页',
              path: '/',
              name: 'Home',
              icon: 'home'
            },
            {
              title: '分类',
              path: '/Category',
              name: 'Category',
              icon: 'cubes'
            },
            {
              title: '排行',
              path: '/Ranking',
              name: 'Ranking',
              icon: 'bar-chart'
            },
            {
              title: '登录',
              path: '/Login',
              name: 'Login',
              icon: 'user'
            }
          ]
        }
      },
      components: {
        Icon
      },
      methods: {
        navSwitch (item, index) {
          this.activeName = index
          this.$router.push(item.path)
          this.NavItem = this.$route.path
          this.$store.dispatch('select_Index', item)
          if (sessionStorage.getItem('user')) {
            this.$store.commit('SET_CHECK_ITEM', true)
          } else {
            this.$store.commit('SET_CHECK_ITEM', false)
          }
          console.log(this.$store.state.CheckItem)
        }
      },
      computed: {
        lastSelected () {
          return this.$store.getters.GET_SELECT_INDEX
        },
        CheckNav () {
          for (var itemss of this.navTitle) {
            if (itemss.path == this.$route.path) {
              return true
            }
          }
        }
      }
    }
</script>

<style scoped>
  .fa-icon {
    font-size:1rem;
    display: block;
    margin-bottom: .4rem;
    height: 1rem;
    width: 1rem;
  }
  #navBar{
    color: #888;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 1000;
  }
  #navBar > ul
  {
    width: 100%;
    display: flex;
    flex-direction: row;
    border-top: 1px solid #ccc;
  }
  #navBar > ul li
  {
    font-size: 0.8rem;
    padding: .6rem 0;
    text-align: center;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    letter-spacing: 2px;
  }
  .active
  {
    color: #6699CC;
  }
</style>

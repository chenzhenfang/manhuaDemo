<template>
  <div id="app">
       <router-view />
       <Navbar></Navbar>
  </div>
</template>

<script>
  import Navbar from '@/components/Home/Navbar'
  export default {
    name: 'app',
    components: {
      Navbar
    },
    created () {
      this.$router.push(this.$store.getters.GET_SELECT_INDEX)
    }
  }
</script>

<style>
@import 'reset-css/reset.css';
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  #app{
    font-family: "微软雅黑","Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #333;
    min-height: 100%;
    width: 100%;
    background: #f9f9f9;
    overflow-x: hidden;
  }
  .fade-enter-active, .fade-leave-active {
   transition: all .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 1;
    transform:translateX(100%)
  }
  .fade-leave-to {
    opacity: 0;
    transform:translateX(-100%)
  }
</style>

<template>
 <keep-alive> 
  <transition name="fade">
    <div id="Home">   
      <Banner></Banner>
      <Listmenu></Listmenu>
      <Listcontext></Listcontext>
    </div>
  </transition>
 </keep-alive>
</template>

<script>
    import Banner from '@/components/Home/Banner'
    import Listmenu from '@/components/Home/Listmenu'
    import Listcontext from '@/components/Home/Listcontext'
    export default {
      name: 'home',
      components: {
        Banner,
        Listmenu,
        Listcontext
      }
    }
</script>

<style scoped>
    #Home{
      position: absolute;
      width:100%;
      top:0;
      left:0;
      margin-bottom: 3rem;
    }
</style>

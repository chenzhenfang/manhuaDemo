<template>
<transition name="fade">
    <div id="Login">
      <LoginSuccess  v-if="this.$store.state.CheckItem"></LoginSuccess>
      <Loging v-else></Loging>
    </div>
</transition>
</template>
<script>
import Loging from '@/components/Login/LoginIn'
import LoginSuccess from '@/components/Login/LoginSuccess'
export default {
  name: 'Login',
  data () {
    return {
    }
  },
  components: {
    Loging,
    LoginSuccess
  }
}
</script>
<style scoped>
  #Login{
    position: absolute;
    min-height: 90%;
    width: 100%;
  }
</style>

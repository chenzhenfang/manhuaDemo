<template>
<transition name="fade">
  <div id="LoginSuccess">
        <button @click="Cancellation">注销登陆</button>
  </div>
</transition>
</template>
<script>
    export default {
      name: 'LoginSuccess',
      methods: {
        Cancellation () {
          this.$store.commit('SET_CHECK_ITEM', false)
          sessionStorage.removeItem('user')
          sessionStorage.removeItem('pwd')
          this.$router.push('/Login')
        }
      }
    }
</script>
<style scoped>
  #LoginSuccess {
    position: absolute;
    min-height:90%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    margin: 0 auto;
    border:none;
    width: 60%;
    padding: .6rem 0;
    border-radius: 1rem;
    color: #fff;
    background: #6699CC;
    box-shadow: 0 0 8px #6699CC;
    outline: none;
  }
  button:active{
    opacity: 0.7;
  }
</style>


<template>
<transition name='fade'>
  <div id='LoginIn'>
     <div class='loginBg'></div>
     <div class='loginInput'>
        <label for='UserName'>
          <input type='text' id='UserName' placeholder='请输入用户名' v-model='UserName'>
        </label>
        <label for='UserName'>
          <input type='password' id='pwd' placeholder='请输入密码' v-model='PassWord'>
        </label>
       <button id='LoginBtn' @click='LoginFun()'>
         登 录
       </button>
     </div>
  </div>
</transition>
</template>
<script>
    export default {
      name: 'Login',
      data () {
        return {
          UserName: '',
          PassWord: '',
          Admin: [
            {
              user: 'admin',
              pwd: 'admin'
            },
            {
              user: 'root',
              pwd: 'root'
            }
          ]
        }
      },
      methods: {
        LoginFun () {
          var AdminUser = [],
              AdminPwd = []
          for (var item of this.Admin) {
            AdminUser.push(item.user)
            AdminPwd.push(item.pwd)
          }
          if (this.UserName == '' || this.PassWord == '') {
            console.log('请输入')
          } if (this.UserName.length < 4 || this.PassWord.length < 4) {
            console.log('格式错误')
          } if (AdminUser.indexOf(this.UserName) == -1 || AdminPwd.indexOf(this.PassWord) == -1) {
            console.log('用户名或密码错误')
          }
          else {
            console.log('success')
            sessionStorage.setItem('user', this.UserName)
            sessionStorage.setItem('pwd', this.PassWord)
            if (sessionStorage.getItem('user')) {
              this.$store.commit('SET_CHECK_ITEM', true)
            } else {
              this.$store.commit('SET_CHECK_ITEM', false)
            }
            this.$router.push('/Login')
          }
        }
      }
    }
</script>
<style scoped>
  .loginBg {
    width: 100%;
    height: 8rem;
    background: url(../../../build/LoginBg.png) center top no-repeat;
    background-size: 14rem auto;
  }
  #LoginIn {
    width: 100%;
    position: absolute;
    min-height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .loginInput{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .loginInput label {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .loginInput label input{
    width: 60%;
    border-radius: .4rem;
    margin: 1rem auto;
    margin-top: 0;
    padding: 2% 4%;
    border: 1px solid #ccc;
    outline: none;
  }
  #LoginBtn{
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
  #LoginBtn:active{
    opacity: 0.7;
  }
</style>

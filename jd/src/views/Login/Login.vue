<template>
  <div class="wrapper">
    <div class="wrapper__img">
      <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="" />
    </div>
    <div class="wrapper__div">
      <input
        class="wrapper__div__input"
        type="text"
        placeholder="请输入用户名"
        v-model="loginData.username"
      />
    </div>
    <div class="wrapper__div">
      <input
        class="wrapper__div__input"
        type="text"
        placeholder="请输入密码"
        v-model="loginData.password"
      />
    </div>
    <div class="wrapper__button" @click="sylogin">登录</div>
    <div class="wrapper__register">忘记密码</div>
  </div>
</template>

<script>
import router from '../../router'
import { post } from '../../utils/post'

export const loginEfficiency = () => {
  const loginData = {
    username: '',
    password: ''
  }
  const sylogin = () => {
    console.log('登录')
    post('/user/login?responseId=730899', loginData)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    localStorage.isLogin = true
    router.push({ name: 'Home' })
  }
  return { loginData, sylogin }
}

export default {
  name: 'Login',
  setup() {
    const { loginData, sylogin } = loginEfficiency()
    return { loginData, sylogin }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  font-size: 0.14rem;
  &__img {
    display: block;
    width: 0.64rem;
    height: 0.64rem;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  &__div {
    margin: 0.2rem 0.4rem;
    border-radius: 0.55rem;
    overflow: hidden;
    &__input {
      box-sizing: border-box;
      background-color: rgba($color: #000, $alpha: 0.1);
      width: 100%;
      height: 0.49rem;
      margin: 0 auto;
      padding: 0 0.2rem;
      outline: none;
      border: none;
    }
  }
  &__button {
    box-sizing: border-box;
    color: #fff;
    text-align: center;
    line-height: 0.49rem;
    margin: 0.2rem 0.4rem;
    height: 0.49rem;
    background-color: blue;
    border-radius: 0.55rem;
  }
  &__register {
    color: rgba($color: #000000, $alpha: 0.5);
    width: 100%;
    text-align: center;
  }
}
</style>

<template>
  <img alt="Vue logo" src="./assets/logo.png">




  <div id="container">




    <div class="main" id="main">



      <input type="checkbox" id="chk">


      <RegisterForm />
      <LoginFrom />

    </div>
  </div>
</template>

<script>

import LoginFrom from './components/LoginFrom.vue';
import RegisterForm from './components/RegisterForm.vue';


export default {
  name: 'App',
  components: {
    LoginFrom,
    RegisterForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>



<template>
  
  <div class="login">

<label for="chk" class="log">ورود</label>



<div class="user-box">

    <input v-model="userIdentity" type="text" title="نام کاربری/ایمیل/تلفن" id="username2" required>

    <label>نام کاربری/ایمیل/تلفن</label>

</div>

<div class="user-box">

    <input v-model="password" type="password" title="رمز عبور" id="password2" required>

    <label>رمز عبور</label>

</div>
<div class="user-box">
     <a href="#">فراموشی رمز عبور</a>
</div>
<button @click="login()" id="button2">ورود</button>

</div>

</template>

<script>
export default {
data() {
  return {
    userIdentity:"",
    password:"",
  }
},
methods: {
  login(){
    console.log(this.userIdentity);
    console.log(this.password);
  }
},
}
</script>

<style>

</style>
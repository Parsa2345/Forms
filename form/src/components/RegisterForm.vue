
<template>
  <div class="signup">
    <h4 for="chk" class="sig">ثبت نام</h4>
    <div>
    <div class="col-md-12">
<div  class="user-box">
        <input type="text" name="userNsme"  title="نام کاربری خود را وارد کنید" id="username" required autocomplete="off">
        <label id="usernameLabel">نام کاربری</label>
        <img src="https://raw.githubusercontent.com/Ahmed-Massoud/Login-and-sign-up-form/main/logo.svg" alt="Logo" class="logo-img" id="userIcon" />
        <i></i>
    </div>
    </div>
    <div class="col-md-12">
        <div   class="user-box">
        <input type="password" title="رمز عبور خود را وارد کنید" id="password" required autocomplete="off">
        <label id="passwordLabel">Password</label>
        <img src="https://raw.githubusercontent.com/Ahmed-Massoud/Login-and-sign-up-form/main/logo.svg" alt="Logo" class="logo-img" id="passIcon">
    </div>
    </div>
    <div class="col-md-12">
        <div   class="user-box">
        <input type="password" title="رمز عبور خود را وارد کنید" id="password" required autocomplete="off">
        <label id="passwordLabel">Password</label>
        <img src="https://raw.githubusercontent.com/Ahmed-Massoud/Login-and-sign-up-form/main/logo.svg" alt="Logo" class="logo-img" id="passIcon">
    </div>
    </div>
    <div class="col-md-12">
        <div  class="user-box">
        <input type="text" title="ایمیل خود را وارد کنید" id="email" required autocomplete="off">
        <label id="emailLabel">Email</label>
        <img src="https://raw.githubusercontent.com/Ahmed-Massoud/Login-and-sign-up-form/main/logo.svg" alt="Logo" class="logo-img" id="emailIcon">
    </div>
    </div>
    <div class="col-md-6"></div>
    <div class="col-md-6"></div>
</div>
    <div >

    </div>

  

    <button onclick="check()" id="button">ثبت نام</button>

</div>


</template>

<script>
export default {

    data() {
        return {
            userName:"",
            password:"",
            confirmPassword:"",
            email:"",
            gender:"",
            role:"",
            phoneNumber:""
        }
    },

}
</script>

<style>

</style>
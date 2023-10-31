

<template>
  <div class="login">

    <label for="chk" class="log">ورود</label>

    <Form @submit="login">
      <div class="user-box">
         <Field name="userIdentity"  type="email" :rules="validateEmail" />
             
     <p class="text-danger"><ErrorMessage name="userIdentity" /></p> 
    </div>
      <div class="user-box">
         <Field name="myPassword" type="password" :rules="validatePassword" />
             
     <p class="text-danger"><ErrorMessage name="myPassword" /></p> 
    </div>
      <button>Sign up</button>
    </Form>

    <!-- <div class="user-box">

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
-->
  </div> 
</template>

<script>

import {  Form,Field, ErrorMessage } from 'vee-validate';
export default {
  components: {
     Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      userIdentity: "",
      myPassword: "",
    }
  },
  methods: {
    // login(value) {
    //   console.log(value);
    //   console.log(JSON.stringify(value, null, 2));
    //   // console.log(this.userIdentity);
    //   // console.log(this.password);
    // },
    validateEmail(value) {
      
      console.log(value);
      // if the field is empty
      if (!value) {
        return "لطفا ایمیل را وارد نمایید";
      }

      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'ایمیل مورد تایید نمی باشد';
      }

      // All is good
      return true;
    },
    validatePassword(value){
      console.log(value);
      if (!value) {
        return "لطفا رمزعبور را وارد نمایید";
      }
      if (value.length<8) {
        return "رمز عبور حداقل 8 کارکتر می باشد";
      }
      // All is good
      return true;
    },
  },
}
</script>

<style></style>
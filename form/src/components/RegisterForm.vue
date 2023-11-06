
<template>
    <div class="signup" style="overflow:scroll">
        <label for="chk" class="sig">ثبت نام</label>
        <div class="row ">
            <div class="col-12 col-lg-6 col-md-6">
                <div class="user-box">
                    <input v-model="userName" type="text" name="userName" title="نام کاربری خود را وارد کنید" id="username"
                        required autocomplete="off">
                    <label id="usernameLabel">نام کاربری</label>
                    <img src="https://raw.githubusercontent.com/Ahmed-Massoud/Login-and-sign-up-form/main/logo.svg"
                        alt="Logo" class="logo-img" id="userIcon" title="نام کاربری خود را وارد کنید" />
                    <i></i>
                </div>
            </div>
            <div class="col-12 col-lg-6 col-md-6">
                <div class="user-box">
                    <input v-model="password" type="password" title="رمز عبور خود را وارد کنید" id="password" required
                        autocomplete="off">
                    <label id="passwordLabel">رمز عبور</label>
                    <img src="https://raw.githubusercontent.com/Ahmed-Massoud/Login-and-sign-up-form/main/logo.svg"
                        alt="Logo" class="logo-img" id="passIcon" title="رمز عبور خود را وارد کنید">
                </div>
            </div>
            <div class="col-12 col-lg-6 col-md-6">
                <div class="user-box">
                    <input v-model="confirmPassword" type="password" title="رمز عبور خود را تکرار کنید" id="confirmPassword"
                        required autocomplete="off">
                    <label id="passwordLabel" style="font-size: x-small;">تکرار رمز عبور</label>
                    <img src="https://raw.githubusercontent.com/Ahmed-Massoud/Login-and-sign-up-form/main/logo.svg"
                        alt="Logo" class="logo-img" id="passIcon" title="رمز عبور خود را تکرار کنید">
                </div>
            </div>
            <div class="col-12 col-lg-6 col-md-6">
                <div class="user-box">
                    <input v-model="email" type="text" title="ایمیل خود را وارد کنید" id="email" required
                        autocomplete="off">
                    <label id="emailLabel">ایمیل</label>
                    <img src="https://raw.githubusercontent.com/Ahmed-Massoud/Login-and-sign-up-form/main/logo.svg"
                        alt="Logo" class="logo-img" id="emailIcon" title="ایمیل خود را وارد کنید">
                </div>
            </div>
            <div class="col-12 col-lg-6 col-md-4">
                <div class="user-box">
                    <input v-model="phoneNumber" type="text" title="تلفن خود را وارد کنید" minlength="11" maxlength="11"
                        id="phoneNumber" required autocomplete="off">
                    <label id="emailLabel">تلفن</label>
                    <img src="https://raw.githubusercontent.com/Ahmed-Massoud/Login-and-sign-up-form/main/logo.svg"
                        alt="Logo" class="logo-img" id="emailIcon" title="تلفن خود را وارد کنید">
                </div>
            </div>
            <div class="col-12 col-lg-6 col-md-4">
                <div class="user-box">
                    <select v-model="role" name="نقش خود را مشخص کنید" id="role" class="form-style">
                        <option class="user-box" value=" ">کاربری</option>
                        <option class="user-box">منتور</option>
                        <option class="user-box">مربی</option>
                        <option class="user-box">استفاده شخصی</option>
                    </select>
                </div>
            </div>
            <div class="col-12 col-lg-12 col-md-4">
                <div style="text-align:right ;">
                    <label for="1">نامشخص
                    </label>
                    <input v-model="gender" id="1" type="radio" value="نامشخص" name="gender" class="m-2" />
                    <label for="2">خانم
                    </label>
                    <input v-model="gender" id="2" type="radio" value="خانم " name="female" class="m-2" />
                    <label for="3">آقا
                    </label>
                    <input v-model="gender" id="3" type="radio" value="آقا" name="male" class="m-2" />

                </div>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
            <div class="col-md-6">
                <p></p>
                <p></p>
            </div>
        </div>
        <div>

        </div>



        <button @click="register" id="button">ثبت نام</button>

    </div>
</template>

<script>
export default {

    data() {
        return {
            userName: "",
            password: "",
            confirmPassword: "",
            email: "",
            gender: "نامشخص",
            role: "",
            phoneNumber: ""
        }
    },

    methods: {
        register() {

            if (this.validations()) {


                console.log(this.validations);
                console.log(this.userName);
                console.log(this.password);
                console.log(this.confirmPassword);
                console.log(this.email);
                console.log(this.gender);
                console.log(this.role);
                console.log(this.phoneNumber);
            }
        },
        validations() {

            if (validateEmail(this.email) != true) {
                this.$toast.error(" ایمیل مورد تایید نمی باشد");
                return false;
            }
            if (!this.phoneNumber) {
                this.$toast.error("شماره تلفن مورد تایید نمی باشد");
                return false;
            }
            else if (!this.userName) {
                this.$toast.error("نام کاربری مورد تایید نمی باشد");
                return false;

            }
            else if (!this.password) {
                this.$toast.error("رمز عبور مورد تایید نمی باشد");
                return false;

            }
            else if (!this.confirmPassword) {
                this.$toast.error("تکرار رمز عبور مورد تایید نمی باشد");
                return false;

            }
            else if (!this.gender) {
                this.$toast.error("جنسیت مورد تایید نمی باشد");
                return false;

            }
            else if (!this.role) {
                this.$toast.error("کاربری مورد تایید نمی باشد");
                return false;

            }
            else {
                return true;
            }

        }
    }
}
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);


}

// function phonenumber(inputtxt) {
//     var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//     if (inputtxt.value.match(phoneno)) {
//         return true;
//     }

</script>
 
<template>
  <div class="authentication-wrapper authentication-cover authentication-bg">
    <div class="authentication-inner row">
      <div class="d-none d-lg-flex col-lg-8 p-0 bg-left align-items-center justify-content-center">
        <div class="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
          <!-- <img
            src="../../assets/images/bg.jpg"
            alt="auth-login-cover"
            class="img-fluid auth-illustration"
            data-app-light-img="illustrations/auth-login-illustration-light.png"
            data-app-dark-img="illustrations/auth-login-illustration-dark.png"
          /> -->
        </div>
      </div>

      <div class="d-flex col-12 col-lg-4 align-items-center p-sm-5 p-4 login-form">
        <div class="w-px-400 mx-auto">
          <div class="app-brand mb-4">
            <a href="javascript:void(0);" class="app-brand-link gap-2">
              <img src="../../assets/logos/camarin-logo.png" height="90px" width="90px" class="img-fluid" />
            </a>
          </div>
          <p class="cdh-text fw-bolder fs-3 mb-1">Camarin Doctos Hospital</p>
          <h3 class="mb-2 fw-bold">Clinic Information System</h3>
          <p class="mb-3">Please login your account.</p>

          <form class="mb-3" @submit.prevent="login()">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="text" class="form-control" id="email" name="email-username" v-model="formData.email" />
            </div>
            <div class="mb-3 form-password-toggle">
              <div class="d-flex justify-content-between">
                <label class="form-label" for="password">Password</label>
                <!-- <a href="auth-forgot-password-cover.html">
                  <small>Forgot Password?</small>
                </a> -->
              </div>
              <div class="mb-3 input-group input-group-merge">
                <input :type="eyed ? 'text' : 'password'" id="password" class="form-control" name="password"
                  aria-describedby="password" v-model="formData.password" />
                <span class="input-group-text cursor-pointer" @click="eyed = !eyed"><i class="ti"
                    :class="eyed ? 'ti-eye' : 'ti-eye-off'"></i></span>
              </div>
            </div>


            <button type="submit" class="mt-2 btn btn-twitter w-100 gap-1" :disabled="isLoading">
              <span v-if="isLoading" class="spinner-border me-1" role="status" aria-hidden="true"></span>
              {{ isLoading ? "Logging In..." : "Login" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, inject, onMounted, watch } from "vue";
import "@/assets/vendor/css/pages/page-auth.css";
import api from "@/api";
import Cookies from "js-cookie";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import CryptoJS from "crypto-js";
import { swalMessage } from "@/service";

export default defineComponent({
  name: "Auth",
  setup() {
    const store = useStore();
    const swal = inject("$swal");
    const router = useRouter();

    const formData = computed(() => store.getters.getLoginForm);
    const user = computed(() => store.getters.getAuthenticatedUser);

    const isLoading = ref(false);
    const login = async () => {
      if (!formData.value.email || !formData.value.password) {
        swalMessage(
          swal,
          "Warning",
          "Email and Password are Required!",
          "warning"
        );
        return;
      }
      isLoading.value = true;
      try {
        const response = await api.post("/auth/login", {
          email: formData.value.email,
          password: formData.value.password,
        });

        if (response.data.authorization && response.data.authorization.token) {
          try {
            const token = response.data.authorization.token;
            const userData = JSON.stringify(response.data.user);

            const password = import.meta.env.VITE_CRYPTO_SECRET_KEY;
            const encryptedData = CryptoJS.AES.encrypt(
              userData,
              password
            ).toString();
            console.log(encryptedData);
            Cookies.set("auth_token", token, { expires: 4 / 24 });
            localStorage.setItem("ajioasdmianc8a79sdy0", token);
            localStorage.setItem("userData", encryptedData);
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            router.push({ name: "dashboard" });
            isLoading.value = false;
          } catch (error) {
            console.error("Error storing token in cookie:", error);
          }
        }
      } catch (error) {
        user.value = error.response.data.message;
        swal({
          title: "Login Failed",
          text: "Invalid email or password",
          icon: "error",
        }).then(() => {
          isLoading.value = false;
        });
      }
    };

    const eyed = ref(false);

    onMounted(() => {
      isLoading.value = false
      store.commit("resetLoginForm");
    });

    return { formData, login, isLoading, eyed };
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

.bg-left {
  background-color: #43BDF5 !important;
}

.auth-cover-bg {
  margin: 2rem !important;
  background: url("../../assets/images/cdh-bg.png");
  background-size: cover;
  background-position: center;
  box-shadow: 10px 10px 31px -1px rgba(0, 0, 0, 0.52);
  -webkit-box-shadow: 10px 10px 31px -1px rgba(0, 0, 0, 0.52);
  -moz-box-shadow: 10px 10px 31px -1px rgba(0, 0, 0, 0.52);
}

.cdh-text {
  color: #2E478A;
}
</style>

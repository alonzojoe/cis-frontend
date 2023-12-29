<template>
  <div class="authentication-wrapper authentication-cover authentication-bg">
    <div class="authentication-inner row">
      <div
        class="d-none d-lg-flex col-lg-8 p-0 bg-left align-items-center justify-content-center"
      >
        <div
          class="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center"
        ></div>
      </div>

      <div
        class="d-flex col-12 col-lg-4 align-items-center p-sm-5 p-4 login-form"
      >
        <div class="w-px-400 mx-auto">
          <div class="app-brand mb-4">
            <a href="javascript:void(0);" class="app-brand-link gap-2">
              <img
                src="../../assets/logos/camarin-logo-white.png"
                height="90px"
                width="90px"
                class="img-fluid"
              />
            </a>
          </div>
          <p class="cdh-text fw-bolder fs-3 mb-1">Camarin Doctors Hospital</p>
          <h3 class="mb-2 fw-bold">Clinic Information System</h3>
          <p class="mb-3">Please login your account.</p>

          <form class="mb-3" @submit.prevent="login()">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="text"
                class="form-control"
                id="email"
                name="email-username"
                v-model="formData.email"
              />
            </div>
            <div class="mb-3 form-password-toggle">
              <div class="d-flex justify-content-between">
                <label class="form-label" for="password">Password</label>
                <a href="javascript:void(0);" @click="forgotPassword()">
                  <small>Forgot Password?</small>
                </a>
              </div>
              <div class="mb-3 input-group input-group-merge">
                <input
                  :type="eyedPw ? 'text' : 'password'"
                  id="password"
                  class="form-control"
                  name="password"
                  aria-describedby="password"
                  v-model="formData.password"
                />
                <span
                  class="input-group-text cursor-pointer"
                  @click="eyedPw = !eyedPw"
                  ><i class="ti" :class="eyedPw ? 'ti-eye' : 'ti-eye-off'"></i
                ></span>
              </div>
            </div>

            <button
              type="submit"
              class="mt-2 btn btn-twitter w-100 gap-1"
              :disabled="isLoading"
            >
              <span
                v-if="isLoading"
                class="spinner-border me-1"
                role="status"
                aria-hidden="true"
              ></span>
              {{ isLoading ? "Logging In..." : "Login" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <modal-sm :details="modalDetails" @close-modal="modalDetails.show = false">
    <div class="row my-5">
      <div class="col-12">
        <form class="mx-5" v-if="step == 1">
          <div class="mb-3">
            <label for="exampleInputEmail2" class="form-label">Email</label>
            <input
              type="email"
              v-model="forgotEmail"
              class="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              required
            />
          </div>

          <button
            @click.prevent="sendOTP()"
            type="submit"
            class="btn btn-primary w-100 py-8 mb-4 rounded-2"
            :disabled="isLoadingOtp"
          >
            <div
              v-if="isLoadingOtp"
              class="spinner-border spinner-border-sm text-light"
              role="status"
            ></div>
            <span class="text-text-light ml-1">{{
              isLoadingOtp ? "Sending, Please Wait ...." : "Send OTP"
            }}</span>
          </button>
        </form>
        <form class="mx-5" v-else-if="step == 2">
          <div class="mb-3">
            <label for="exampleInputEmail2" class="form-label">Email</label>
            <input
              type="email"
              v-model="formChange.email"
              class="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              disabled
              required
            />
          </div>
          <div class="mb-4">
            <label for="exampleInputPassword3" class="form-label">OTP</label>
            <input
              type="text"
              v-model="formChange.otp"
              maxlength="6"
              class="form-control"
              id="exampleInputPassword3"
              required
            />
          </div>
          <div class="mb-4">
            <label for="exampleInputPassword3" class="form-label"
              >New Password
              <span class="text-danger fs-6"
                >&nbsp;&nbsp;&nbsp;(minimum 6 characters)</span
              ></label
            >
            <div class="input-group">
              <input
                :type="eyed.fpass ? 'text' : 'password'"
                class="form-control"
                v-model="formChange.password"
                placeholder=""
                aria-label=""
                aria-describedby="basic-addon1"
                required
              />
              <button
                class="btn btn-light-primary text-primary"
                type="button"
                @click="eyed.fpass = !eyed.fpass"
              >
                <i
                  class="ti fs-6"
                  :class="eyed.fpass ? 'ti-eye-off' : 'ti-eye'"
                ></i>
              </button>
            </div>
          </div>
          <div class="mb-4">
            <label for="exampleInputPassword3" class="form-label"
              >Confirm Password</label
            >
            <div class="input-group">
              <input
                :type="eyed.fconf ? 'text' : 'password'"
                class="form-control"
                v-model="formChange.confirm"
                placeholder=""
                aria-label=""
                aria-describedby="basic-addon1"
                required
              />
              <button
                class="btn btn-light-primary text-primary"
                type="button"
                @click="eyed.fconf = !eyed.fconf"
              >
                <i
                  class="ti fs-6"
                  :class="eyed.fconf ? 'ti-eye-off' : 'ti-eye'"
                ></i>
              </button>
            </div>
          </div>

          <button
            @click.prevent="changePassword()"
            type="submit"
            class="btn btn-primary w-100 py-8 mb-4 rounded-2"
            :disabled="isLoadingOtp || !enableChange"
          >
            <div
              v-if="isLoadingOtp"
              class="spinner-border spinner-border-sm text-light"
              role="status"
            ></div>
            <span class="text-text-light ml-1">{{
              isLoadingOtp ? "Loading ...." : "Change Password"
            }}</span>
          </button>
        </form>
      </div>
    </div>
  </modal-sm>
</template>

<script lang="ts">
import { defineComponent, ref, computed, inject, onMounted, watch } from "vue";
import "@/assets/vendor/css/pages/page-auth.css";
import api from "@/api";
import Cookies from "js-cookie";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import CryptoJS from "crypto-js";
import { swalMessage, swalConfirmation } from "@/service";
import ModalSm from "@/components/Modals/ModalSm.vue";
export default defineComponent({
  name: "Auth",
  components: {
    ModalSm,
  },
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
            Cookies.set("auth_token", token);
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

    const eyedPw = ref(false);

    const eyed = ref({
      pass: false,
      fpass: false,
      fconf: false,
    });

    const resetEyed = () => {
      Object.keys(eyed.value).forEach((e) => (eyed.value[e] = false));
    };

    const modalDetails = ref({
      show: false,
      title: "Forgot Password",
    });

    const forgotEmail = ref("");
    const step = ref(1);
    const forgotPassword = () => {
      forgotResetter();
      modalDetails.value.show = true;
      step.value = 1;
      console.log(modalDetails.value);
    };

    const isLoadingOtp = ref(false);
    const sendOTP = async () => {
      if (!forgotEmail.value) {
        swalMessage(swal, "Warning", `Email is Required!`, `warning`);
        return;
      }

      isLoadingOtp.value = true;
      try {
        const response = await api.post("auth/forgot", {
          email: forgotEmail.value,
        });
        swalMessage(
          swal,
          "Information",
          `${response.data.message}`,
          `success`
        ).then(() => {
          step.value = 2;
          isLoadingOtp.value = false;
          formChange.value.email = forgotEmail.value;
        });
      } catch (error) {
        swalMessage(
          swal,
          "Warning",
          `${error.response.data.message}`,
          `warning`
        ).then(() => {
          isLoadingOtp.value = false;
        });
      }
    };

    const formChange = ref({
      email: "",
      password: "",
      confirm: "",
      otp: "",
    });

    const resetFormChange = () => {
      Object.keys(formChange.value).forEach((e) => {
        formChange.value[e] = "";
      });
    };

    const forgotResetter = () => {
      isLoadingOtp.value = false;
      step.value = 1;
      forgotEmail.value = "";
      resetFormChange();
    };

    const validator = () => {
      if (
        !formChange.value.password ||
        !formChange.value.confirm ||
        !formChange.value.otp
      ) {
        swalMessage(
          swal,
          "Warning",
          "Please fill all required fields.",
          "warning"
        );
        return false;
      } else if (formChange.value.password.length < 6) {
        swalMessage(
          swal,
          "Warning",
          "Password is too short, mininum 6 characters.",
          "warning"
        );
        return false;
      } else if (formChange.value.password != formChange.value.confirm) {
        swalMessage(swal, "Warning", `Password doesn't match`, "warning");
        return false;
      }

      return true;
    };

    const enableChange = ref(false);

    watch(() => {
      formChange.value;
      for (const key in formChange.value) {
        if (formChange.value[key] === "") {
          enableChange.value = false;
        } else {
          enableChange.value = true;
        }
      }
    });

    const changePassword = async () => {
      if (!validator()) return;
      isLoadingOtp.value = true;
      try {
        const response = await api.post("auth/reset", {
          email: formChange.value.email,
          password: formChange.value.password,
          otp: formChange.value.otp,
        });
        swalMessage(
          swal,
          "Information",
          `${response.data.message}, Please proceed to login`,
          `success`
        ).then(() => {
          isLoadingOtp.value = false;
          modalDetails.value.show = false;
        });
      } catch (error) {
        swalMessage(
          swal,
          "Warning",
          `${error.response.data.message}`,
          `warning`
        ).then(() => {
          isLoadingOtp.value = false;
        });
      }
    };

    onMounted(() => {
      resetEyed();
      resetFormChange();
      isLoading.value = false;
      store.commit("resetLoginForm");
    });

    return {
      formData,
      login,
      isLoading,
      eyedPw,
      modalDetails,
      forgotPassword,
      forgotEmail,
      sendOTP,
      isLoadingOtp,
      step,
      formChange,
      eyed,
      changePassword,
      enableChange,
    };
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

.bg-left {
  background-color: #43bdf5 !important;
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
  color: #2e478a;
}
</style>

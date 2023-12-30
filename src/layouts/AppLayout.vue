<template>
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <!-- Sidebar -->
      <sidebar @close-expanded="updateExpanded" />
      <!-- / Sidebar -->
      <div class="layout-page">
        <!-- Navbar -->
        <navbar :expanded="navExpanded" ref="navbar" />
        <!-- / Navbar -->
        <!-- Content wrapper -->
        <div class="content-wrapper">
   
          <div class="flex-grow-1 container-p-y container-fluid my-0">
            <router-view />
          </div>
          <!-- Footer -->
          <!-- / Footer -->
          <div class="content-backdrop fade"></div>
        </div>
        <!-- Content wrapper -->
      </div>
    </div>
    <div class="layout-overlay layout-menu-toggle"></div>
    <div class="drag-target"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch, ref, inject, provide, watchEffect } from "vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Footer from "@/components/Footer/Footer.vue";
import api from '@/api';
import { useStore } from "vuex";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  components: {
    Navbar,
    Sidebar,
    Footer
  },
  setup() {
    const auth = ref(Cookies.get("auth_token"));
    const swal = inject("$swal");
    const router = useRouter();
    const route = useRoute();
    const hoverNav = (type) => {
      const htmlTag = document.querySelector("html");
      if (type == 1) {
        htmlTag.classList.add("layout-menu-hover");
      } else {
        htmlTag.classList.remove("layout-menu-hover");
      }
    };

    const navbar = ref("");

    const navExpanded = ref("");
    const updateExpanded = (bool) => {
      navExpanded.value = bool;
      navbar.value.setExpanded();
    };
    const store = useStore();
    onMounted(async () => {

      const token = Cookies.get("auth_token");
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      try {
        const response = await api.post("/auth/me");

        if (response.data.user) {
          // console.log("current user response", response.data.user);
        }
      } catch (error) {
        // console.log(error.response.status);
        // console.log(error.response.statusText);

        api.defaults.headers.common["Authorization"] = "";
        Cookies.remove("auth_token");
        localStorage.removeItem("userData");
        localStorage.removeItem("ajioasdmianc8a79sdy0");
        router.push({ name: "auth" });
      }

      const encryptedData = localStorage.getItem("userData");
      const password = import.meta.env.VITE_CRYPTO_SECRET_KEY;
      try {
        const bytes = CryptoJS.AES.decrypt(encryptedData, password);
        if (bytes.toString()) {
          const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
          provide("user", decryptedData);
          store.commit("setAuthenticatedUser", decryptedData);
          // console.log("app layout setup");
        } else {
          // console.error("Decryption failed. Invalid password or data.");
        }
      } catch (error) {
        // console.error("Error decrypting data:", error);
      }

    })

    return { hoverNav, updateExpanded, navExpanded, navbar };
  },
});
</script>

<style scoped>
.layout-page::before {
  margin-bottom: 0 !important;
}
</style>

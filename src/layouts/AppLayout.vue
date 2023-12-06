<template>
  <!-- <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <sidebar />
      <div class="layout-page">
        <navbar />
        <div class="content-wrapper">
          <div class="container-xxl flex-grow-1 container-p-y">
            <router-view></router-view>
          </div>
        </div>
      </div>

      <div class="layout-overlay layout-menu-toggle"></div>
      <div class="drag-target"></div>
    </div>
  </div> -->
  <!-- Layout wrapper -->
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <!-- Menu -->

      <sidebar @close-expanded="updateExpanded" />
      <!-- / Menu -->

      <!-- Layout container -->
      <div class="layout-page">
        <!-- Navbar -->

        <navbar :expanded="navExpanded" ref="navbar" />

        <!-- / Navbar -->

        <!-- Content wrapper -->
        <div class="content-wrapper">
          <!-- Content -->

          <div class="flex-grow-1 container-p-y container-fluid my-0">
            <router-view />
          </div>
          <!-- / Content -->

          <!-- Footer -->
          <footer />
          <!-- / Footer -->

          <div class="content-backdrop fade"></div>
        </div>
        <!-- Content wrapper -->
      </div>
      <!-- / Layout page -->
    </div>

    <!-- Overlay -->
    <div class="layout-overlay layout-menu-toggle"></div>

    <!-- Drag Target Area To SlideIn Menu On Small Screens -->
    <div class="drag-target"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Footer from "@/components/Footer/Footer.vue"

export default defineComponent({
  components: {
    Navbar,
    Sidebar,
    Footer
  },
  setup() {
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

    return { hoverNav, updateExpanded, navExpanded, navbar };
  },
});
</script>

<style scoped>
.layout-page::before {
  margin-bottom: 0 !important;
}
</style>

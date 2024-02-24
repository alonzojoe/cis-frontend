<template>
  <div class="container-xxl container-p-y">
    <div class="misc-wrapper">
      <div class="mt-4">
        <img
          src="../../assets/images/404.png"
          alt="page-misc-error"
          width="400"
          class="img-fluid"
        />
      </div>
      <h2 class="mb-2 mt-4 fw-bolder">404 Page Not Found :(</h2>
      <p class="mb-4 mx-2 fs-5">
        Oops! 😖 The requested URL was not found on this server.
      </p>
      <router-link
        :to="{ name: 'dashboard' }"
        class="btn btn-primary mb-4 waves-effect waves-light"
        >Back to home</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "NotFound",
  setup() {
    const darkCss = "/theme/core-dark.css";

    let styleTag = null;
    const addDarkTheme = () => {
      const existingLinkTag = document.getElementById("dark-mode");

      if (!existingLinkTag) {
        const linkTag = document.createElement("link");
        linkTag.id = "dark-mode";
        linkTag.rel = "stylesheet";
        linkTag.href = `${darkCss}`;

        document.head.appendChild(linkTag);
      }
    };

    const removeDarkTheme = () => {
      const linkTag = document.getElementById("dark-mode");
      if (linkTag) {
        document.head.removeChild(linkTag);
      }
    };

    const appTheme = ref("");
    const body = document.body;
    const toggleChangeTheme = async (theme) => {
      appTheme.value = theme;
      localStorage.setItem("app-theme", theme);
      body.classList.add("fade-effect", "fade-out");
      if (theme == "dark-theme") {
        addDarkTheme();
      } else {
        removeDarkTheme();
      }
    };

    const mountedTheme = () => {
      const theme = localStorage.getItem("app-theme");
      theme == null || theme == "white-theme"
        ? toggleChangeTheme("white-theme")
        : toggleChangeTheme("dark-theme");
    };

    onMounted(() => {
      mountedTheme();
    });
    return {};
  },
});
</script>

<style scoped></style>

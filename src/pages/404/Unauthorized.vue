<template>
  <div class="container-xxl container-p-y">
    <div class="misc-wrapper">
      <div class="mt-4">
        <img src="../../assets/images/401.svg" alt="page-misc-error" width="400" class="img-fluid" />
      </div>
      <h2 class="mb-2 mt-4 fw-bolder">401 Unauthorized :(</h2>
      <p class="mb-4 mx-2 fs-5">
        "Oops! 😖 Sorry, you are not authorized to access this page.
      </p>
      <router-link :to="{ name: 'dashboard' }" class="btn btn-primary mb-4 waves-effect waves-light">Back to
        home</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "Unauthorized",
  setup() {

    const darkCss = new URL(
      "/src/assets/vendor/css/rtl/core-dark.css",
      import.meta.url
    );

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
    }

    const mountedTheme = () => {
      const theme = localStorage.getItem("app-theme");
      theme == null || theme == "white-theme"
        ? toggleChangeTheme("white-theme")
        : toggleChangeTheme("dark-theme");
    }

    onMounted(() => {
      mountedTheme()
    })

    return {};
  },
});
</script>

<style scoped></style>

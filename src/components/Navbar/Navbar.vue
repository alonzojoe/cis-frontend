<template>
  <nav
    class="m-0 rounded-0 w-auto layout-navbar navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme container-fluid"
    id="layout-navbar"
  >
    <div
      class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none"
    >
      <a
        class="nav-item nav-link px-0 me-xl-4"
        @click="toggleExpend"
        href="javascript:void(0)"
      >
        <i class="ti ti-menu-2 ti-sm"></i>
      </a>
    </div>

    <div
      class="navbar-nav-right d-flex align-items-center"
      id="navbar-collapse"
    >
      <!-- Search -->
      <div class="navbar-nav align-items-center">
        <div class="nav-item navbar-search-wrapper mb-0">
          <h4 class="mt-4 fw-bold">{{ route.meta.title }}</h4>
        </div>
      </div>
      <!-- /Search -->

      <ul class="navbar-nav flex-row align-items-center ms-auto">
        <!-- Language -->

        <li class="nav-item dropdown-language dropdown me-2 me-xl-0">
          <a
            class="nav-link hide-arrow"
            href="javascript:void(0);"
            @click="
              toggleChangeTheme(
                appTheme == 'dark-theme' ? 'white-theme' : 'dark-theme'
              )
            "
          >
            <i
              class="ti rounded-circle ti-md"
              :class="
                appTheme == 'dark-theme' ? 'ti-sun-filled' : 'ti-moon-filled'
              "
            ></i>
          </a>
        </li>
        <!--/ Language -->

        <!-- Style Switcher -->

        <!-- Notification -->

        <li
          class="nav-item dropdown-language dropdown me-2 me-xl-0"
          id="user-name"
        >
          <a class="nav-link hide-arrow" href="javascript:void(0);">
            <h5 class="mt-3 fw-semibold">JOENELL C. ALONZO</h5>
          </a>
        </li>

        <!-- User -->

        <li class="nav-item navbar-dropdown dropdown-user dropdown">
          <a
            class="nav-link dropdown-toggle hide-arrow"
            href="javascript:void(0);"
            data-bs-toggle="dropdown"
          >
            <div class="avatar avatar-online">
              <img
                src="../../assets/logos/avatar.jpeg"
                alt="user-avatar"
                class="h-auto rounded-circle"
              />
            </div>
          </a>
        </li>
        <!--/ User -->
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, watch, watchEffect } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  props: {
    expanded: Boolean,
  },
  setup(props: Boolean) {
    const route = useRoute();
    const isExpanded = ref(false);

    const toggleExpend = () => {
      isExpanded.value = !isExpanded.value ? true : false;
    };

    // layout-menu-expanded
    watch(() => {
      isExpanded.value;
      const htmlTag = document.querySelector("html");
      if (!isExpanded.value) {
        htmlTag.classList.remove("layout-menu-expanded");
      } else {
        htmlTag.classList.add("layout-menu-expanded");
      }
    });

    const setExpanded = () => {
      isExpanded.value = false;
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

      // setTimeout(() => {
      //   if (theme === "dark-theme") {
      //     addDarkTheme();
      //   } else {
      //     removeDarkTheme();
      //   }

      //   setTimeout(() => {
      //     body.classList.remove("fade-out");
      //   }, 300);
      // }, 10);
    };

    const darkCss = new URL(
      "/src/assets/vendor/css/rtl/core-dark.css",
      import.meta.url
    );

    let styleTag = null;
    const addDarkTheme = () => {
      const linkTag = document.createElement("link");
      linkTag.id = "dark-mode";
      linkTag.rel = "stylesheet";
      linkTag.href = `${darkCss}`;

      document.head.appendChild(linkTag);
    };

    const removeDarkTheme = () => {
      const linkTag = document.getElementById("dark-mode");
      if (linkTag) {
        document.head.removeChild(linkTag);
      }
    };

    const title = ref("");

    watch(
      () => route.meta.title,
      (newTitle) => {
        title.value = newTitle;
      }
    );

    return {
      isExpanded,
      toggleExpend,
      setExpanded,
      toggleChangeTheme,
      appTheme,
      title,
      route,
    };
  },
});
</script>

<style scoped>
/*.bg-navbar-theme {
  background-color: #2f3249 !important;
  color: #c8cce5 !important;
}*/
@media screen and (max-width: 475px) {
  #user-name {
    display: none;
  }
}
</style>

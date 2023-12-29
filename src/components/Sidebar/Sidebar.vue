<template>
  <aside
    id="layout-menu"
    class="layout-menu menu-vertical bg-menu-theme"
    style="
      touch-action: none;
      user-select: none;
      -webkit-user-drag: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    "
    @mouseover="hoverNav(1)"
    @mouseout="hoverNav(2)"
  >
    <div class="app-brand demo py-3 d-flex align-items-center">
      <router-link :to="{ name: 'dashboard' }" class="app-brand-link">
        <span class="app-brand-logo demo">
          <img
            src="../../assets/logos/camarin-logo-white.png"
            class="img-fluid"
            height="25"
            width="25"
            alt=""
          />
        </span>
        <span class="app-brand-text demo menu-text fw-bold">CDH-CIS</span>
      </router-link>
      <a
        href="javascript:void(0);"
        class="layout-menu-toggle menu-link text-large ms-auto mb-2"
      >
        <div class="demo-vertical-spacing btn-switch">
          <div class="has-error">
            <label class="switch">
              <input
                type="checkbox"
                class="switch-input switch-input"
                v-model="isLock"
              />
              <span class="switch-toggle-slider">
                <span class="switch-on"></span>
                <span class="switch-off"></span>
              </span>
              <span class="switch-label"></span>
            </label>
          </div>
        </div>
        <i
          @click="$emit('close-expanded', false), hideExpanded()"
          class="ti ti-x d-block d-xl-none ti-sm align-middle btn-x"
        ></i>
      </a>
    </div>

    <div class="menu-inner-shadow"></div>

    <ul class="menu-inner py-1">
      <li class="menu-header small text-uppercase">
        <span class="menu-header-text">Home</span>
      </li>
      <li
        v-for="(m, index) in menuItems"
        :key="index"
        class="menu-item"
        :class="{
          active: route.name === m.name,
          open:
            m.isToggled ||
            m.subMenu.some((subItem) => subItem.name === route.name),
        }"
      >
        <a
          href="javascript:void(0);"
          @click="selectTab(m.id, m.subMenu, m.name)"
          class="menu-link"
          :class="{ 'menu-toggle': m.subMenu.length }"
        >
          <i class="menu-icon tf-icons" :class="m.icon"></i>
          <div :data-i18n="m.label">{{ m.label }}</div>
        </a>
        <ul class="menu-sub" v-if="m.subMenu.length">
          <li
            v-for="(s, index) in m.subMenu"
            :key="index"
            class="menu-item"
            :class="{ active: route.name === s.name }"
          >
            <router-link :to="{ name: s.name }" class="menu-link">
              <div :data-i18n="s.label">{{ s.label }}</div>
            </router-link>
          </li>
        </ul>
      </li>
      <li class="menu-header small text-uppercase">
        <span class="menu-header-text">Auth</span>
      </li>
      <li class="menu-item">
        <a href="javascript:void(0);" class="menu-link" @click="logout()">
          <i class="menu-icon tf-icons ti ti-logout"></i>
          <div data-i18n="logout">Logout</div>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, provide, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import api from "@/api";
import Cookies from "js-cookie";
export default defineComponent({
  setup() {
    const hoverNav = (type) => {
      const htmlTag = document.querySelector("html");
      if (type == 1) {
        htmlTag.classList.add("layout-menu-hover");
      } else {
        htmlTag.classList.remove("layout-menu-hover");
      }
    };
    const store = useStore();
    const isLock = ref(false);
    provide("isLock", isLock);
    const route = useRoute();
    const router = useRouter();

    watch(() => {
      isLock.value;
      const htmlTag = document.querySelector("html");
      if (!isLock.value) {
        htmlTag.classList.remove("layout-menu");
        htmlTag.classList.add("layout-menu-collapsed");
        htmlTag.classList.remove("layout-menu-hover");
        localStorage.setItem("isLock", isLock.value);
        store.commit("setSideLock", isLock.value);
      } else {
        htmlTag.classList.remove("layout-menu-collapsed");
        htmlTag.classList.remove("layout-menu");
        localStorage.setItem("isLock", isLock.value);
        store.commit("setSideLock", isLock.value);
      }
    });

    const hideExpanded = () => {
      const htmlTag = document.querySelector("html");
      htmlTag.classList.remove("layout-menu-expanded");
    };

    const isToggled = ref(false);
    const toggleDropDown = (itemId: Number, hasSubmenu) => {
      if (!hasSubmenu.length) {
        menuItems.value.forEach((m) => {
          m.isToggled = false;
        });
      } else {
        isToggled.value = !isToggled.value;
        const item = menuItems.value.find((menuItem) => menuItem.id === itemId);
        if (item) {
          item.isToggled = !item.isToggled;
        }
      }
    };

    const selectTab = (itemId: Number, hasSubmenu, routerName) => {
      toggleDropDown(itemId, hasSubmenu);
      visitTab(itemId, hasSubmenu, routerName);
    };

    const visitTab = (itemId, hasSubmenu, routerName) => {
      console.log(!hasSubmenu.length, routerName);
      if (!hasSubmenu.length) {
        router.push({ name: routerName });
      }
    };

    const menuItems = computed(() => store.getters.getMenus);

    const currentRoute = ref(route.name);

    const logout = async () => {
      try {
        api.post("/auth/logout");
        api.defaults.headers.common["Authorization"] = "";
        Cookies.remove("auth_token");
        localStorage.removeItem("userData");
        router.push({ name: "auth" });
      } catch (error) {
        router.push({ name: "auth" });
      }
    };

    return {
      hoverNav,
      isLock,
      hideExpanded,
      toggleDropDown,
      selectTab,
      menuItems,
      currentRoute,
      route,
      logout,
    };
  },
});
</script>

<style scoped>
.switch {
  padding: 0;
  margin-right: 0;
}

.switch-toggle-slider {
  border: 0.1rem solid #7367f0 !important;
}

.switch-off {
  color: #fff;
}

.btn-x {
  display: none;
}

@media (max-width: 1199.98px) {
  .btn-x {
    display: block;
  }

  .btn-switch {
    display: none;
  }
}

.switch-toggle-slider {
  border: 0.1rem solid #29aced !important;
}
</style>

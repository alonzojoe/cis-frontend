<template>
  <aside id="layout-menu" class="layout-menu menu-vertical bg-menu-theme" style="
      touch-action: none;
      user-select: none;
      -webkit-user-drag: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    " @mouseover="hoverNav(1)" @mouseout="hoverNav(2)">
    <div class="app-brand demo py-3 d-flex align-items-center">
      <a href="index.html" class="app-brand-link">
        <span class="app-brand-logo demo">
          <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
              fill="#7367F0"></path>
            <path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd"
              d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z" fill="#161616"></path>
            <path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd"
              d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z" fill="#161616"></path>
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
              fill="#7367F0"></path>
          </svg>
        </span>
        <span class="app-brand-text demo menu-text fw-bold">V-CIS</span>
      </a>

      <!-- <a
            href="javascript:void(0);"
            class="layout-menu-toggle menu-link text-large ms-auto"
          >
            <i
              class="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"
            ></i>
            <i class="ti ti-x d-block d-xl-none ti-sm align-middle"></i>
          </a> -->
      <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto mb-2">
        <div class="demo-vertical-spacing btn-switch">
          <div class="has-error">
            <label class="switch">
              <input type="checkbox" class="switch-input switch-input" v-model="isLock" />
              <span class="switch-toggle-slider">
                <span class="switch-on"></span>
                <span class="switch-off"></span>
              </span>
              <span class="switch-label"></span>
            </label>
          </div>
        </div>
        <i @click="$emit('close-expanded', false), hideExpanded()"
          class="ti ti-x d-block d-xl-none ti-sm align-middle btn-x"></i>
      </a>
    </div>

    <div class="menu-inner-shadow"></div>

    <ul class="menu-inner py-1">
      <!-- Dashboards -->
      <li class="menu-header small text-uppercase">
        <span class="menu-header-text">Home</span>
      </li>
      <li v-for="(m, index) in menuItems" :key="index" class="menu-item" :class="{
        active: route.name === m.name,
        open:
          m.isToggled ||
          m.subMenu.some((subItem) => subItem.name === route.name),
      }">
        <a href="javascript:void(0);" @click="selectTab(m.id, m.subMenu, m.name)" class="menu-link"
          :class="{ 'menu-toggle': m.subMenu.length }">
          <i class="menu-icon tf-icons " :class="m.icon"></i>
          <div :data-i18n="m.label">{{ m.label }}</div>
        </a>
        <ul class="menu-sub" v-if="m.subMenu.length">
          <li v-for="(s, index) in m.subMenu" :key="index" class="menu-item" :class="{ active: route.name === s.name }">
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
        <a href="javscript:void(0);" class="menu-link">
          <i class="menu-icon tf-icons ti ti-logout"></i>
          <div data-i18n="logout">Logout</div>
        </a>
      </li>
      <!-- const menuItems = [
      {
        id: 1, label: 'Dashboard', icon: 'ti-smart-home', route: '', subMenu: [
          { label: 'Analytics', route: '', },
          { label: 'eCommerce', route: '', },
        ], isToggled: ref(false),
      },
      {
        id: 2, label: 'Home', subMenu: [], route: 'home', isToggled: ref(false),
      },
    ] -->
    </ul>
  </aside>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, provide } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
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
      } else {
        htmlTag.classList.remove("layout-menu-collapsed");
        htmlTag.classList.remove("layout-menu");
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

    return {
      hoverNav,
      isLock,
      hideExpanded,
      toggleDropDown,
      selectTab,
      menuItems,
      currentRoute,
      route,
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
</style>

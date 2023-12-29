<template>
  <div class="container-xxl container-p-y">
    <div class="misc-wrapper">
      <div class="mt-4">
        <img
          src="../../assets/images/401.svg"
          alt="page-misc-error"
          width="400"
          class="img-fluid"
        />
      </div>
      <h2 class="mb-2 mt-4 fw-bolder">401 Unauthorized :(</h2>
      <p class="mb-4 mx-2 fs-5">
        "Oops! 😖 Sorry, you are not authorized to access this page.
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "Unauthorized",
  setup() {
    return {};
  },
});
</script>

<style scoped></style>

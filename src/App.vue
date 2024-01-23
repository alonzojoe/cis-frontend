<script lang="ts">
import { defineComponent } from "vue";
import { useLoading } from "@/components/Loaders/loaderSettings";
export default defineComponent({
  name: "App",
  setup() {
    const { loading } = useLoading();

    return { loading };
  },
});
</script>

<template>
  <Loading v-if="loading" />
  <router-view></router-view>
</template>

<style scoped></style>

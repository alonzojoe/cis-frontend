<template>
  <titled-card class="mt-5" title="Vaccination" id="vac">
    <div class="row mt-4">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <div>
          <label class="form-label fs-5 mb-2 fw-semibold"
            >Vaccination Details</label
          >
          <Textarea
            class="form-control form-control-sm custom-font"
            autoResize
            rows="5"
            cols="30"
            v-model="patient.vaccination"
          />
        </div>
      </div>
    </div>
  </titled-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import TitledCard from "@/components/Cards/TitledCard.vue";
import Textarea from "primevue/textarea";
import { useStore } from "vuex";
import moment from "moment";
export default defineComponent({
  name: "Vaccination",
  components: {
    TitledCard,
    Textarea,
  },
  setup() {
    const store = useStore();
    const patient = computed(() => store.getters.getPatient);
    return {
      patient,
    };
  },
});
</script>

<style scoped></style>

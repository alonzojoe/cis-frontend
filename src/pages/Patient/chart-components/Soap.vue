<template>
  <titled-card class="mt-5" title="SOAP" id="soap">
    <div class="row mt-4">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <div :class="{ 'group-invalid': saveSubmitted && !validateSoap.subjective }">
          <label class="form-label fs-5 mb-2 fw-semibold">Subjective <span class="text-danger">*</span></label>
          <Textarea class="form-control form-control-sm custom-font cst-capital" autoResize rows="4" cols="30"
            v-model="consultation.subjective" />
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <div :class="{ 'group-invalid': saveSubmitted && !validateSoap.objective }">
          <label class="form-label fs-5 mb-2 fw-semibold">Objective <span class="text-danger">*</span></label>
          <Textarea class="form-control form-control-sm custom-font cst-capital" autoResize rows="4" cols="30"
            v-model="consultation.objective" />
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <div :class="{ 'group-invalid': saveSubmitted && !validateSoap.assessment }">
          <label class="form-label fs-5 mb-2 fw-semibold">Assessment <span class="text-danger">*</span></label>
          <Textarea class="form-control form-control-sm custom-font cst-capital" autoResize rows="4" cols="30"
            v-model="consultation.assessment" />
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <div :class="{ 'group-invalid': saveSubmitted && !validateSoap.plan }">
          <label class="form-label fs-5 mb-2 fw-semibold">Plan <span class="text-danger">*</span></label>
          <Textarea class="form-control form-control-sm custom-font cst-capital" autoResize rows="4" cols="30"
            v-model="consultation.plan" />
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
  name: "Soap",
  props: {
    validateSoap: Object,
    saveSubmitted: Boolean,
  },
  components: {
    TitledCard,
    Textarea,
  },
  setup() {
    const store = useStore();
    const consultation = computed(() => store.getters.getConsultationHistory);
    return {
      consultation,
    };
  },
});
</script>

<style scoped></style>

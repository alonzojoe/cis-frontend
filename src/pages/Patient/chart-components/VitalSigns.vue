<template>
  <titled-card class="mt-5" title="Vital Signs" id="vital">
    <div class="row mt-4">
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div :class="{ 'group-invalid': saveSubmitted && !validateVitals.height }">
          <label class="form-label fs-6 mb-2 fw-semibold">Height (cm) <span class="text-danger">*</span></label>
          <input type="text" class="form-control form-control-sm custom-font" @keypress="NumericOnly" @paste="handlePaste"
            v-model="vitalSigns.height" />
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div :class="{ 'group-invalid': saveSubmitted && !validateVitals.weight }">
          <label class="form-label fs-6 mb-2 fw-semibold">Weight (kg) <span class="text-danger">*</span></label>
          <input type="text" class="form-control form-control-sm custom-font" @keypress="NumericOnly" @paste="handlePaste"
            v-model="vitalSigns.weight" />
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold">BMI (Body Mass Index)</label>
          <input type="text" class="form-control form-control-sm custom-font" @keypress="NumericOnly" @paste="handlePaste"
            v-model="vitalSigns.bmi" />
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold">Blood Pressure</label>
          <div class="d-flex gap-1">
            <input type="text" class="form-control form-control-sm custom-font" @keypress="NumericOnly"
              @paste="handlePaste" v-model="vitalSigns.bp_f" />
            <span>/</span>
            <input type="text" class="form-control form-control-sm custom-font" @keypress="NumericOnly"
              @paste="handlePaste" v-model="vitalSigns.bp_s" />
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold">Oxygen Saturation</label>
          <input type="text" class="form-control form-control-sm custom-font" @keypress="NumericOnly" @paste="handlePaste"
            v-model="vitalSigns.oxygen_saturation" />
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold">Temperature (°C)</label>
          <input type="text" class="form-control form-control-sm custom-font" @keypress="NumericOnly" @paste="handlePaste"
            v-model="vitalSigns.temperature" />
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold">Respiratory Rate (RR)</label>
          <input type="text" class="form-control form-control-sm custom-font" @keypress="NumericOnly" @paste="handlePaste"
            v-model="vitalSigns.respiratory_rate" />
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold">Pulse Rate (PR)</label>
          <input type="text" class="form-control form-control-sm custom-font" @keypress="NumericOnly" @paste="handlePaste"
            v-model="vitalSigns.pulse_rate" />
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold">CBG (mg/dl)</label>
          <input type="text" class="form-control form-control-sm custom-font" @keypress="NumericOnly" @paste="handlePaste"
            v-model="vitalSigns.cbg" />
        </div>
      </div>
    </div>
  </titled-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, watch } from "vue";
import TitledCard from "@/components/Cards/TitledCard.vue";
import Textarea from "primevue/textarea";
import { useStore } from "vuex";
import {
  NumericOnlyVitals,
  NumericOnly,
  isNumberKey,
  handlePaste,
} from "@/service";
import moment from "moment";
export default defineComponent({
  name: "VitalSigns",
  props: {
    validateVitals: Object,
    saveSubmitted: Boolean,
  },
  components: {
    TitledCard,
    Textarea,
  },
  setup() {
    const store = useStore();
    const vitalSigns = computed(() => store.getters.getVitalSigns);

    watch(() => {
      const height = parseFloat(vitalSigns.value.height);
      const weight = parseFloat(vitalSigns.value.weight);

      if (!isNaN(height) && !isNaN(weight)) {
        const bmi = weight / ((height / 100) * (height / 100));
        store.commit("setBMI", bmi.toFixed(2));
      } else {
        store.commit("setBMI", "");
      }
    });

    // watch(() => {
    //   vitalSigns.value.height;
    //   vitalSigns.value.weight;

    //   if (vitalSigns.value.height && vitalSigns.value.weight) {
    //     let bmi = 0;
    //     let divideHeight =
    //       (parseFloat(vitalSigns.value.height) / 100) *
    //       (parseFloat(vitalSigns.value.weight) / 100);

    //     bmi = parseFloat(vitalSigns.value.weight) / parseFloat(divideHeight);

    //     store.commit("setBMI", parseFloat(bmi).toFixed(2));
    //   }
    // });

    return {
      vitalSigns,
      NumericOnlyVitals,
      NumericOnly,
      isNumberKey,
      handlePaste,
    };
  },
});
</script>

<style scoped></style>

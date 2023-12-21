<template>
  <titled-card class="mt-5" title="SOAP" id="soap">
    <div class="row mt-4">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <div>
          <label class="form-label fs-5 mb-2 fw-semibold">Subjective</label>
          <Textarea
            class="form-control form-control-sm custom-font"
            autoResize
            rows="5"
            cols="30"
            v-model="consultation.subjective"
          />
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <div>
          <label class="form-label fs-5 mb-2 fw-semibold">Objective</label>
          <Textarea
            class="form-control form-control-sm custom-font"
            autoResize
            rows="5"
            cols="30"
            v-model="consultation.objective"
          />
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <div>
          <label class="form-label fs-5 mb-2 fw-semibold">Assessment</label>
          <Textarea
            class="form-control form-control-sm custom-font"
            autoResize
            rows="5"
            cols="30"
            v-model="consultation.assessment"
          />
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <div>
          <label class="form-label fs-5 mb-2 fw-semibold">Plan</label>
          <Textarea
            class="form-control form-control-sm custom-font"
            autoResize
            rows="5"
            cols="30"
            v-model="consultation.plan"
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
  name: "Soap",
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

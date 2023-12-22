<template>
  <titled-card class="mt-5" title="Past History" id="past">
    <div class="row mt-4">
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="form-check">
          <input
            class="form-check-input"
            id="p-unremarkable"
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="pastHistory.unremarkable"
          />
          <label class="form-check-label" for="p-unremarkable">
            Unremarkable
          </label>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="form-check">
          <input
            class="form-check-input"
            id="p-blood-d"
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="pastHistory.blood_disease"
          />
          <label class="form-check-label" for="p-blood-d">
            Blood Disease
          </label>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="form-check">
          <input
            class="form-check-input"
            id="p-asthma"
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="pastHistory.asthma"
          />
          <label class="form-check-label" for="p-asthma"> Asthma </label>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="form-check">
          <input
            class="form-check-input"
            id="p-hyper"
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="pastHistory.hypertension"
          />
          <label class="form-check-label" for="p-hyper"> Hypertension </label>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="form-check">
          <input
            class="form-check-input"
            id="p-cva"
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="pastHistory.cva"
          />
          <label class="form-check-label" for="p-cva"> CVA </label>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="form-check">
          <input
            class="form-check-input"
            id="p-gut"
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="pastHistory.gut_disease"
          />
          <label class="form-check-label" for="p-gut"> GUT Disease</label>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="form-check">
          <input
            class="form-check-input"
            id="p-git"
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="pastHistory.git_disease"
          />
          <label class="form-check-label" for="p-git"> GIT Disease </label>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="form-check">
          <input
            class="form-check-input"
            id="p-pulmo"
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="pastHistory.pulmo_disease"
          />
          <label class="form-check-label" for="p-pulmo"> Pulmo Disease </label>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="form-check">
          <input
            class="form-check-input"
            id="p-heart"
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="pastHistory.heart_disease"
          />
          <label class="form-check-label" for="p-heart"> Heart Disease </label>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="form-check">
          <input
            class="form-check-input"
            id="p-dm"
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="pastHistory.dm"
          />
          <label class="form-check-label" for="p-dm"> DM </label>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-sm-12 col-md-6 col-lg-4">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold">Previous OR</label>
          <Textarea
            class="form-control form-control-sm custom-font cst-capital"
            autoResize
            rows="5"
            cols="30"
            v-model="pastHistory.previous_or"
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold"
            >Previous Hospitalization</label
          >
          <Textarea
            class="form-control form-control-sm custom-font cst-capital"
            autoResize
            rows="5"
            cols="30"
            v-model="pastHistory.previous_hospitalization"
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold">Other Findings</label>
          <Textarea
            class="form-control form-control-sm custom-font cst-capital"
            autoResize
            rows="5"
            cols="30"
            v-model="pastHistory.other_findings"
          />
        </div>
      </div>
    </div>
  </titled-card>
  <pre>{{ pastHistory }}</pre>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import TitledCard from "@/components/Cards/TitledCard.vue";
import Textarea from "primevue/textarea";
import { useStore } from "vuex";
import moment from "moment";
export default defineComponent({
  name: "PastHistory",
  components: {
    TitledCard,
    Textarea,
  },
  setup() {
    const store = useStore();
    const pastHistory = computed(() => store.getters.getPastHistory);
    return {
      pastHistory,
    };
  },
});
</script>

<style scoped></style>

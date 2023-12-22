<template>
  <titled-card class="mt-5" title="Family History" id="fam">
    <div class="row mt-4">
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="form-check">
          <input
            class="form-check-input"
            id="f-unremarkable"
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="familyHistory.f_unremarkable"
          />
          <label class="form-check-label" for="f-unremarkable">
            Unremarkable
          </label>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="form-check">
          <input
            class="form-check-input"
            id="f-hcvd"
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="familyHistory.hcvd"
          />
          <label class="form-check-label" for="f-hcvd"> HCVD </label>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="form-check">
          <input
            class="form-check-input"
            id="f-chd"
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="familyHistory.chd"
          />
          <label class="form-check-label" for="f-chd"> CHD </label>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="form-check">
          <input
            class="form-check-input"
            id="f-cva"
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="familyHistory.f_cva"
          />
          <label class="form-check-label" for="f-cva"> CVA </label>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="form-check">
          <input
            class="form-check-input"
            id="g-gut"
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="familyHistory.f_gut_disease"
          />
          <label class="form-check-label" for="g-gut"> GUT Disease </label>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="form-check">
          <input
            class="form-check-input"
            id="f-blood-dy"
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="familyHistory.blood_dyscrasia"
          />
          <label class="form-check-label" for="f-blood-dy">
            Blood Dyscrasia</label
          >
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="form-check">
          <input
            class="form-check-input"
            id="f-allergy"
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="familyHistory.allergy"
          />
          <label class="form-check-label" for="f-allergy"> Allergy </label>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="form-check">
          <input
            class="form-check-input"
            id="f-dm"
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="familyHistory.f_dm"
          />
          <label class="form-check-label" for="f-dm"> DM </label>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="form-check">
          <input
            class="form-check-input"
            id="f-git"
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="familyHistory.f_git_disease"
          />
          <label class="form-check-label" for="f-git"> GIT Disease </label>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="form-check">
          <input
            class="form-check-input"
            id="f-pulmo"
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="familyHistory.f_pulmo_disease"
          />
          <label class="form-check-label" for="f-pulmo"> Pulmo Disease </label>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="form-check">
          <input
            class="form-check-input"
            id="f-ca"
            type="checkbox"
            true-value="1"
            false-value="0"
            v-model="familyHistory.ca"
          />
          <label class="form-check-label" for="f-ca"> CA </label>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-sm-12 col-md-6 col-lg-4">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold">Other Findings</label>
          <Textarea
            class="form-control form-control-sm custom-font cst-capital"
            autoResize
            rows="5"
            cols="30"
            v-model="familyHistory.f_other_findings"
          />
        </div>
      </div>
    </div>
  </titled-card>
  <pre>
    {{ familyHistory }}
 </pre
  >
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import TitledCard from "@/components/Cards/TitledCard.vue";
import Textarea from "primevue/textarea";
import { useStore } from "vuex";
import moment from "moment";
export default defineComponent({
  name: "FamilyHistory",
  components: {
    TitledCard,
    Textarea,
  },
  setup() {
    const store = useStore();
    const familyHistory = computed(() => store.getters.getFamilyHistory);
    return {
      familyHistory,
    };
  },
});
</script>

<style scoped></style>

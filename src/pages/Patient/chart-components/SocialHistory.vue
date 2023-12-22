<template>
  <titled-card class="mt-5" title="Social History" id="soc">
    <div class="row mt-4">
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold">Smoking</label>
          <Textarea
            class="form-control form-control-sm custom-font cst-capital"
            autoResize
            rows="5"
            cols="30"
            v-model="socialHistory.smoking"
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold">Alcohol Intake</label>
          <Textarea
            class="form-control form-control-sm custom-font cst-capital"
            autoResize
            rows="5"
            cols="30"
            v-model="socialHistory.alcohol_intake"
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold"
            >Betel Nut Chewing</label
          >
          <Textarea
            class="form-control form-control-sm custom-font cst-capital"
            autoResize
            rows="5"
            cols="30"
            v-model="socialHistory.betel_nut_chewing"
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold"
            >Drug / Food Allergy</label
          >
          <Textarea
            class="form-control form-control-sm custom-font cst-capital"
            autoResize
            rows="5"
            cols="30"
            v-model="socialHistory.drug_food_allergy"
          />
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-sm-12 col-md-6 col-lg-6">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold">Others</label>
          <Textarea
            class="form-control form-control-sm custom-font cst-capital"
            autoResize
            rows="5"
            cols="30"
            v-model="socialHistory.others"
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
  name: "SocialHistory",
  components: {
    TitledCard,
    Textarea,
  },
  setup() {
    const store = useStore();
    const socialHistory = computed(() => store.getters.getSocialHistory);
    return {
      socialHistory,
    };
  },
});
</script>

<style scoped></style>

<template>
  <titled-card class="mt-5 mb-5" title="Consulting Physician" id="physician">
    <div class="row mt-4">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <div :class="{ 'group-invalid': saveSubmitted && !validatePhysician.physician_id }">
          <label class="form-label fs-5 mb-2 fw-semibold">Select Consulting Physician <span
              class="text-danger">*</span></label>
          <select class="form-control form-select" id="select-phy" ref="selectRef" v-model="consultation.physician_id"
            autocomplete="off">
            <option value="">Please Select</option>
            <option :value="p.id" v-for="p in physicians" :key="p.id">
              {{ p.lname }}, {{ p.fname }} {{ p.mname }}, MD
            </option>
          </select>
        </div>
      </div>
    </div>
  </titled-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, ref, watch } from "vue";
import TitledCard from "@/components/Cards/TitledCard.vue";
import Textarea from "primevue/textarea";
import { useStore } from "vuex";
import moment from "moment";
import TomSelect from 'tom-select';
import 'tom-select/dist/css/tom-select.bootstrap5.min.css';
export default defineComponent({
  name: "Physician",
  props: {
    validatePhysician: Object,
    saveSubmitted: Boolean,
  },
  components: {
    TitledCard,
    Textarea,
    TomSelect,
  },
  setup() {
    const store = useStore();
    const physicians = computed(() => store.getters.getAllPhysicians);
    const consultation = computed(() => store.getters.getConsultationHistory);

    const selectRef = ref(null)

    const selectOptions = {
      create: true,
      sortField: {
        field: "text",
        direction: "asc"
      }
    }
    let tomSelectInstance;

    watch(() => {
      physicians.value
      if (physicians.value.length > 0) {
        setTimeout(() => {
          new TomSelect('#select-phy', {
            create: false,
            sortField: {
              direction: "asc"
            }
          });
        }, 2000);
      }
    })

    onMounted(() => {
      // setTimeout(() => {
      //   new TomSelect('#select-phy', {
      //     create: false,
      //     sortField: {
      //       direction: "asc"
      //     }
      //   });
      // }, 10000);
    });

    return {
      physicians,
      consultation,
      selectRef
    };
  },
});
</script>

<style scoped></style>

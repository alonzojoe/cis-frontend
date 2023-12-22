<template>
  <Toast />
  <div class="bg-primary fam-med p-2 px-3" style="top: 4rem">
    <div class="d-flex justify-content-between align-items-center">
      <span class="fs-2 text-white fw-semibold"
        >Family Medicine - Patient Chart</span
      >
      <button class="btn btn-warning btn-sm" @click="processChart()">
        {{ dataType.type != "new" ? "Update" : "Save" }} Patient Chart
      </button>
    </div>
  </div>

  <div class="row mt-6">
    <div class="col-sm-12 col-md-12 col-lg-11 mb-4">
      <div
        data-bs-spy="scroll"
        data-bs-target="#side-sections"
        data-bs-root-margin="0px 0px -40%"
      >
        <patient-information id="pinfo" :chartType="dataType.type" />
        <vital-signs class="mt-5" id="vital" />
        <past-history class="mt-5" id="past" />
        <family-history class="mt-5" id="fam" />
        <social-history class="mt-5" id="soc" />
        <vaccination class="mt-5" id="vac" />
        <soap class="mt-5" id="soap" />
        <physician class="mt-5 mb-5" id="physician" />
      </div>
    </div>
    <div class="col-lg-1">
      <div class="card position-fixed w-100">
        <div class="card-body p-2">
          <h5 class="card-title py-0 my-0 p-2 mb-1">Sections</h5>
          <hr class="mt-0" />
          <div class="list-group list-group-flush" id="side-sections">
            <a href="#pinfo" class="list-group-item list-group-item-action"
              >Patient Info</a
            >
            <a href="#vital" class="list-group-item list-group-item-action"
              >Vital Signs</a
            >
            <a href="#past" class="list-group-item list-group-item-action"
              >Past History</a
            >
            <a href="#fam" class="list-group-item list-group-item-action"
              >Family History</a
            >
            <a href="#soc" class="list-group-item list-group-item-action"
              >Social History</a
            >
            <a href="#vac" class="list-group-item list-group-item-action"
              >Vaccination</a
            >
            <a href="#soap" class="list-group-item list-group-item-action"
              >SOAP</a
            >
            <a href="#physician" class="list-group-item list-group-item-action"
              >Physician</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  {{ dataType }}
  <pre>{{ singleConsultation }}</pre>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  inject,
  ref,
  computed,
  watch,
  watchEffect,
} from "vue";
import TitledCard from "@/components/Cards/TitledCard.vue";
import Textarea from "primevue/textarea";
import PatientInformation from "./chart-components/PatientInformation.vue";
import VitalSigns from "./chart-components/VitalSigns.vue";
import PastHistory from "./chart-components/PastHistory.vue";
import FamilyHistory from "./chart-components/FamilyHistory.vue";
import SocialHistory from "./chart-components/SocialHistory.vue";
import Vaccination from "./chart-components/Vaccination.vue";
import Soap from "./chart-components/Soap.vue";
import Physician from "./chart-components/Physician.vue";
import Loader from "@/components/Loaders/Loader.vue";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import { swalMessage, swalConfirmation } from "@/service";
import { encryptData, decryptData, NumericOnly } from "@/service";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
export default defineComponent({
  name: "PatientChart",
  components: {
    TitledCard,
    Textarea,
    PatientInformation,
    VitalSigns,
    PastHistory,
    FamilyHistory,
    SocialHistory,
    Vaccination,
    Soap,
    Physician,
    Toast,
    Loader,
  },
  setup() {
    // const isLock = inject("isLock");
    // const calculateWidth = computed(() => {
    //     return isLock.value ? "calc(100% - 16.25rem)" : "calc(100% - 5.25rem)";
    // });
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const swal = inject("$swal");
    const toast = useToast();

    const uriParams = decodeURIComponent(route.params.data);
    const dataType = ref({});
    const decrypURLparams = async () => {
      dataType.value = await decryptData(uriParams);
      if (dataType.value.type == "update") {
        await store.dispatch(
          "fetchSingleConsultation",
          dataType.value.consultation_id
        );
        store.dispatch("fetchPatient", singleConsultation.value.patient_id);
        store.dispatch(
          "fetchVitalSigns",
          singleConsultation.value.consultation_id
        );
        store.dispatch(
          "fetchPastHistory",
          singleConsultation.value.past_history_id
        );
        store.dispatch(
          "fetchFamilyHistory",
          singleConsultation.value.family_history_id
        );
        store.dispatch(
          "fetchSocialHistory",
          singleConsultation.value.social_history_id
        );
      } else if (dataType.value.type == "new") {
        store.commit("setConsultationObjectEmpty");
      }
    };
    const singleConsultation = computed(
      () => store.getters.getSingleConsultation
    );
    const authUser = computed(() => store.getters.getAuthenticatedUser);
    const physicians = computed(() => store.getters.getAllPhysicians);
    const patient = computed(() => store.getters.getPatient);
    const consultation = computed(() => store.getters.getConsultationHistory);
    const vitalSigns = computed(() => store.getters.getVitalSigns);
    const pastHistory = computed(() => store.getters.getPastHistory);
    const familyHistory = computed(() => store.getters.getFamilyHistory);
    const socialHistory = computed(() => store.getters.getSocialHistory);
    const savingFlag = ref(false);
    const resetter = () => {
      savingFlag.value = false;
    };
    const saveChart = async () => {
      //   const confirmMessage = formData.value.id == 0 ? "save" : "update";
      //   const message = formData.value.id == 0 ? "added" : "updated";
      swalConfirmation(
        swal,
        "Confirmation",
        `Are you sure to save Patient Chart?`,
        "question"
      ).then(async (res: object) => {
        if (res.isConfirmed) {
          savingFlag.value = true;
          await store.dispatch("saveChart", {
            ...pastHistory.value,
            ...familyHistory.value,
            ...socialHistory.value,
            ...patient.value,
            ...consultation.value,
            ...vitalSigns.value,
            created_by: authUser.value.id,
          });
          resetter();
          swalMessage(
            swal,
            "Information",
            `Patient Chart Created Successfully!`,
            "success"
          ).then(() => {
            router.push({ name: "concierge" });
          });
        }
      });
    };

    const updateCart = async () => {
      swalConfirmation(
        swal,
        "Confirmation",
        `Are you sure to update Patient Chart?`,
        "question"
      ).then(async (res: object) => {
        if (res.isConfirmed) {
          savingFlag.value = true;
          await store.dispatch("updatePastHistory", pastHistory.value);
          store.dispatch("updateFamilyHistory", familyHistory.value);
          store.dispatch("updateSocialHistory", socialHistory.value);
          store.dispatch("updatePatient", patient.value);
          store.dispatch("updateConsultation", consultation.value);
          await store.dispatch("updateVitalSigns", vitalSigns.value);
          resetter();
          swalMessage(
            swal,
            "Information",
            `Patient Chart Updated Successfully!`,
            "success"
          ).then(() => {
            router.push({ name: "concierge" });
          });
        }
      });
    };

    const processChart = async () => {
      if (dataType.value.type == "new") {
        await saveChart();
      } else if (dataType.value.type == "update") {
        await updateCart();
      }
    };

    onMounted(async () => {
      await decrypURLparams();
      await store.dispatch("fetchAllPhysicians");
      const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: "#side-sections",
      });
    });
    return {
      dataType,
      physicians,
      saveChart,
      singleConsultation,
      processChart,
    };
  },
});
</script>

<style scoped>
.list-group-item {
  border: none !important;
}

.fam-med {
  position: fixed;
  width: calc(100% - 5.25rem);
  right: 0;
  z-index: 100;
}

.mt-6 {
  margin-top: 5rem !important;
}
</style>

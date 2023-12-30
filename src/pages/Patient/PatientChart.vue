<template>
  <Toast />
  <div class="bg-primary fam-med p-2 px-3" style="top: 3.8rem">
    <div class="d-flex justify-content-between align-items-center">
      <span class="fs-2 text-white fw-semibold">Family Medicine - Patient Chart</span>
      <button class="btn btn-warning btn-sm" @click="processChart()">
        {{ dataType.type != "new" ? "Update" : "Save" }} Patient Chart
      </button>
    </div>
  </div>

  <div class="row mt-6">
    <div class="col-sm-12 col-md-12 col-lg-11 mb-4">
      <div @scroll="handleScroll" data-bs-spy="scroll" data-bs-target="#side-sections" class="py-5 side-sections"
        data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true">
        <patient-information :validatePatient="validatePatient" :saveSubmitted="saveSubmitted" id="pinfo"
          :chartType="dataType.type" />
        <vital-signs :validateVitals="validateVitals" :saveSubmitted="saveSubmitted" class="mt-6" id="vital" />
        <past-history class="mt-6" id="past" />
        <family-history class="mt-6" id="fam" />
        <social-history class="mt-6" id="soc" />
        <vaccination class="mt-6" id="vac" />
        <soap :validateSoap="validateSoap" :saveSubmitted="saveSubmitted" class="mt-6" id="soap" />
        <physician :validatePhysician="validatePhysician" :saveSubmitted="saveSubmitted" class="mt-5 mb-5"
          id="physician" />
      </div>
    </div>
    <div class="col-lg-1">
      <div class="card position-fixed w-100">
        <div class="card-body p-2">
          <h6 class="card-title py-0 my-0 p-2 mb-1 fw-normal">Sections</h6>
          <hr class="mt-0" />
          <div class="list-group list-group-flush" id="side-sections">
            <a ref="linkPinfo" href="#pinfo" class="list-group-item list-group-item-action">Patient Info</a>
            <a ref="linkVital" href="#vital" class="list-group-item list-group-item-action">Vital Signs</a>
            <a href="#past" class="list-group-item list-group-item-action">Past History</a>
            <a href="#fam" class="list-group-item list-group-item-action">Family History</a>
            <a href="#soc" class="list-group-item list-group-item-action">Social History</a>
            <a href="#vac" class="list-group-item list-group-item-action">Vaccination</a>
            <a ref="linkSoap" href="#soap" class="list-group-item list-group-item-action">SOAP</a>
            <a ref="linkPhy" href="#physician" class="list-group-item list-group-item-action">Physician</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <loader :title="'Loading Patient Chart Data...'" v-if="isLoading" />
  <loader :title="dataType.type == 'update'
    ? 'Updating Patient Chart, Please wait...'
    : 'Creating Patient Chart, Please wait...'
    " :warning="true" :create="true" v-if="savingFlag" />

  <modal-sm :details="modalValidation" @close-modal="modalValidation.show = false">
    <div class="px-5 row mt-3 mb-3">
      <div class="col-12">
        <div class="d-flex align-items-start gap-2">
          <h3 class="mb-0">Validation Required</h3>
          <i class="fs-2 ti ti-alert-triangle-filled text-warning"></i>
        </div>
        <hr />
        <div class="col-12">
          <div class="d-flex align-items-start flex-column" id="side-sections">
            <a href="javascript:void(0);" @click="scrollingDown('pinfo')" class="fs-5 fw-semibold"
              :class="!chartErrors.patient ? 'text-danger' : 'text-success'"><i class="fa-solid"
                :class="!chartErrors.patient ? 'fa-xmark' : 'fa-check'"></i>
              Patient Information</a>
            <a href="javascript:void(0);" @click="scrollingDown('vital')" class="fs-5 fw-semibold"
              :class="!chartErrors.vitals ? 'text-danger' : 'text-success'"><i class="fa-solid"
                :class="!chartErrors.vitals ? 'fa-xmark' : 'fa-check'"></i>
              Vital Signs</a>
            <a href="javascript:void(0);" @click="scrollingDown('soap')" class="fs-5 fw-semibold"
              :class="!chartErrors.soap ? 'text-danger' : 'text-success'"><i class="fa-solid"
                :class="!chartErrors.soap ? 'fa-xmark' : 'fa-check'"></i>
              SOAP</a>
            <a href="javascript:void(0);" @click="scrollingDown('physician')" class="fs-5 fw-semibold"
              :class="!chartErrors.physician ? 'text-danger' : 'text-success'"><i class="fa-solid"
                :class="!chartErrors.physician ? 'fa-xmark' : 'fa-check'"></i>
              Consulting Physician</a>
          </div>
        </div>
      </div>
    </div>
  </modal-sm>
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
import ModalMd from "@/components/Modals/ModalMd.vue";
import ModalSm from "@/components/Modals/ModalSm.vue";
import { useToast } from "primevue/usetoast";
import { swalMessage, swalConfirmation } from "@/service";
import { encryptData, decryptData, NumericOnly, calculateAge } from "@/service";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import {
  validateFields,
  validatePatient,
  validateVitals,
  validateSoap,
  validatePhysician,
} from "./Validations/chartValidation";
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
    ModalMd,
    ModalSm,
  },
  setup() {
    const store = useStore();
    const isLock = computed(() => store.getters.getSideLock);
    const isLocked = localStorage.getItem("isLock");
    const calculateWidth = computed(() => {
      return isLock.value ? "calc(100% - 16.25rem)" : "calc(100% - 5.25rem)";
    });

    const route = useRoute();
    const router = useRouter();
    const swal = inject("$swal");
    const toast = useToast();

    const uriParams = decodeURIComponent(route.params.data);
    const dataType = ref({});
    const isLoading = ref(false);

    const calculateAges = async () => {
      const age = calculateAge(patient.value.birthdate);
      store.commit("setAge", age);
    };

    const decrypURLparams = async () => {
      dataType.value = await decryptData(uriParams);
      if (dataType.value.type == "update") {
        isLoading.value = true;
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
        await store.dispatch(
          "fetchSocialHistory",
          singleConsultation.value.social_history_id
        );
        calculateAges();
        isLoading.value = false;
      } else if (dataType.value.type == "new") {
        store.commit("setConsultationObjectEmpty");
        store.commit("setPastHistoryEmpty");
        store.commit("setFamilyHistoryEmpty");
        store.commit("setSocialHistoryEmpty");
        store.commit("setPatientEmpty");
        store.commit("setConsultationEmpty");
        store.commit("setVitalSignsEmpty");
      } else if (dataType.value.type == "existing") {
        isLoading.value = true;
        await store.dispatch("fetchPatient", dataType.value.patient_id);
        store.commit("setConsultationObjectEmpty");
        store.commit("setConsultationEmpty");
        store.commit("setVitalSignsEmpty");
        store.dispatch("fetchLatestVitals", patient.value.id);
        store.dispatch("fetchPastHistory", patient.value.past_history_id);
        store.dispatch("fetchFamilyHistory", patient.value.family_history_id);
        await store.dispatch(
          "fetchSocialHistory",
          patient.value.social_history_id
        );
        calculateAges();
        isLoading.value = false;
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
      modalValidation.show = false;
      saveSubmitted.value = false;
      savingFlag.value = false;
    };

    const inProgress = ref(false);

    const saveChart = async () => {
      swalConfirmation(
        swal,
        "Confirmation",
        `Are you sure to save Patient Chart?`,
        "question"
      ).then(async (res: object) => {
        if (res.isConfirmed) {
          if (savingFlag.value) {
            return;
          }
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
          if (savingFlag.value) {
            return;
          }
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

    const createNew = async () => {
      swalConfirmation(
        swal,
        "Confirmation",
        `Are you sure to save Patient Chart?`,
        "question"
      ).then(async (res: object) => {
        if (res.isConfirmed) {
          if (savingFlag.value) {
            return;
          }
          savingFlag.value = true;
          await store.dispatch("updatePastHistory", pastHistory.value);
          store.dispatch("updateFamilyHistory", familyHistory.value);
          store.dispatch("updateSocialHistory", socialHistory.value);
          store.dispatch("updatePatient", patient.value);
          await store.dispatch("saveExisting", {
            ...consultation.value,
            ...vitalSigns.value,
            created_by: authUser.value.id,
            patient_id: patient.value.id,
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

    const saveSubmitted = ref(false);
    const chartErrors = ref({});
    const processChart = async () => {
      saveSubmitted.value = true;
      const errors = await validateFields(
        toast,
        {
          ...patient.value,
          ...consultation.value,
          ...vitalSigns.value,
        },
        0
      );
      // console.log(errors.value);
      chartErrors.value = errors.value.sections;
      if (errors.value.count == 0) {
        if (dataType.value.type == "new") {
          await saveChart();
        } else if (dataType.value.type == "update") {
          await updateCart();
        } else if (dataType.value.type == "existing") {
          await createNew();
        }
      } else {
        modalValidation.value.show = true;
      }
    };

    watch(
      () => {
        patient.value;
        consultation.value;
        vitalSigns.value;
        if (saveSubmitted.value == true) {
          validateFields(
            toast,
            {
              ...patient.value,
              ...consultation.value,
              ...vitalSigns.value,
            },
            1
          );
        }
      },
      { deep: true }
    );

    const handleScroll = (event) => {
      const headerHeight = 4 * 16; // 4rem in pixels
      const scrollPosition = event.target.scrollTop;

      // Adjust the scroll position
      window.scrollTo(0, scrollPosition - headerHeight);
    };

    const modalValidation = ref({
      title: "Chart Validation",
      show: false,
    });

    const linkPhy = ref(null);
    const linkPinfo = ref(null);
    const linkSoap = ref(null);
    const linkVital = ref(null);
    const scrollTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Use smooth scroll behavior if supported
      });
    };
    const scrollingDown = async (type) => {
      // linkPhy.value.click();

      scrollTop();
      if (type == "pinfo") {
        linkPinfo.value.click();
      } else if (type == "vital") {
        scrollTop();
        linkVital.value.click();
      } else if (type == "soap") {
        scrollTop();
        linkSoap.value.click();
      } else if (type == "physician") {
        await scrollTop();
        linkPhy.value.click();
      }

      modalValidation.value.show = false;

      // setTimeout(async () => {
      // }, 200);
    };

    onMounted(async () => {
      resetter();
      await decrypURLparams();
      await store.dispatch("fetchAllPhysicians");
      const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: "#side-sections",
        offset: 4 * 16,
        smoothScroll: true,
        threshold: [0.1, 0.5, 1],
      });
    });
    return {
      dataType,
      physicians,
      saveChart,
      singleConsultation,
      processChart,
      isLoading,
      handleScroll,
      savingFlag,
      isLock,
      calculateWidth,
      modalValidation,
      validatePatient,
      validateVitals,
      validateSoap,
      validatePhysician,
      saveSubmitted,
      chartErrors,
      linkPhy,
      scrollingDown,
      linkPinfo,
      linkSoap,
      linkVital,
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
  width: v-bind(calculateWidth);
  right: 0;
  z-index: 100;
}



@media screen and (max-width: 1199px) {
  .fam-med {
    width: 100%;
  }
}

.mt-6 {
  margin-top: 5rem !important;
}

.side-sections {
  position: relative;
  height: 300rem;
  overflow: auto;
  z-index: 1;
}
</style>

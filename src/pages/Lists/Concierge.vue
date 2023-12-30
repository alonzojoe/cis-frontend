<template>
  <Toast />
  <div class="card">
    <titled-card class="mb-3" title="Search Patient">
      <div class="row mt-4">
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div>
            <label class="form-label fs-6 mb-2 fw-semibold"
              >Consultation No.</label
            >
            <input
              type="text"
              class="form-control form-control-sm custom-font cst-capital"
              v-model="formSearch.consultation_no"
              @keyup.enter="search()"
            />
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div>
            <label class="form-label fs-6 mb-2 fw-semibold">Last Name</label>
            <input
              type="text"
              class="form-control form-control-sm custom-font cst-capital"
              v-model="formSearch.lname"
              @keyup.enter="search()"
            />
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div>
            <label class="form-label fs-6 mb-2 fw-semibold">First Name</label>
            <input
              type="text"
              class="form-control form-control-sm custom-font cst-capital"
              v-model="formSearch.fname"
              @keyup.enter="search()"
            />
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div>
            <label class="form-label fs-6 mb-2 fw-semibold">Middle Name</label>
            <input
              type="text"
              class="form-control form-control-sm custom-font cst-capital"
              v-model="formSearch.mname"
              @keyup.enter="search()"
            />
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div>
            <label class="form-label fs-6 mb-2 fw-semibold">Birthdate</label>
            <input
              type="date"
              :max="currentData"
              class="form-control form-control-sm custom-font"
              v-model="formSearch.birthdate"
              @keyup.enter="search()"
            />
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div>
            <label class="form-label fs-6 mb-2 fw-semibold">Payment Type</label>
            <select
              class="form-control form-select-sm custom-font cst-capital form-select"
              v-model="formSearch.payment_type"
              @keyup.enter="search()"
            >
              <option value="">Please Select</option>
              <option value="CASH">CASH</option>
              <option value="HMO">HMO</option>
            </select>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div
            class="d-flex gap-2 align-items-center"
            style="margin-top: 1.7rem"
          >
            <button
              class="btn btn-primary"
              @click="search()"
              @keyup.enter="search()"
            >
              Search
            </button>
            <button class="btn btn-danger" @click="refresh()">Refresh</button>
          </div>
        </div>
      </div>
    </titled-card>
    <div class="d-flex justify-content-end align-items-center">
      <button class="btn btn-primary" @click="addPatient()">
        Add New Patient
      </button>
    </div>
    <div class="table-responsive mt-3">
      <table class="table table-bordered table-hover">
        <thead>
          <tr style="text-transform: capitalize !important">
            <th class="text-center bg-primary text-white fw-bold p-1 m-0">
              Consultation No.
            </th>
            <th class="text-center bg-primary text-white fw-bold p-1 m-0">
              Consultation Date & Time
            </th>
            <th class="text-center bg-primary text-white fw-bold p-1 m-0">
              Patient Name
            </th>
            <th class="text-center bg-primary text-white fw-bold p-1 m-0">
              Gender
            </th>
            <th class="text-center bg-primary text-white fw-bold p-1 m-0">
              Birthdate
            </th>
            <th class="text-center bg-primary text-white fw-bold p-1 m-0">
              Payment Type
            </th>
            <th class="text-center bg-primary text-white fw-bold p-1 m-0">
              Physician
            </th>
            <th class="text-center bg-primary text-white fw-bold p-1 m-0">
              Options
            </th>
            <th class="text-center bg-primary text-white fw-bold p-1 m-0">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in patients" :key="p.consultation_id">
            <td class="text-center align-middle fw-normal p-1 m-0">
              {{ p.consultation_no }}
            </td>
            <td class="text-center align-middle fw-normal p-1 m-0">
              {{ p.consultation_datetime }}
            </td>
            <td class="text-center align-middle fw-normal p-1 m-0">
              {{ p.patient_lname }}, {{ p.patient_fname }}
              {{ p.patient_mname }} {{ p.patient_suffix }}
            </td>
            <td class="text-center align-middle fw-normal p-1 m-0">
              {{ p.gender }}
            </td>
            <td class="text-center align-middle fw-normal p-1 m-0">
              {{ p.birthdate }}
            </td>
            <td class="text-center align-middle fw-normal p-1 m-0">
              {{ p.payment_type }}
            </td>
            <td class="text-center align-middle fw-normal p-1 m-0">
              {{ p.physician }}
            </td>
            <td class="text-center align-middle fw-normal p-1 m-0">
              <button class="btn btn-warning btn-sm" @click="updateChart(p)">
                Update Chart
              </button>
            </td>
            <td class="text-center align-middle fw-normal p-1 m-0">
              <button
                class="btn btn-sm"
                :class="
                  p.consultation_status == 0 ? 'btn-success' : 'btn-danger'
                "
                @click="changeStatus(p)"
              >
                Set {{ p.consultation_status == 0 ? "Active" : "Inactive" }}
              </button>
            </td>
          </tr>
          <tr v-if="!patients.length && !isLoading">
            <td class="text-center align-middle fw-bold p-1 m-0" colspan="9">
              No records found.
            </td>
          </tr>
          <tr v-if="isLoading">
            <td colspan="9">
              <div class="d-flex align-items-center justify-content-center">
                <div class="d-flex align-items-center jusitfy-content-center">
                  <div class="sk-wave sk-primary">
                    <div class="sk-wave-rect"></div>
                    <div class="sk-wave-rect"></div>
                    <div class="sk-wave-rect"></div>
                    <div class="sk-wave-rect"></div>
                    <div class="sk-wave-rect"></div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <paginator
      v-if="!isLoading && patients.length"
      :data="paginationData"
      @update:currentPage="updateCurrentPage($event)"
    />
  </div>
  <modal-sm :details="modalDetails" @close-modal="modalDetails.show = false">
    <div class="d-flex align-items-center justify-content-center">
      <h3 class="mt-2">Patient Type</h3>
    </div>
    <div class="row mt-1 mb-3 px-4">
      <div class="col-sm-12 col-md-6 col-lg-6">
        <div
          class="form-check custom-option custom-option-icon"
          :class="{ checked: patientType == 'old' }"
          @click="chooseType('old')"
        >
          <label class="form-check-label custom-option-content">
            <span class="custom-option-body">
              <i class="fa-solid fa-hospital-user"></i>
              <span class="custom-option-title">Old</span>
              <small> (Patient with existing clinic records) </small>
            </span>
            <input
              class="form-check-input"
              type="radio"
              value="old"
              v-model="patientType"
            />
          </label>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6">
        <div
          class="form-check custom-option custom-option-icon"
          :class="{ checked: patientType == 'new' }"
          @click="chooseType('new')"
        >
          <label class="form-check-label custom-option-content">
            <span class="custom-option-body">
              <i class="fa-solid fa-user-plus"></i>

              <span class="custom-option-title"> New </span>
              <small> (New patient without existing records) </small>
            </span>
            <input
              class="form-check-input"
              type="radio"
              value="new"
              v-model="patientType"
            />
          </label>
        </div>
      </div>
    </div>
    <div class="row px-4">
      <div class="col-sm-12 col-md-12 col-lg-12 mb-4">
        <div>
          <button
            class="btn btn-primary w-100"
            @click="proceed()"
            :disabled="!patientType"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  </modal-sm>
  <modal-md :details="modalData" @close-modal="modalData.show = false">
    <div class="mt-2 card px-5 mb-2">
      <titled-card class="mt-4 mb-2 shadow">
        <div class="row mt-1">
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div>
              <label class="form-label fs-6 mb-2 fw-semibold">Last Name</label>
              <input
                type="text"
                class="form-control form-control-sm custom-font cst-capital"
                v-model="formExisting.lname"
                @keyup.enter="searchPatient()"
              />
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div>
              <label class="form-label fs-6 mb-2 fw-semibold">First Name</label>
              <input
                type="text"
                class="form-control form-control-sm custom-font cst-capital"
                v-model="formExisting.fname"
                @keyup.enter="searchPatient()"
              />
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div>
              <label class="form-label fs-6 mb-2 fw-semibold"
                >Middle Name</label
              >
              <input
                type="text"
                class="form-control form-control-sm custom-font cst-capital"
                v-model="formExisting.mname"
                @keyup.enter="searchPatient()"
              />
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div>
              <label class="form-label fs-6 mb-2 fw-semibold">Birthdate</label>
              <input
                type="date"
                :max="currentData"
                class="form-control form-control-sm custom-font"
                v-model="formExisting.birthdate"
                @keyup.enter="searchPatient()"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div
              class="d-flex gap-2 align-items-center"
              style="margin-top: 1.7rem"
            >
              <button
                class="btn btn-primary btn-sm"
                @click="searchPatient()"
                @keyup.enter="searchPatient()"
              >
                Search
              </button>
              <button class="btn btn-danger btn-sm" @click="resetExisting()">
                Reset
              </button>
            </div>
          </div>
        </div>
      </titled-card>
      <div class="table-responsive mt-3">
        <table class="table table-bordered table-hover">
          <thead>
            <tr style="text-transform: capitalize !important">
              <th class="text-center bg-primary text-white fw-bold p-1 m-0">
                Patient Name
              </th>
              <th class="text-center bg-primary text-white fw-bold p-1 m-0">
                Gender
              </th>
              <th class="text-center bg-primary text-white fw-bold p-1 m-0">
                Birthdate
              </th>
              <th class="text-center bg-primary text-white fw-bold p-1 m-0">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in existingPatients" :key="p.id">
              <td class="text-center align-middle fw-normal p-1 m-0">
                {{ p.lname }}, {{ p.fname }} {{ p.mname }} {{ suffix }}
              </td>
              <td class="text-center align-middle fw-normal p-1 m-0">
                {{ p.gender }}
              </td>
              <td class="text-center align-middle fw-normal p-1 m-0">
                {{ p.birthdate }}
              </td>
              <td class="text-center align-middle fw-normal p-1 m-0">
                <button class="btn btn-warning btn-sm" @click="addNewChart(p)">
                  Add New Chart
                </button>
              </td>
            </tr>
            <tr v-if="!existingPatients.length && !loadingExisting">
              <td class="text-center align-middle fw-bold p-1 m-0" colspan="4">
                <span>No records found.</span>
              </td>
            </tr>
            <tr v-if="loadingExisting">
              <td colspan="4">
                <div class="d-flex align-items-center justify-content-center">
                  <div class="d-flex align-items-center jusitfy-content-center">
                    <div class="sk-wave sk-primary">
                      <div class="sk-wave-rect"></div>
                      <div class="sk-wave-rect"></div>
                      <div class="sk-wave-rect"></div>
                      <div class="sk-wave-rect"></div>
                      <div class="sk-wave-rect"></div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-3" v-if="triggerSearch && !existingPatients.length">
        <span
          >No results found for
          <span class="fst-italic cst-capital"
            >{{ formExisting.lname }}, {{ formExisting.fname }}</span
          ></span
        >
        &nbsp;<button
          class="ml-5 btn btn-warning btn-sm"
          @click="instead('new')"
        >
          Add New Patient Instead?
        </button>
      </div>
    </div>
  </modal-md>
  <loader
    :title="statusMessage"
    :warning="true"
    :create="true"
    v-if="statusFlag"
  />
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  inject,
  computed,
  onMounted,
  watch,
  watchEffect,
} from "vue";
import { useStore } from "vuex";
import TitledCard from "@/components/Cards/TitledCard.vue";
import Paginator from "@/components/Paginators/Paginator.vue";
import ModalMd from "@/components/Modals/ModalMd.vue";
import ModalSm from "@/components/Modals/ModalSm.vue";
import { useRouter } from "vue-router";
import { encryptData, swalMessage, swalConfirmation } from "@/service";
import moment from "moment";
import ConfirmPopup from "primevue/confirmpopup";
import Toast from "primevue/toast";
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";
import Loader from "@/components/Loaders/Loader.vue";
export default defineComponent({
  name: "PatientConcierge",
  components: {
    TitledCard,
    Paginator,
    ModalMd,
    ModalSm,
    ConfirmPopup,
    Toast,
    Loader,
  },
  setup() {
    const modalDetails = ref({
      show: false,
      title: "New Consultation",
    });

    const confirm = useConfirm();
    const toast = useToast();

    const confirm1 = (event) => {
      confirm.require({
        target: event.currentTarget,
        message: "Are you sure you want to proceed?",
        icon: "pi pi-exclamation-triangle",
        accept: () => {
          toast.add({
            severity: "info",
            summary: "Confirmed",
            detail: "You have accepted",
            life: 3000,
          });
        },
        reject: () => {
          toast.add({
            severity: "error",
            summary: "Rejected",
            detail: "You have rejected",
            life: 3000,
          });
        },
      });
    };

    const router = useRouter();
    const addPatient = () => {
      resetExisting();
      triggerSearch.value = false;
      patientType.value = false;
      modalDetails.value.show = true;
    };

    const formSearch = ref({
      consultation_no: "",
      lname: "",
      fname: "",
      mname: "",
      birthdate: "",
      payment_type: "",
    });

    const resetSearch = () => {
      Object.keys(formSearch.value).forEach((key) => {
        formSearch.value[key] = "";
      });
    };
    const swal = inject("$swal");
    const store = useStore();
    const patients = computed(() => store.getters.getPatients);
    const totalPatients = computed(() => store.getters.getTotalPatients);
    const patientsPages = computed(() => store.getters.getPaginatedPatients);

    const paginationData = ref({
      totalRecords: totalPatients.value,
      totalPages: patientsPages.value,
      perPage: 10,
      currentPage: 1,
    });

    watch([totalPatients, patientsPages], ([total, pages]) => {
      paginationData.value.totalRecords = total;
      paginationData.value.totalPages = pages;
    });

    const isLoading = ref(false);
    const fetchPatients = async (page, form) => {
      await store.commit("setPatientsEmpty");
      isLoading.value = true;
      await store.dispatch("fetchConcierge", { page: page, ...form });
      isLoading.value = false;
    };

    const updateCurrentPage = (newPage: number) => {
      paginationData.value.currentPage = newPage;
      fetchPatients(newPage, formSearch.value);
    };

    const search = async () => {
      isLoading.value = true;
      await store.commit("setPatientsEmpty");
      paginationData.value.currentPage = 1;
      await fetchPatients(1, formSearch.value);
    };

    const refresh = () => {
      resetSearch();
      search();
    };

    const patientType = ref("");

    const chooseType = (type) => {
      patientType.value = type;
    };

    const params = ref({});

    const setParams = (type, patient) => {
      if (type == "update") {
        params.value = {
          type: type,
          consultation_id: patient.consultation_id,
        };
      } else if (type == "new") {
        params.value = {
          type: type,
          consultation_id: 0,
        };
      } else if (type == "existing") {
        params.value = {
          type: type,
          consultation_id: 0,
          patient_id: patient.id,
        };
      }
    };

    //for old record
    const modalData = ref({
      title: "Search Patient",
      show: false,
    });

    const proceed = () => {
      if (patientType.value != "old") {
        setParams(patientType.value, 0);
        // console.log(params.value);
        const paramsString = encryptData(JSON.stringify(params.value));
        router.push({
          name: "chart",
          params: { data: encodeURIComponent(paramsString) },
        });
      } else {
        modalDetails.value.show = false;
        modalData.value.show = true;
      }
    };

    const updateChart = async (patient: object) => {
      setParams("update", patient);
      const paramsString = encryptData(JSON.stringify(params.value));
      router.push({
        name: "chart",
        params: { data: encodeURIComponent(paramsString) },
      });
    };

    const instead = (type) => {
      chooseType(type);
      proceed();
    };

    const addNewChart = (patient) => {
      setParams("existing", patient);
      const paramsString = encryptData(JSON.stringify(params.value));
      router.push({
        name: "chart",
        params: { data: encodeURIComponent(paramsString) },
      });
    };

    const formExisting = computed(() => store.getters.getFormExisting);
    const existingPatients = computed(() => store.getters.getExistingPatients);
    const loadingExisting = ref(false);
    const triggerSearch = ref(false);
    const searchPatient = async () => {
      if (validateSearch()) {
        swalMessage(
          swal,
          "Warrning",
          "Please fill up search fields.",
          "warning"
        );
        return;
      }

      store.commit("resetExistingPatients");
      loadingExisting.value = true;
      await store.dispatch("searchExisting", formExisting.value);
      loadingExisting.value = false;
      triggerSearch.value = true;
    };

    const validateSearch = () => {
      for (const key in formExisting.value) {
        if (formExisting.value[key] !== "") {
          return false;
        }
      }

      return true;
    };

    const resetExisting = () => {
      store.commit("resetExistingPatients");
      store.commit("resetFormExisting");
      triggerSearch.value = false;
    };

    const currentDate = moment(Date.now()).format("yyyy-MM-DD");

    const statusFlag = ref(false);
    const statusMessage = ref("");
    const changeStatus = async (patient) => {
      const message = patient.consultation_status == 1 ? "Inactive" : "Active";
      statusMessage.value =
        patient.consultation_status == 1
          ? "Patient is being set to inactive..."
          : "Patient is being set to active...";
      swalConfirmation(
        swal,
        "Confirmation",
        `Are you sure to set this Patient ${message}?`,
        "question"
      ).then(async (res) => {
        if (res.isConfirmed) {
          statusFlag.value = true;
          await store.dispatch("changeChartStatus", patient);
          statusFlag.value = false;

          toast.add({
            severity: "success",
            summary: "Information",
            detail: `Patient to ${message}!`,
            life: 3000,
          });
          refresh();
        }
      });
    };

    onMounted(async () => {
      await fetchPatients(1, formSearch.value);
    });

    return {
      modalDetails,
      addPatient,
      //fetch
      patients,
      formSearch,
      paginationData,
      isLoading,
      updateCurrentPage,
      search,
      refresh,
      patientType,
      chooseType,
      proceed,
      updateChart,
      modalData,
      instead,
      formExisting,
      existingPatients,
      loadingExisting,
      searchPatient,
      resetExisting,
      currentDate,
      triggerSearch,
      addNewChart,
      confirm1,
      changeStatus,
      statusFlag,
      statusMessage,
    };
  },
});
</script>

<style scoped></style>

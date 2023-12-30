<template>
  <div class="card">
    <Toast />
    <titled-card class="mb-3" title="Search Physician">
      <div class="row mt-4">
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div>
            <label class="form-label fs-6 mb-2 fw-semibold">License No.</label>
            <input
              type="text"
              class="form-control form-control-sm custom-font"
              v-model="formSearch.license_no"
              @keyup.enter="search()"
            />
          </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div>
            <label class="form-label fs-6 mb-2 fw-semibold">Last Name</label>
            <input
              type="text"
              class="form-control form-control-sm custom-font"
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
              class="form-control form-control-sm custom-font"
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
              class="form-control form-control-sm custom-font"
              v-model="formSearch.mname"
              @keyup.enter="search()"
            />
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div
            class="d-flex gap-2 align-items-center"
            style="margin-top: 1.7rem"
          >
            <button
              class="btn btn-primary"
              @keyup.enter="search()"
              @click.prevent="search()"
            >
              Search
            </button>
            <button class="btn btn-danger" @click.prevent="refresh()">
              Refresh
            </button>
          </div>
        </div>
      </div>
    </titled-card>
    <div class="d-flex justify-content-end align-items-center">
      <button class="btn btn-primary" @click="addPhysician()">
        Add New Patient
      </button>
    </div>
    <div class="table-responsive mt-3">
      <table class="table table-bordered table-hover">
        <thead>
          <tr style="text-transform: capitalize !important">
            <th class="text-center bg-primary text-white fw-bold p-1 m-0">
              License No.
            </th>
            <th class="text-center bg-primary text-white fw-bold p-1 m-0">
              Physician
            </th>
            <th class="text-center bg-primary text-white fw-bold p-1 m-0">
              Created At
            </th>
            <th class="text-center bg-primary text-white fw-bold p-1 m-0">
              Updated At
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
          <tr v-for="p in physicians" :key="p.id">
            <td class="text-center align-middle fw-normal p-1 m-0">
              {{ p.license_no }}
            </td>
            <td class="text-center align-middle fw-normal p-1 m-0">
              {{ p.lname }}, {{ p.fname }} {{ p.mname }}
            </td>
            <td class="text-center align-middle fw-normal p-1 m-0">
              {{ p.created_at }}
            </td>
            <td class="text-center align-middle fw-normal p-1 m-0">
              {{ p.updated_at }}
            </td>
            <td class="text-center align-middle fw-normal p-1 m-0">
              <button class="btn btn-warning btn-sm" @click="updateRecord(p)">
                Update Physician
              </button>
            </td>
            <td class="text-center align-middle fw-normal p-1 m-0">
              <button
                class="btn btn-sm"
                :class="p.status == 0 ? 'btn-success' : 'btn-danger'"
                @click="changeStatus(p)"
              >
                Set {{ p.status == 0 ? "Active" : "Inactive" }}
              </button>
            </td>
          </tr>
          <tr v-if="!physicians.length && !isLoading">
            <td class="text-center align-middle fw-bold p-1 m-0" colspan="6">
              No records found.
            </td>
          </tr>
          <tr v-if="isLoading">
            <td colspan="6">
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
      v-if="!isLoading && physicians.length"
      :data="paginationData"
      @update:currentPage="updateCurrentPage($event)"
    />
  </div>
  <modal-sm :details="modalDetails" @close-modal="modalDetails.show = false">
    <!-- <div class="d-flex align-items-center justify-content-center mt-4">
            <div class="card shadow h-100">
                <div class="card-body">
                    <div class="bg-label-primary rounded-3 text-center">
                        <img src="../../assets/images/physician.jpg" alt="Physician" width="150" height="150">
                    </div>
                </div>
            </div>
        </div> -->
    <div class="row mt-4 px-5">
      <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
        <h4 class="text-center fw-bold">Physician Details</h4>
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold">License No. </label>
          <input
            type="text"
            class="form-control form-control-sm custom-font"
            maxlength="255"
            v-model="formData.license_no"
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
        <div
          :class="{ 'group-invalid': saveSubmitted && !validationStatus.lname }"
        >
          <label class="form-label fs-6 mb-2 fw-semibold"
            >Last Name <span class="text-danger">*</span></label
          >
          <input
            type="text"
            class="form-control form-control-sm custom-font cst-capital"
            maxlength="255"
            v-model="formData.lname"
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
        <div
          :class="{ 'group-invalid': saveSubmitted && !validationStatus.fname }"
        >
          <label class="form-label fs-6 mb-2 fw-semibold"
            >First Name <span class="text-danger">*</span></label
          >
          <input
            type="text"
            class="form-control form-control-sm custom-font cst-capital"
            maxlength="255"
            v-model="formData.fname"
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold">Middle Name</label>
          <input
            type="text"
            class="form-control form-control-sm custom-font cst-capital"
            maxlength="255"
            v-model="formData.mname"
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-12 mb-4">
        <div>
          <button class="btn btn-primary w-100" @click="saveRecord()">
            {{ formData.id == 0 ? "Save" : "Update" }} Physician Record
          </button>
        </div>
      </div>
    </div>
  </modal-sm>
  <loader
    :title="
      formData.id == 0
        ? 'Saving Physician Record...'
        : 'Updating Physician Record...'
    "
    :warning="true"
    :create="true"
    v-if="savingFlag"
  />
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
import ModalSm from "@/components/Modals/ModalSm.vue";
import { swalMessage, swalConfirmation } from "@/service";
import Loader from "@/components/Loaders/Loader.vue";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import {
  validateFields,
  validationStatus,
} from "@/pages/Settings/Validations/physicianValidation";
export default defineComponent({
  name: "Physicians",
  components: {
    TitledCard,
    Paginator,
    ModalSm,
    Loader,
    Toast,
  },
  setup() {
    const toast = useToast();
    const showSuccess = () => {
      toast.add({
        severity: "error",
        summary: "Success Message",
        detail: "Message Content",
        life: 3000,
      });
    };
    const formSearch = ref({
      license_no: "",
      lname: "",
      fname: "",
      mname: "",
    });

    const resetSearch = () => {
      Object.keys(formSearch.value).forEach((key) => {
        formSearch.value[key] = "";
      });
    };

    const store = useStore();
    const physicians = computed(() => store.getters.getPhysicians);
    const totalPhysicians = computed(() => store.getters.getTotalPhysicians);
    const paginatedPhysicians = computed(
      () => store.getters.getPaginatedPhysicians
    );

    const paginationData = ref({
      totalRecords: totalPhysicians.value,
      totalPages: paginatedPhysicians.value,
      perPage: 10,
      currentPage: 1,
    });

    watch([totalPhysicians, paginatedPhysicians], ([total, pages]) => {
      paginationData.value.totalRecords = total;
      paginationData.value.totalPages = pages;
    });

    const isLoading = ref(false);
    const fetchPhysicians = async (page, form) => {
      await store.commit("setPhysiciansEmpty");
      isLoading.value = true;
      await store.dispatch("fetchPhysicians", { page: page, ...form });
      isLoading.value = false;
    };

    const updateCurrentPage = (newPage: number) => {
      paginationData.value.currentPage = newPage;
      fetchPhysicians(newPage, formSearch.value);
    };

    const search = async () => {
      isLoading.value = true;
      await store.commit("setPhysiciansEmpty");
      paginationData.value.currentPage = 1;
      await fetchPhysicians(1, formSearch.value);
    };

    const refresh = () => {
      resetSearch();
      search();
    };

    const modalDetails = ref({
      show: false,
      title: "Add New Physician",
    });

    const addPhysician = () => {
      resetter();
      store.commit("resetFormPhysician");
      modalDetails.value.show = true;
      modalDetails.value.title = "Add New Physician";
    };
    const swal = inject("$swal");
    const formData = computed(() => store.getters.getFormPhysician);
    const response = computed(() => store.getters.getPhysiciansResponse);
    const savingFlag = ref(false);
    const saveSubmitted = ref(false);
    const saveRecord = async () => {
      saveSubmitted.value = true;
      const errors = await validateFields(toast, formData.value, 0);

      if (errors.value == 0) {
        const confirmMessage = formData.value.id == 0 ? "save" : "update";
        const message = formData.value.id == 0 ? "added" : "updated";
        swalConfirmation(
          swal,
          "Confirmation",
          `Are you sure to ${confirmMessage} physician record?`,
          "question"
        ).then(async (res) => {
          if (res.isConfirmed) {
            if (savingFlag.value) {
              return;
            }
            savingFlag.value = true;
            await store.dispatch("savePhysician", formData.value);
            modalDetails.value.show = false;
            resetter();
            swalMessage(
              swal,
              "Information",
              `Physician ${message} successfully!`,
              "success"
            ).then(() => {
              refresh();
            });
          }
        });
        // console.log("response save", response.value);
      }
    };

    const updateRecord = async (physician) => {
      resetter();
      await store.commit("setFormPhysician", physician);
      modalDetails.value.show = true;
      modalDetails.value.title = "Update Physician Record";
    };

    const resetter = () => {
      savingFlag.value = false;
      saveSubmitted.value = false;
    };

    watch(
      () => {
        formData.value;
        if (saveSubmitted.value == true) {
          validateFields(toast, formData.value, 1);
        }
      },
      { deep: true }
    );

    const statusFlag = ref(false);
    const statusMessage = ref("");
    const changeStatus = async (physician) => {
      const message = physician.status == 1 ? "Inactive" : "Active";
      statusMessage.value =
        physician.status == 1
          ? "Physician is being set to inactive..."
          : "Physician is being set to active...";
      swalConfirmation(
        swal,
        "Confirmation",
        `Are you sure to set this physician ${message}?`,
        "question"
      ).then(async (res) => {
        if (res.isConfirmed) {
          statusFlag.value = true;
          await store.dispatch("changeStatus", physician);
          statusFlag.value = false;

          toast.add({
            severity: "success",
            summary: "Information",
            detail: `Physician to ${message}!`,
            life: 3000,
          });
          refresh();
          // swalMessage(swal, 'Information', `Physician to ${message}!`, 'success').then(() => {
          //     refresh()
          // })
        }
      });
    };

    onMounted(async () => {
      await fetchPhysicians(1, formSearch.value);
    });

    return {
      formSearch,
      physicians,
      paginationData,
      isLoading,
      updateCurrentPage,
      search,
      refresh,
      modalDetails,
      addPhysician,
      formData,
      saveRecord,
      savingFlag,
      updateRecord,
      showSuccess,
      validationStatus,
      saveSubmitted,
      changeStatus,
      statusFlag,
      statusMessage,
    };
  },
});
</script>

<style scoped></style>

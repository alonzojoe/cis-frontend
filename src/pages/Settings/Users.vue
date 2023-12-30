<template>
  <div class="card">
    <Toast />
    <titled-card class="mb-3" title="Search User">
      <div class="row mt-4">
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div>
            <label class="form-label fs-6 mb-2 fw-semibold">Email</label>
            <input
              type="text"
              class="form-control form-control-sm custom-font"
              v-model="formSearch.email"
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
      <button class="btn btn-primary" @click="addUser()">Add New User</button>
    </div>
    <div class="table-responsive mt-3">
      <table class="table table-bordered table-hover">
        <thead>
          <tr style="text-transform: capitalize !important">
            <th class="text-center bg-primary text-white fw-bold p-1 m-0">
              Email
            </th>
            <th class="text-center bg-primary text-white fw-bold p-1 m-0">
              User
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
          </tr>
        </thead>
        <tbody>
          <tr v-for="u in users" :key="u.id">
            <td class="text-center align-middle fw-normal p-1 m-0">
              {{ u.email }}
            </td>
            <td class="text-center align-middle fw-normal p-1 m-0">
              {{ u.lname }}, {{ u.fname }} {{ u.mname }}
            </td>
            <td class="text-center align-middle fw-normal p-1 m-0">
              {{ u.created_at }}
            </td>
            <td class="text-center align-middle fw-normal p-1 m-0">
              {{ u.updated_at }}
            </td>
            <td class="text-center align-middle fw-normal p-1 m-0">
              <button class="btn btn-warning btn-sm" @click="updateRecord(u)">
                Update User
              </button>
            </td>
          </tr>
          <tr v-if="!users.length && !isLoading">
            <td class="text-center align-middle fw-bold p-1 m-0" colspan="5">
              No records found.
            </td>
          </tr>
          <tr v-if="isLoading">
            <td colspan="5">
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
      v-if="!isLoading && users.length"
      :data="paginationData"
      @update:currentPage="updateCurrentPage($event)"
    />
  </div>
  <modal-sm :details="modalDetails" @close-modal="modalDetails.show = false">
    <div class="row mt-4 px-5">
      <div class="col-sm-12 col-md-12 col-lg-6 mb-3">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
            <h4 class="fw-bold">User Details</h4>
            <div
              :class="{
                'group-invalid': saveSubmitted && !validationStatus.lname,
              }"
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
              :class="{
                'group-invalid': saveSubmitted && !validationStatus.fname,
              }"
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
              <label class="form-label fs-6 mb-2 fw-semibold"
                >Middle Name
              </label>
              <input
                type="text"
                class="form-control form-control-sm custom-font cst-capital"
                maxlength="255"
                v-model="formData.mname"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-6 mb-3">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
            <h4 class="fw-bold">User Credentials</h4>
            <div
              :class="{
                'group-invalid': saveSubmitted && !validationStatus.email,
              }"
            >
              <label class="form-label fs-6 mb-2 fw-semibold"
                >Email <span class="text-danger">*</span></label
              >
              <input
                type="text"
                class="form-control form-control-sm custom-font"
                maxlength="255"
                v-model="formData.email"
                :disabled="formData.id != 0"
              />
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
            <div
              :class="{
                'group-invalid':
                  (saveSubmitted && !validationStatus.bool) ||
                  (saveSubmitted && validationStatus.pwLength) ||
                  (saveSubmitted && validationStatus.mismatch),
              }"
            >
              <label class="form-label fs-6 mb-2 fw-semibold"
                >Password <span class="text-danger">*</span></label
              >
              <div
                class="input-group"
                :class="{
                  'group-invalid':
                    (saveSubmitted && !validationStatus.bool) ||
                    (saveSubmitted && validationStatus.pwLength) ||
                    (saveSubmitted && validationStatus.mismatch),
                }"
              >
                <input
                  :type="eyedPw ? 'text' : 'password'"
                  class="form-control form-control-sm custom-font"
                  v-model="formData.bool"
                />
                <span
                  id="basic-default-password2"
                  class="input-group-text cursor-pointer"
                  @click="eyedPw = !eyedPw"
                >
                  <i class="ti" :class="eyedPw ? 'ti-eye' : 'ti-eye-off'"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
            <div
              :class="{
                'group-invalid':
                  (saveSubmitted && !validationStatus.conf) ||
                  (saveSubmitted && validationStatus.pwLength) ||
                  (saveSubmitted && validationStatus.mismatch),
              }"
            >
              <label class="form-label fs-6 mb-2 fw-semibold"
                >Confirm Password <span class="text-danger">*</span></label
              >
              <div
                class="input-group"
                :class="{
                  'group-invalid':
                    (saveSubmitted && !validationStatus.conf) ||
                    (saveSubmitted && validationStatus.pwLength) ||
                    (saveSubmitted && validationStatus.mismatch),
                }"
              >
                <input
                  :type="eyedCf ? 'text' : 'password'"
                  class="form-control form-control-sm custom-font"
                  v-model="formData.conf"
                />
                <span
                  id="basic-default-password2"
                  class="input-group-text cursor-pointer"
                  @click="eyedCf = !eyedCf"
                >
                  <i class="ti" :class="eyedCf ? 'ti-eye' : 'ti-eye-off'"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row px-5">
      <div class="col-sm-12 col-md-12 col-lg-12 mb-4">
        <div>
          <button class="btn btn-primary w-100" @click="saveRecord()">
            Save User Credentials
          </button>
        </div>
      </div>
    </div>
  </modal-sm>
  <loader
    :title="
      formData.id == 0 ? 'Saving User Record...' : 'Updating User Record...'
    "
    :warning="true"
    :create="true"
    v-if="savingFlag"
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
} from "@/pages/Settings/Validations/usersValidation";
import api from "@/api";
export default defineComponent({
  name: "Users",
  components: {
    TitledCard,
    Paginator,
    ModalSm,
    Loader,
    Toast,
  },
  setup() {
    const toast = useToast();
    const formSearch = ref({
      email: "",
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
    const users = computed(() => store.getters.getUsers);
    const totalUsers = computed(() => store.getters.getTotalUsers);
    const paginatedUsers = computed(() => store.getters.getPaginatedUsers);

    const paginationData = ref({
      totalRecords: totalUsers.value,
      totalPages: paginatedUsers.value,
      perPage: 10,
      currentPage: 1,
    });

    watch([totalUsers, paginatedUsers], ([total, pages]) => {
      paginationData.value.totalRecords = total;
      paginationData.value.totalPages = pages;
    });

    const isLoading = ref(false);
    const fetchUsers = async (page, form) => {
      await store.commit("setUsersEmpty");
      isLoading.value = true;
      await store.dispatch("fetchUsers", { page: page, ...form });
      isLoading.value = false;
    };

    const updateCurrentPage = (newPage: number) => {
      paginationData.value.currentPage = newPage;
      fetchUsers(newPage, formSearch.value);
    };

    const search = async () => {
      isLoading.value = true;
      await store.commit("setUsersEmpty");
      paginationData.value.currentPage = 1;
      await fetchUsers(1, formSearch.value);
    };

    const refresh = () => {
      resetSearch();
      search();
    };

    const modalDetails = ref({
      show: false,
      title: "Create New User",
    });

    const addUser = () => {
      resetter();
      store.commit("resetFormUser");
      modalDetails.value.show = true;
      modalDetails.value.title = "Add New User";
    };

    const eyedPw = ref(false);
    const eyedCf = ref(false);

    const resetter = () => {
      eyedPw.value = false;
      eyedCf.value = false;
      savingFlag.value = false;
      saveSubmitted.value = false;
    };

    const checkEmail = async (form) => {
      if (form.id == 0) {
        const res = await api.get(`/user/check/${form.email}`);
        if (res.data.data != 0) {
          swalMessage(swal, "Warning", `Email already exists.`, "warning");
        }
        return res.data.data === 0;
      }
      return true;
    };

    const swal = inject("$swal");
    const formData = computed(() => store.getters.getFormUser);
    const savingFlag = ref(false);
    const saveSubmitted = ref(false);
    const saveRecord = async () => {
      saveSubmitted.value = true;
      const errors = await validateFields(toast, formData.value, 0);

      if (errors.value == 0) {
        const validateEmail = await checkEmail(formData.value);
        if (!validateEmail) {
          return;
        }
        const confirmMessage = formData.value.id == 0 ? "save" : "update";
        const message = formData.value.id == 0 ? "added" : "updated";
        swalConfirmation(
          swal,
          "Confirmation",
          `Are you sure to ${confirmMessage} user record?`,
          "question"
        ).then(async (res) => {
          if (res.isConfirmed) {
            if (savingFlag.value) {
              return;
            }
            savingFlag.value = true;
            await store.dispatch("saveUser", formData.value);
            modalDetails.value.show = false;
            resetter();
            swalMessage(
              swal,
              "Information",
              `User ${message} successfully!`,
              "success"
            ).then(() => {
              refresh();
            });
          }
        });
      }
    };

    const updateRecord = async (user) => {
      resetter();
      await store.commit("setFormUser", user);
      modalDetails.value.show = true;
      modalDetails.value.title = "Update User Record";
    };

    watch(
      () => {
        formData.value;
        if (saveSubmitted.value == true) {
          validateFields(toast, formData.value, 1);
          //   console.log("watcher is running");
        }
      },
      { deep: true }
    );

    onMounted(async () => {
      await fetchUsers(1, formSearch.value);
    });

    return {
      formSearch,
      users,
      paginationData,
      isLoading,
      updateCurrentPage,
      search,
      refresh,
      modalDetails,
      //saving
      addUser,
      formData,
      savingFlag,
      saveSubmitted,
      saveRecord,
      updateRecord,
      eyedPw,
      eyedCf,
      validationStatus,
    };
  },
});
</script>

<style scoped></style>

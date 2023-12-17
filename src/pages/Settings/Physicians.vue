<template>
    <div class="card">
        <titled-card class="mb-3" title="Search Physician">
            <div class="row mt-4">
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div>
                        <label class="form-label fs-6 mb-2 fw-semibold">License No.</label>
                        <input type="text" class="form-control form-control-sm custom-font" v-model="formSearch.license_no"
                            @keyup.enter="search()" />
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div>
                        <label class="form-label fs-6 mb-2 fw-semibold">Last Name</label>
                        <input type="text" class="form-control form-control-sm custom-font" v-model="formSearch.lname"
                            @keyup.enter="search()" />
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div>
                        <label class="form-label fs-6 mb-2 fw-semibold">First Name</label>
                        <input type="text" class="form-control form-control-sm custom-font" v-model="formSearch.fname"
                            @keyup.enter="search()" />
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div>
                        <label class="form-label fs-6 mb-2 fw-semibold">Middle Name</label>
                        <input type="text" class="form-control form-control-sm custom-font" v-model="formSearch.mname"
                            @keyup.enter="search()" />
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div class="d-flex gap-2 align-items-center" style="margin-top: 1.7rem;">
                        <button class="btn btn-primary" @keyup.enter="search()" @click.prevent="search()">Search</button>
                        <button class="btn btn-danger" @click.prevent="refresh()">Refresh</button>
                    </div>
                </div>
            </div>
        </titled-card>
        <div class="d-flex justify-content-end align-items-center">
            <button class="btn btn-primary" @click="addPhysician()">Add New Patient</button>
        </div>
        <div class="table-responsive mt-3">
            <table class="table table-bordered table-hover">
                <thead>
                    <tr style="text-transform:capitalize !important;">
                        <th class="text-center bg-primary text-white fw-bold p-1 m-0">License No.</th>
                        <th class="text-center bg-primary text-white fw-bold p-1 m-0">Physician</th>
                        <th class="text-center bg-primary text-white fw-bold p-1 m-0">Created At</th>
                        <th class="text-center bg-primary text-white fw-bold p-1 m-0">Updated At</th>
                        <th class="text-center bg-primary text-white fw-bold p-1 m-0">Options</th>
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
                            <button class="btn btn-warning btn-sm" @click="updateRecord(p)">Update Physician</button>
                        </td>
                    </tr>
                    <tr v-if="!physicians.length && !isLoading">
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
        <paginator v-if="!isLoading && physicians.length" :data="paginationData"
            @update:currentPage="updateCurrentPage($event)" />
    </div>
    <modal-sm :details="modalDetails" @close-modal="modalDetails.show = false">
        <div class="d-flex align-items-center justify-content-center mt-4">
            <div class="card shadow h-100">
                <div class="card-body">
                    <div class="bg-label-primary rounded-3 text-center">
                        <img src="../../assets/images/physician.jpg" alt="Physician" width="150" height="150">
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-4 px-5">
            <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
                <div>
                    <label class="form-label fs-6 mb-2 fw-semibold">License No.</label>
                    <input type="text" class="form-control form-control-sm custom-font" maxlength="255"
                        v-model="formData.license_no" />
                </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
                <div>
                    <label class="form-label fs-6 mb-2 fw-semibold">Last Name</label>
                    <input type="text" class="form-control form-control-sm custom-font" maxlength="255"
                        v-model="formData.lname" />
                </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
                <div>
                    <label class="form-label fs-6 mb-2 fw-semibold">First Name</label>
                    <input type="text" class="form-control form-control-sm custom-font" maxlength="255"
                        v-model="formData.fname" />
                </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
                <div>
                    <label class="form-label fs-6 mb-2 fw-semibold">Middle Name</label>
                    <input type="text" class="form-control form-control-sm custom-font" maxlength="255"
                        v-model="formData.mname" />
                </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
                <div>
                    <button class="btn btn-primary w-100" @click="saveRecord()">Save Physician Record</button>
                </div>
            </div>
        </div>
        {{ formData }}
    </modal-sm>
    <loader title="Saving Physician Record..." :warning="true" :create="true" v-if="savingFlag" />
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
import TitledCard from '@/components/Cards/TitledCard.vue';
import Paginator from '@/components/Paginators/Paginator.vue';
import ModalSm from "@/components/Modals/ModalSm.vue";
import { swalMessage, swalConfirmation } from '@/service'
import Loader from '@/components/Loaders/Loader.vue'
export default defineComponent({
    name: "Physicians",
    components: {
        TitledCard,
        Paginator,
        ModalSm,
        Loader
    },
    setup() {

        const formSearch = ref({
            license_no: "",
            lname: "",
            fname: "",
            mname: "",
        });

        const resetSearch = () => {
            Object.keys(formSearch.value).forEach((key) => {
                formSearch.value[key] = ""
            })
        }

        const store = useStore();
        const physicians = computed(() => store.getters.getPhysicians);
        const totalPhysicians = computed(() => store.getters.getTotalPhysicians)
        const paginatedPhysicians = computed(() => store.getters.getPaginatedPhysicians)

        const paginationData = ref({
            totalRecords: totalPhysicians.value,
            totalPages: paginatedPhysicians.value,
            perPage: 10,
            currentPage: 1,
        });

        watch([totalPhysicians, paginatedPhysicians], ([total, pages]) => {
            paginationData.value.totalRecords = total;
            paginationData.value.totalPages = pages;
        })

        const isLoading = ref(false)
        const fetchPhysicians = async (page, form) => {
            await store.commit('setPhysiciansEmpty')
            isLoading.value = true;
            await store.dispatch('fetchPhysicians', { page: page, ...form })
            isLoading.value = false;
        }

        const updateCurrentPage = (newPage: number) => {
            paginationData.value.currentPage = newPage
            fetchPhysicians(newPage, formSearch.value)
        }

        const search = async () => {
            isLoading.value = true
            await store.commit('setPatientsEmpty')
            paginationData.value.currentPage = 1
            await fetchPhysicians(1, formSearch.value)
        }

        const refresh = () => {
            resetSearch();
            search();
        }

        const modalDetails = ref({
            show: false,
            title: 'Add New Physician',
        })



        const addPhysician = () => {
            store.commit('resetFormPhysician')
            modalDetails.value.show = true
        }
        const swal = inject("$swal");
        const formData = computed(() => store.getters.getFormPhysician)
        const response = computed(() => store.getters.getPhysiciansResponse)
        const savingFlag = ref(false);
        const saveRecord = async (res) => {

            swalConfirmation(swal, 'Confirmation', 'Are you sure to save new Physician Record?', 'question').then(async (res) => {
                if (res.isConfirmed) {
                    savingFlag.value = true
                    await store.dispatch('savePhysician', formData.value)
                    modalDetails.value.show = false
                    savingFlag.value = false
                    swalMessage(swal, 'Information', 'Physician added successfully!', 'success').then(() => {
                        refresh()
                    })
                }
            })
            console.log('response save', response.value)

        }

        const updateRecord = async (physician) => {

        }

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
            updateRecord

        }
    }
})
</script>

<style scoped></style>
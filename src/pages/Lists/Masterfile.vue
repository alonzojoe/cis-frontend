<template>
    <div class="card">
        <titled-card class="mb-3" title="Search Patient">
            <div class="row mt-4">
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div>
                        <label class="form-label fs-6 mb-2 fw-semibold">Consultation No.</label>
                        <input type="text" class="form-control form-control-sm custom-font"
                            v-model="formSearch.consultation_no" @keyup.enter="search()" />
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
                    <div>
                        <label class="form-label fs-6 mb-2 fw-semibold">Birthdate</label>
                        <input type="date" class="form-control form-control-sm custom-font" v-model="formSearch.birthdate"
                            @keyup.enter="search()" />
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div>
                        <label class="form-label fs-6 mb-2 fw-semibold">Date From</label>
                        <input type="date" class="form-control form-control-sm custom-font"
                            v-model="formSearch.date_from" />
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div>
                        <label class="form-label fs-6 mb-2 fw-semibold">Date To</label>
                        <input type="date" class="form-control form-control-sm custom-font" v-model="formSearch.date_to" />
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div class="d-flex gap-2 align-items-center" style="margin-top: 1.7rem;">
                        <button class="btn btn-primary" @click="search()" @keyup.enter="search()">Search</button>
                        <button class="btn btn-danger" @click="refresh()">Refresh</button>
                    </div>
                </div>
            </div>
        </titled-card>
        <!-- <div class="d-flex justify-content-end align-items-center">
            <button class="btn btn-primary">Add New Patient</button>
        </div> -->
        <div class="table-responsive mt-3">
            <table class="table table-bordered table-hover">
                <thead>
                    <tr style="text-transform:capitalize !important;">
                        <th class="text-center bg-primary text-white fw-bold p-1 m-0">Consultation No.</th>
                        <th class="text-center bg-primary text-white fw-bold p-1 m-0">Consultation Date & Time</th>
                        <th class="text-center bg-primary text-white fw-bold p-1 m-0">Patient Name</th>
                        <th class="text-center bg-primary text-white fw-bold p-1 m-0">Gender</th>
                        <th class="text-center bg-primary text-white fw-bold p-1 m-0">Birthdate</th>
                        <th class="text-center bg-primary text-white fw-bold p-1 m-0">Payment Type</th>
                        <th class="text-center bg-primary text-white fw-bold p-1 m-0">Physician</th>
                        <th class="text-center bg-primary text-white fw-bold p-1 m-0">Options</th>
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
                            {{ p.patient_lname }}, {{ p.patient_fname }} {{ p.patient_mname }} {{ p.patient_suffix }}
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
                            <button class="btn btn-warning btn-sm">Update Chart</button>
                        </td>
                    </tr>
                    <tr v-if="!patients.length && !isLoading">
                        <td class="text-center align-middle fw-bold p-1 m-0" colspan="8">
                            No records found.
                        </td>
                    </tr>
                    <tr v-if="isLoading">
                        <td colspan="8">
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
        <paginator v-if="!isLoading" :data="paginationData" @update:currentPage="updateCurrentPage($event)" />
    </div>
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
import ModalMd from '@/components/Modals/ModalMd.vue';
import moment from 'moment';
export default defineComponent({
    name: "PatientMasterfile",
    components: {
        TitledCard,
        Paginator
    },
    setup() {
        const modalDetails = ref({
            show: false,
            title: 'Patient Registry',
        })



        const addPatient = () => {
            modalDetails.value.show = true
        }

        const today = moment();
        const dateToday = new Date;

        const formSearch = ref({
            consultation_no: "",
            lname: "",
            fname: "",
            mname: "",
            birthdate: "",
            date_from: today.startOf('month').format('YYYY-MM-DD'),
            date_to: moment(dateToday.now).format('YYYY-MM-DD'),
        });

        const resetSearch = () => {
            Object.keys(formSearch.value).forEach((key) => {

                if (key == "date_from") {
                    formSearch.value[key] = today.startOf('month').format('YYYY-MM-DD')
                } else if (key == "date_to") {
                    formSearch.value[key] = moment(dateToday.now).format('YYYY-MM-DD')
                } else {
                    formSearch.value[key] = ""
                }
            })
        }

        const store = useStore();
        const patients = computed(() => store.getters.getPatients);
        const totalPatients = computed(() => store.getters.getTotalPatients)
        const patientsPages = computed(() => store.getters.getPaginatedPatients)

        const paginationData = ref({
            totalRecords: totalPatients.value,
            totalPages: patientsPages.value,
            perPage: 10,
            currentPage: 1,
        });

        watch([totalPatients, patientsPages], ([total, pages]) => {
            paginationData.value.totalRecords = total;
            paginationData.value.totalPages = pages;
        })

        const isLoading = ref(false)
        const fetchPatients = async (page, form) => {
            await store.commit('setPatientsEmpty')
            isLoading.value = true;
            await store.dispatch('fetchMasterfile', { page: page, ...form })
            isLoading.value = false;
        }

        const updateCurrentPage = (newPage: number) => {
            paginationData.value.currentPage = newPage
            fetchPatients(newPage, formSearch.value)
        }

        const search = async () => {
            isLoading.value = true
            await store.commit('setPatientsEmpty')
            paginationData.value.currentPage = 1
            await fetchPatients(1, formSearch.value)
        }

        const refresh = () => {
            resetSearch();
            search();
        }

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
            today
        }
    }
})
</script>

<style scoped></style>
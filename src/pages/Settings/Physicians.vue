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
            <button class="btn btn-primary">Add New Patient</button>
        </div>
        <div class="table-responsive mt-3">
            <table class="table table-bordered table-hover">
                <thead>
                    <tr style="text-transform:capitalize !important;">
                        <th class="text-center bg-primary text-white fw-bold p-1 m-0">License No.</th>
                        <th class="text-center bg-primary text-white fw-bold p-1 m-0">Physician Name</th>
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
                            <button class="btn btn-warning btn-sm">Update Physician</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <paginator v-if="!isLoading && physicians.length" :data="paginationData"
            @update:currentPage="updateCurrentPage($event)" />
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
export default defineComponent({
    name: "Physicians",
    components: {
        TitledCard,
        Paginator
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

        }
    }
})
</script>

<style scoped></style>
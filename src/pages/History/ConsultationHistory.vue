<template>
    <div class="chart-container">
        <div class="bg-primary consultation-header p-2 px-3" style="top: 3.8rem">
            <div class="d-flex justify-content-between align-items-center">
                <span class="fs-2 text-white fw-semibold">
                    <span>Patient Consultation History</span>
                </span>
            </div>
        </div>

        <div class="row mtp-6">
            <div class="col-sm-12 col-md-12 col-lg-12 mb-4">
                <titled-card title="Patient Information">
                    <div class="row mt-3">
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 fw-semibold">Last Name</label>
                                <input type="text"
                                    class="form-control form-control-sm custom-font cst-capital none-bordered"
                                    maxlength="255" v-model="patient.lname" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 fw-semibold">First Name</label>
                                <input type="text"
                                    class="form-control form-control-sm custom-font cst-capital none-bordered"
                                    maxlength="255" v-model="patient.fname" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 fw-semibold">Middle Name</label>
                                <input type="text"
                                    class="form-control form-control-sm custom-font cst-capital none-bordered"
                                    maxlength="255" v-model="patient.mname" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 fw-semibold">Suffix</label>
                                <input type="text"
                                    class="form-control form-control-sm custom-font cst-capital none-bordered" maxlength="5"
                                    v-model="patient.suffix" />
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 fw-semibold">Birthdate</label>
                                <input type="text"
                                    class="form-control form-control-sm custom-font cst-capital none-bordered"
                                    maxlength="255" v-model="patient.birthdate" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 fw-semibold">Age</label>
                                <input type="text"
                                    class="form-control form-control-sm custom-font cst-capital none-bordered"
                                    maxlength="255" v-model="patient.age" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 fw-semibold">Gender</label>
                                <input type="text"
                                    class="form-control form-control-sm custom-font cst-capital none-bordered"
                                    maxlength="255" v-model="patient.gender" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 fw-semibold">Contact No.</label>
                                <input type="text"
                                    class="form-control form-control-sm custom-font cst-capital none-bordered"
                                    maxlength="255" v-model="patient.contact_no" />
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <div>
                                <label class="form-label fs-6 fw-semibold">Address</label>
                                <input type="text"
                                    class="form-control form-control-sm custom-font cst-capital none-bordered"
                                    maxlength="255" v-model="patient.address" style="text-align:left !important;" />

                            </div>
                        </div>
                    </div>
                </titled-card>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 mt-4 mb-4">
                <titled-card title="Consultation History">
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
                                        Assessment
                                    </th>
                                    <th class="text-center bg-primary text-white fw-bold p-1 m-0">
                                        Consulting Physician
                                    </th>
                                </tr>
                            </thead>
                            <!-- <tbody>
                                <tr v-for="p in existingPatients" :key="p.id">
                                    <td class="text-center align-middle fw-normal p-1 m-0">
                                        {{ p.lname }}, {{ p.fname }} {{ p.mname }} {{ p.suffix }}
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
                            </tbody> -->
                        </table>
                    </div>
                </titled-card>
            </div>
        </div>
    </div>
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
import { useStore } from "vuex";
export default defineComponent({
    name: "ConsultationHistory",
    components: {
        TitledCard,
        Textarea
    },
    setup() {
        const store = useStore();
        const isLock = computed(() => store.getters.getSideLock);
        const calculateWidth = computed(() => {
            return isLock.value ? "calc(100% - 16.25rem)" : "calc(100% - 5.25rem)";
        });

        const patient = ref({
            lname: "DELA CRUZ",
            fname: "JUAN",
            mname: "DEL BARRIO",
            suffix: "JR",
            birthdate: "December 2, 1999",
            age: "24",
            gender: "MALE",
            contact_no: "09093103910",
            address: "566 TIZON ST. POBLACION, SANTO TOMAS PAMPANGA 2000"
        })

        return {
            calculateWidth,
            patient
        }
    }
})
</script>

<style scoped>
.consultation-header {
    position: fixed;
    width: v-bind(calculateWidth);
    right: 0;
    z-index: 100;
}

.none-bordered {
    border-top: none !important;
    border-right: none !important;
    border-left: none !important;
    border-radius: 0 !important;
    text-align: center;
    font-weight: 800;
    pointer-events: none !important;
    font-size: 17px !important;
}

.mtp-6 {
    margin-top: 4rem;
}
</style>
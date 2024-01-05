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
                                    maxlength="255" v-model="history.lname" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 fw-semibold">First Name</label>
                                <input type="text"
                                    class="form-control form-control-sm custom-font cst-capital none-bordered"
                                    maxlength="255" v-model="history.fname" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 fw-semibold">Middle Name</label>
                                <input type="text"
                                    class="form-control form-control-sm custom-font cst-capital none-bordered"
                                    maxlength="255" v-model="history.mname" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 fw-semibold">Suffix</label>
                                <input type="text"
                                    class="form-control form-control-sm custom-font cst-capital none-bordered" maxlength="5"
                                    v-model="history.suffix" />
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 fw-semibold">Birthdate</label>
                                <input type="text"
                                    class="form-control form-control-sm custom-font cst-capital none-bordered"
                                    maxlength="255" v-model="history.birthdate" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 fw-semibold">Age</label>
                                <input type="text"
                                    class="form-control form-control-sm custom-font cst-capital none-bordered"
                                    maxlength="255" v-model="history.age" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 fw-semibold">Gender</label>
                                <input type="text"
                                    class="form-control form-control-sm custom-font cst-capital none-bordered"
                                    maxlength="255" v-model="history.gender" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 fw-semibold">Contact No.</label>
                                <input type="text"
                                    class="form-control form-control-sm custom-font cst-capital none-bordered"
                                    maxlength="255" v-model="history.contact_no" />
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <div>
                                <label class="form-label fs-6 fw-semibold">Address</label>
                                <input type="text"
                                    class="form-control form-control-sm custom-font cst-capital none-bordered"
                                    maxlength="255" v-model="history.address" style="text-align:left !important;" />

                            </div>
                        </div>
                    </div>
                </titled-card>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 mt-4 mb-4">
                <titled-card title="Consultation History">
                    <div class="table-responsive mt-3" v-if="history.consultation_histories">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr style="text-transform: capitalize !important">
                                    <th class="text-center bg-primary text-white fw-bold p-1 m-0" style="width: 20%">
                                        Consultation No.
                                    </th>
                                    <th class="text-center bg-primary text-white fw-bold p-1 m-0" style="width: 20%">
                                        Consultation Date & Time
                                    </th>
                                    <th class="text-center bg-primary text-white fw-bold p-1 m-0" style="width: 40%">
                                        Assessment
                                    </th>
                                    <th class="text-center bg-primary text-white fw-bold p-1 m-0" style="width: 20%">
                                        Consulting Physician
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="c in history.consultation_histories" :key="c.consultation_id">
                                    <td class="text-center align-middle fw-normal p-1 m-0">
                                        <a href="javascript:void(0);" class="fw-bold"> {{ c.consultation_no }}</a>
                                    </td>
                                    <td class="text-center align-middle fw-normal p-1 m-0">
                                        {{ c.consultation_datetime }}
                                    </td>
                                    <td class="text-left align-middle fw-normal p-1 m-0">
                                        {{ c.assessment }}
                                    </td>
                                    <td class="text-center align-middle fw-normal p-1 m-0">
                                        {{ c.physician }}
                                    </td>
                                </tr>
                            </tbody>
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


        const history = computed(() => store.getters.getHistory)

        const fetchHistory = async () => {
            await store.dispatch('fetchHistory', 49)
        }

        onMounted(async () => {
            await fetchHistory()
        })

        return {
            calculateWidth,
            history
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
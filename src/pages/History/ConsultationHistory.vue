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
                <patient-info />
            </div>
        </div>
        <div class="row py-0 border rounded">
            <div class="col-sm-12 col-md-12 col-lg-12 px-0">
                <div class="demo-vertical-spacing demo-only-element">
                    <nav class="navbar navbar-expand-lg border rounded">
                        <div class="container-fluid">
                            <a class="navbar-brand text-primary pe-none fw-bold" href="javascript:void(0)">Sections</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbar-ex-7">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbar-ex-7">
                                <div class="navbar-nav me-auto gap-2">
                                    <a class="nav-item nav-link fw-bold" :class="{ 'active': currentTab == 1 }"
                                        href="javascript:void(0)" @click="switchTab(1)">Consultation
                                        History</a>
                                    <a class="nav-item nav-link fw-bold pe-none chevron">|</a>
                                    <a class="nav-item nav-link fw-bold" :class="{ 'active': currentTab == 2 }"
                                        href="javascript:void(0)" @click="switchTab(2)">Past History</a>
                                    <a class="nav-item nav-link fw-bold pe-none chevron">|</a>
                                    <a class="nav-item nav-link fw-bold" :class="{ 'active': currentTab == 3 }"
                                        href="javascript:void(0)" @click="switchTab(3)">Family History</a>
                                    <a class="nav-item nav-link fw-bold pe-none chevron">|</a>
                                    <!-- <a class="nav-item nav-link fw-bold pe-none chevron"><i
                                            class="fa-solid fa-chevron-right"></i></a> -->
                                    <a class="nav-item nav-link fw-bold" :class="{ 'active': currentTab == 4 }"
                                        href="javascript:void(0)" @click="switchTab(4)">Social History</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 mt-5 mb-4" v-if="currentTab == 1">
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
                                        <a href="javascript:void(0);" class="fw-bold" @click="viewChart(c)">
                                            <u> {{ c.consultation_no }}</u>
                                        </a>
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
            <div class="col-sm-12 col-md-12 col-lg-12 mb-4" v-if="currentTab == 2">
                <past-history class="pe-none" />
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 mb-4" v-if="currentTab == 3">
                <family-history class="pe-none" />
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 mb-4" v-if="currentTab == 4">
                <social-history class="pe-none" />
            </div>

        </div>
    </div>
    <loader :title="'Loading Patient Consultation History'" v-if="isLoading" />
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
import PatientInfo from "./history-components/PatientInfo.vue";
import PastHistory from "@/pages/Patient/chart-components/PastHistory.vue";
import FamilyHistory from "@/pages/Patient/chart-components/FamilyHistory.vue";
import SocialHistory from "@/pages/Patient/chart-components/SocialHistory.vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { encryptData, decryptData, NumericOnly, calculateAge } from "@/service";
import Loader from "@/components/Loaders/Loader.vue";
export default defineComponent({
    name: "ConsultationHistory",
    components: {
        TitledCard,
        Textarea,
        Loader,
        PatientInfo,
        PastHistory,
        FamilyHistory,
        SocialHistory
    },
    setup() {
        const store = useStore();
        const isLock = computed(() => store.getters.getSideLock);
        const route = useRoute();
        const router = useRouter();
        const uriParams = decodeURIComponent(route.params.data);
        const calculateWidth = computed(() => {
            return isLock.value ? "calc(100% - 16.25rem)" : "calc(100% - 5.25rem)";
        });


        const history = computed(() => store.getters.getHistory)
        const isLoading = ref(false);
        const fetchHistory = async () => {
            isLoading.value = true
            await store.commit('setHistoryEmpty')
            const params = await decryptData(uriParams);
            await store.dispatch('fetchHistory', params.patient_id)
            store.commit("setPastHistoryEmpty");
            store.commit("setFamilyHistoryEmpty");
            store.commit("setSocialHistoryEmpty");
            store.dispatch("fetchPastHistory", history.value.past_history_id);
            store.dispatch("fetchFamilyHistory", history.value.family_history_id);
            await store.dispatch(
                "fetchSocialHistory",
                history.value.social_history_id
            );
            isLoading.value = false
        }

        const viewChart = async (patient: object) => {
            const params = {
                type: "update",
                consultation_id: patient.consultation_id,
            };

            const paramsString = encryptData(JSON.stringify(params));
            router.push({
                name: "chart",
                params: { data: encodeURIComponent(paramsString) },
            });
        };

        const currentTab = ref(1)
        const resetter = () => {
            currentTab.value = 1
        }
        const switchTab = (tab) => {
            currentTab.value = tab
        }

        onMounted(async () => {
            resetter()
            await fetchHistory()
        })

        return {
            calculateWidth,
            history,
            viewChart,
            isLoading,
            switchTab,
            currentTab
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

.navbar.bg-primary {
    background-color: rgb(41, 172, 237) !important;
}

@media screen and (max-width: 991px) {
    .chevron {
        display: none !important;
    }

    .navbar-nav .nav-link.active {
        padding-left: 5px !important;
    }

}


@media screen and (max-width: 1199px) {
    .consultation-header {
        width: 100%;
    }

    .mtp-6 {
        margin-top: 5rem;
    }
}



.navbar-nav .nav-link.active {
    background: #29ACED !important;
    border-radius: 5px !important;
    color: #fff;
}

.mtp-6 {
    margin-top: 4rem;
}
</style>
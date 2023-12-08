<template>
    <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-11 mb-4">
            <div data-bs-spy="scroll" data-bs-target="#side-sections" data-bs-root-margin="0px 0px -40%">
                <patient-information id="pinfo" />
                <vital-signs class="mt-5" id="vital" />
                <past-history class="mt-5" id="past" />
                <family-history class="mt-5" id="fam" />
                <social-history class="mt-5" id="soc" />
                <vaccination class="mt-5" id="vac" />
                <soap class="mt-5" id="soap" />
                <physician class="mt-5 mb-5" id="physician" />
            </div>
        </div>
        <div class="col-lg-1">
            <div class="card position-fixed w-100">
                <div class="card-body p-2">
                    <h5 class="card-title py-0 my-0 p-2 mb-1">Sections</h5>
                    <hr class="mt-0" />
                    <div class="list-group list-group-flush" id="side-sections">
                        <a href="#pinfo" class="list-group-item list-group-item-action">Patient Info</a>
                        <a href="#vital" class="list-group-item list-group-item-action">Vital Signs</a>
                        <a href="#past" class="list-group-item list-group-item-action">Past History</a>
                        <a href="#fam" class="list-group-item list-group-item-action">Family History</a>
                        <a href="#soc" class="list-group-item list-group-item-action">Social History</a>
                        <a href="#vac" class="list-group-item list-group-item-action">Vaccination</a>
                        <a href="#soap" class="list-group-item list-group-item-action">SOAP</a>
                        <a href="#physician" class="list-group-item list-group-item-action">Physician</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import TitledCard from "@/components/Cards/TitledCard.vue";
import Textarea from "primevue/textarea";
import PatientInformation from "./chart-components/PatientInformation.vue";
import VitalSigns from "./chart-components/VitalSigns.vue";
import PastHistory from "./chart-components/PastHistory.vue";
import FamilyHistory from "./chart-components/FamilyHistory.vue";
import SocialHistory from "./chart-components/SocialHistory.vue";
import Vaccination from "./chart-components/Vaccination.vue";
import Soap from "./chart-components/Soap.vue"
import Physician from "./chart-components/Physician.vue";
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
        Physician
    },
    setup() {
        onMounted(() => {
            const scrollSpy = new bootstrap.ScrollSpy(document.body, {
                target: "#side-sections",
            });
        });
        return {};
    },
});
</script>

<style scoped>
.list-group-item {
    border: none !important;
}
</style>

<template>
    <titled-card class="mt-5" title="Vital Signs" id="vital">
        <div class="row mt-4">
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 mb-2 fw-semibold">Height (cm)</label>
                    <input type="text" class="form-control form-control-sm custom-font" />
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 mb-2 fw-semibold">Weight (kg)</label>
                    <input type="text" class="form-control form-control-sm custom-font" />
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 mb-2 fw-semibold">BMI (Body Mass Index)</label>
                    <input type="text" class="form-control form-control-sm custom-font" />
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 mb-2 fw-semibold">Blood Pressure</label>
                    <div class="d-flex gap-1">
                        <input type="text" class="form-control form-control-sm custom-font" />
                        <span>/</span>
                        <input type="text" class="form-control form-control-sm custom-font" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 mb-2 fw-semibold">Oxygen Saturation</label>
                    <input type="text" class="form-control form-control-sm custom-font" />
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 mb-2 fw-semibold">Temperature (°C)</label>
                    <input type="text" class="form-control form-control-sm custom-font" />
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 mb-2 fw-semibold">Respiratory Rate (RR)</label>
                    <input type="text" class="form-control form-control-sm custom-font" />
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 mb-2 fw-semibold">Pulse Rate (PR)</label>
                    <input type="text" class="form-control form-control-sm custom-font" />
                </div>
            </div>
        </div>
    </titled-card>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import TitledCard from "@/components/Cards/TitledCard.vue";
import Textarea from "primevue/textarea";
export default defineComponent({
    name: "VitalSigns",
    components: {
        TitledCard,
        Textarea,
    },
    setup() {

        return {};
    },
});
</script>

<style scoped></style>

<template>
    <titled-card class="mt-5" title="Vital Signs" id="vital">
        <div class="row mt-4">
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 mb-2 fw-semibold">Height (cm)</label>
                    <input type="text" class="form-control form-control-sm custom-font" v-model="vitalSigns.heigth" />
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 mb-2 fw-semibold">Weight (kg)</label>
                    <input type="text" class="form-control form-control-sm custom-font" v-model="vitalSigns.weight" />
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 mb-2 fw-semibold">BMI (Body Mass Index)</label>
                    <input type="text" class="form-control form-control-sm custom-font" v-model="vitalSigns.bmi" />
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 mb-2 fw-semibold">Blood Pressure</label>
                    <div class="d-flex gap-1">
                        <input type="text" class="form-control form-control-sm custom-font" v-model="vitalSigns.bp_f" />
                        <span>/</span>
                        <input type="text" class="form-control form-control-sm custom-font" v-model="vitalSigns.bp_s" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 mb-2 fw-semibold">Oxygen Saturation</label>
                    <input type="text" class="form-control form-control-sm custom-font"
                        v-model="vitalSigns.oxygen_saturation" />
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 mb-2 fw-semibold">Temperature (°C)</label>
                    <input type="text" class="form-control form-control-sm custom-font" v-model="vitalSigns" />
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 mb-2 fw-semibold">Respiratory Rate (RR)</label>
                    <input type="text" class="form-control form-control-sm custom-font"
                        v-model="vitalSigns.respiratory_rate" />
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 mb-2 fw-semibold">Pulse Rate (PR)</label>
                    <input type="text" class="form-control form-control-sm custom-font" v-model="vitalSigns.pulse_rate" />
                </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 mb-2 fw-semibold">CBG (mg/dl)</label>
                    <input type="text" class="form-control form-control-sm custom-font"
                        v-model="vitalSigns.oxygen_saturation" />
                </div>
            </div>
        </div>
    </titled-card>
    <pre>{{ vitalSigns }}</pre>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import TitledCard from "@/components/Cards/TitledCard.vue";
import Textarea from "primevue/textarea";
import { useStore } from "vuex";
import moment from "moment";
export default defineComponent({
    name: "VitalSigns",
    components: {
        TitledCard,
        Textarea,
    },
    setup() {
        const store = useStore()
        const vitalSigns = computed(() => store.getters.getVitalSigns);
        return {
            vitalSigns
        };
    },
});
</script>

<style scoped></style>

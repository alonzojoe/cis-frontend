<template>
    <div class="row">

        <div class="col-lg-12 mb-4">
            <titled-card title="Patient Information">
                <div class="row mt-4">
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Date of Consultation</label>
                            <input type="datetime-local" class="form-control form-control-sm">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Payment Type</label>
                            <select class="form-control form-select-sm form-select">
                                <option value="">Please Select</option>
                                <option value="CASH">CASH</option>
                                <option value="HMO">HMO</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Consultation No.</label>
                            <input type="text" class="form-control form-control-sm">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Last Name</label>
                            <input type="text" class="form-control form-control-sm">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">First Name</label>
                            <input type="text" class="form-control form-control-sm">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Middle Name</label>
                            <input type="text" class="form-control form-control-sm">
                        </div>
                    </div>

                </div>
                <div class="row mt-3">
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Birthdate</label>
                            <input type="date" class="form-control form-control-sm">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Age</label>
                            <input type="text" class="form-control form-control-sm" disabled>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Gender</label>
                            <select class="form-control form-select-sm form-select">
                                <option value="">Please Select</option>
                                <option value="MALE">MALE</option>
                                <option value="FEMALE">FEMALE</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Contact No.</label>
                            <input type="text" class="form-control form-control-sm">
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Address</label>
                            <Textarea class="form-control form-control-sm" autoResize rows="5" cols="30" />
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Chief Complaint</label>
                            <Textarea class="form-control form-control-sm" autoResize rows="5" cols="30" />
                        </div>
                    </div>
                </div>
            </titled-card>
            <titled-card class="mt-5" title="Vital Signs">
                <div class="row mt-4">
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Height (cm)</label>
                            <input type="text" class="form-control form-control-sm">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Weight (kg)</label>
                            <input type="text" class="form-control form-control-sm">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">BMI (Body Mass Index)</label>
                            <input type="text" class="form-control form-control-sm">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Blood Pressure</label>
                            <div class="d-flex gap-1">
                                <input type="text" class="form-control form-control-sm">
                                <span>/</span>
                                <input type="text" class="form-control form-control-sm">
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row mt-3">
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Oxygen Saturation</label>
                            <input type="text" class="form-control form-control-sm">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Temperature (°C)</label>
                            <input type="text" class="form-control form-control-sm">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Respiratory Rate (RR)</label>
                            <input type="text" class="form-control form-control-sm">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Pulse Rate (PR)</label>
                            <input type="text" class="form-control form-control-sm">
                        </div>
                    </div>

                </div>
            </titled-card>
            <titled-card class="mt-5" title="Past History">
                <div class="row mt-4">
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div class="form-check">
                            <input class="form-check-input" id="p-unremarkable" type="checkbox" true-value="1"
                                false-value="0">
                            <label class="form-check-label" for="p-unremarkable"> Unremarkable </label>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div class="form-check">
                            <input class="form-check-input" id="p-blood-d" type="checkbox" true-value="1" false-value="0">
                            <label class="form-check-label" for="p-blood-d"> Blood Disease </label>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div class="form-check">
                            <input class="form-check-input" id="p-asthma" type="checkbox" true-value="1" false-value="0">
                            <label class="form-check-label" for="p-asthma"> Asthma </label>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div class="form-check">
                            <input class="form-check-input" id="p-hyper" type="checkbox" true-value="1" false-value="0">
                            <label class="form-check-label" for="p-hyper"> Hypertension </label>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div class="form-check">
                            <input class="form-check-input" id="p-cva" type="checkbox" true-value="1" false-value="0">
                            <label class="form-check-label" for="p-cva"> CVA </label>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div class="form-check">
                            <input class="form-check-input" id="p-gut" type="checkbox" true-value="1" false-value="0">
                            <label class="form-check-label" for="p-gut"> GUT Disease</label>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div class="form-check">
                            <input class="form-check-input" id="p-git" type="checkbox" true-value="1" false-value="0">
                            <label class="form-check-label" for="p-git"> GIT Disease </label>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div class="form-check">
                            <input class="form-check-input" id="p-pulmo" type="checkbox" true-value="1" false-value="0">
                            <label class="form-check-label" for="p-pulmo"> Pulmo Disease </label>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div class="form-check">
                            <input class="form-check-input" id="p-heart" type="checkbox" true-value="1" false-value="0">
                            <label class="form-check-label" for="p-heart"> Heart Disease </label>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div class="form-check">
                            <input class="form-check-input" id="p-dm" type="checkbox" true-value="1" false-value="0">
                            <label class="form-check-label" for="p-dm"> DM </label>
                        </div>
                    </div>

                </div>
                <div class="row mt-4">
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Previous OR</label>
                            <Textarea class="form-control form-control-sm" autoResize rows="5" cols="30" />
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Previous Hospitalization</label>
                            <Textarea class="form-control form-control-sm" autoResize rows="5" cols="30" />
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Other Findings</label>
                            <Textarea class="form-control form-control-sm" autoResize rows="5" cols="30" />
                        </div>
                    </div>
                </div>
            </titled-card>
            <titled-card class="mt-5" title="Social History">
                <div class="row mt-4">
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Smoking</label>
                            <Textarea class="form-control form-control-sm" autoResize rows="5" cols="30" />
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Alcohol Intake</label>
                            <Textarea class="form-control form-control-sm" autoResize rows="5" cols="30" />
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Betel Nut Chewing</label>
                            <Textarea class="form-control form-control-sm" autoResize rows="5" cols="30" />
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Drug / Food Allergy</label>
                            <Textarea class="form-control form-control-sm" autoResize rows="5" cols="30" />
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <div>
                            <label class="form-label fs-6 mb-2 fw-semibold">Others</label>
                            <Textarea class="form-control form-control-sm" autoResize rows="5" cols="30" />
                        </div>
                    </div>

                </div>
            </titled-card>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import TitledCard from '@/components/Cards/TitledCard.vue';
import Textarea from 'primevue/textarea';
export default defineComponent({
    name: 'PatientChart',
    components: {
        TitledCard,
        Textarea
    },
    setup() {


        return {}
    }
})
</script>

<style scoped></style>
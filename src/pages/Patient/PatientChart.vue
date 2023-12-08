<template>
    <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-11 mb-4">
            <div data-bs-spy="scroll" data-bs-target="#side-sections" data-bs-root-margin="0px 0px -40%">
                <titled-card title="Patient Information" id="pinfo">
                    <div class="row mt-4">
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 mb-2 fw-semibold">Date of Consultation</label>
                                <input type="datetime-local" class="form-control form-control-sm custom-font" />
                                <!-- <div id="defaultFormControlHelp" class="form-text">
                                We'll never share your details with anyone else.
                            </div> -->
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 mb-2 fw-semibold">Payment Type</label>
                                <select class="form-control form-select-sm custom-font form-select">
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
                                <input type="text" class="form-control form-control-sm custom-font" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 mb-2 fw-semibold">Last Name</label>
                                <input type="text" class="form-control form-control-sm custom-font" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 mb-2 fw-semibold">First Name</label>
                                <input type="text" class="form-control form-control-sm custom-font" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 mb-2 fw-semibold">Middle Name</label>
                                <input type="text" class="form-control form-control-sm custom-font" />
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 mb-2 fw-semibold">Birthdate</label>
                                <input type="date" class="form-control form-control-sm custom-font" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 mb-2 fw-semibold">Age</label>
                                <input type="text" class="form-control form-control-sm custom-font" disabled />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 mb-2 fw-semibold">Gender</label>
                                <select class="form-control form-select-sm custom-font form-select">
                                    <option value="">Please Select</option>
                                    <option value="MALE">MALE</option>
                                    <option value="FEMALE">FEMALE</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 mb-2 fw-semibold">Contact No.</label>
                                <input type="text" class="form-control form-control-sm custom-font" />
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <div>
                                <label class="form-label fs-6 mb-2 fw-semibold">Address</label>
                                <Textarea class="form-control form-control-sm custom-font" autoResize rows="5" cols="30" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <div>
                                <label class="form-label fs-6 mb-2 fw-semibold">Chief Complaint</label>
                                <Textarea class="form-control form-control-sm custom-font" autoResize rows="5" cols="30" />
                            </div>
                        </div>
                    </div>
                </titled-card>
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
                <titled-card class="mt-5" title="Past History" id="past">
                    <div class="row mt-4">
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="form-check">
                                <input class="form-check-input" id="p-unremarkable" type="checkbox" true-value="1"
                                    false-value="0" />
                                <label class="form-check-label" for="p-unremarkable">
                                    Unremarkable
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="form-check">
                                <input class="form-check-input" id="p-blood-d" type="checkbox" true-value="1"
                                    false-value="0" />
                                <label class="form-check-label" for="p-blood-d">
                                    Blood Disease
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="form-check">
                                <input class="form-check-input" id="p-asthma" type="checkbox" true-value="1"
                                    false-value="0" />
                                <label class="form-check-label" for="p-asthma"> Asthma </label>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="form-check">
                                <input class="form-check-input" id="p-hyper" type="checkbox" true-value="1"
                                    false-value="0" />
                                <label class="form-check-label" for="p-hyper">
                                    Hypertension
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="form-check">
                                <input class="form-check-input" id="p-cva" type="checkbox" true-value="1" false-value="0" />
                                <label class="form-check-label" for="p-cva"> CVA </label>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="form-check">
                                <input class="form-check-input" id="p-gut" type="checkbox" true-value="1" false-value="0" />
                                <label class="form-check-label" for="p-gut"> GUT Disease</label>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="form-check">
                                <input class="form-check-input" id="p-git" type="checkbox" true-value="1" false-value="0" />
                                <label class="form-check-label" for="p-git"> GIT Disease </label>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="form-check">
                                <input class="form-check-input" id="p-pulmo" type="checkbox" true-value="1"
                                    false-value="0" />
                                <label class="form-check-label" for="p-pulmo">
                                    Pulmo Disease
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="form-check">
                                <input class="form-check-input" id="p-heart" type="checkbox" true-value="1"
                                    false-value="0" />
                                <label class="form-check-label" for="p-heart">
                                    Heart Disease
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="form-check">
                                <input class="form-check-input" id="p-dm" type="checkbox" true-value="1" false-value="0" />
                                <label class="form-check-label" for="p-dm"> DM </label>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-sm-12 col-md-6 col-lg-4">
                            <div>
                                <label class="form-label fs-6 mb-2 fw-semibold">Previous OR</label>
                                <Textarea class="form-control form-control-sm custom-font" autoResize rows="5" cols="30" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4">
                            <div>
                                <label class="form-label fs-6 mb-2 fw-semibold">Previous Hospitalization</label>
                                <Textarea class="form-control form-control-sm custom-font" autoResize rows="5" cols="30" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4">
                            <div>
                                <label class="form-label fs-6 mb-2 fw-semibold">Other Findings</label>
                                <Textarea class="form-control form-control-sm custom-font" autoResize rows="5" cols="30" />
                            </div>
                        </div>
                    </div>
                </titled-card>
                <titled-card class="mt-5" title="Family History" id="fam">
                    <div class="row mt-4">
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="form-check">
                                <input class="form-check-input" id="f-unremarkable" type="checkbox" true-value="1"
                                    false-value="0" />
                                <label class="form-check-label" for="f-unremarkable">
                                    Unremarkable
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="form-check">
                                <input class="form-check-input" id="f-hcvd" type="checkbox" true-value="1"
                                    false-value="0" />
                                <label class="form-check-label" for="f-hcvd"> HCVD </label>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="form-check">
                                <input class="form-check-input" id="f-chd" type="checkbox" true-value="1" false-value="0" />
                                <label class="form-check-label" for="f-chd"> CHD </label>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="form-check">
                                <input class="form-check-input" id="f-cva" type="checkbox" true-value="1" false-value="0" />
                                <label class="form-check-label" for="f-cva"> CVA </label>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="form-check">
                                <input class="form-check-input" id="g-gut" type="checkbox" true-value="1" false-value="0" />
                                <label class="form-check-label" for="g-gut"> GUT Disease </label>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="form-check">
                                <input class="form-check-input" id="f-blood-dy" type="checkbox" true-value="1"
                                    false-value="0" />
                                <label class="form-check-label" for="f-blood-dy">
                                    Blood Dyscrasia</label>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="form-check">
                                <input class="form-check-input" id="f-allergy" type="checkbox" true-value="1"
                                    false-value="0" />
                                <label class="form-check-label" for="f-allergy"> Allergy </label>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="form-check">
                                <input class="form-check-input" id="f-dm" type="checkbox" true-value="1" false-value="0" />
                                <label class="form-check-label" for="f-dm"> DM </label>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="form-check">
                                <input class="form-check-input" id="f-git" type="checkbox" true-value="1" false-value="0" />
                                <label class="form-check-label" for="f-git"> GIT Disease </label>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="form-check">
                                <input class="form-check-input" id="f-pulmo" type="checkbox" true-value="1"
                                    false-value="0" />
                                <label class="form-check-label" for="f-pulmo">
                                    Pulmo Disease
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div class="form-check">
                                <input class="form-check-input" id="f-ca" type="checkbox" true-value="1" false-value="0" />
                                <label class="form-check-label" for="f-ca"> CA </label>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-sm-12 col-md-6 col-lg-4">
                            <div>
                                <label class="form-label fs-6 mb-2 fw-semibold">Other Findings</label>
                                <Textarea class="form-control form-control-sm custom-font" autoResize rows="5" cols="30" />
                            </div>
                        </div>
                    </div>
                </titled-card>
                <titled-card class="mt-5" title="Social History" id="soc">
                    <div class="row mt-4">
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 mb-2 fw-semibold">Smoking</label>
                                <Textarea class="form-control form-control-sm custom-font" autoResize rows="5" cols="30" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 mb-2 fw-semibold">Alcohol Intake</label>
                                <Textarea class="form-control form-control-sm custom-font" autoResize rows="5" cols="30" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 mb-2 fw-semibold">Betel Nut Chewing</label>
                                <Textarea class="form-control form-control-sm custom-font" autoResize rows="5" cols="30" />
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-3">
                            <div>
                                <label class="form-label fs-6 mb-2 fw-semibold">Drug / Food Allergy</label>
                                <Textarea class="form-control form-control-sm custom-font" autoResize rows="5" cols="30" />
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <div>
                                <label class="form-label fs-6 mb-2 fw-semibold">Others</label>
                                <Textarea class="form-control form-control-sm custom-font" autoResize rows="5" cols="30" />
                            </div>
                        </div>
                    </div>
                </titled-card>
                <titled-card class="mt-5" title="Vaccination" id="vac">
                    <div class="row mt-4">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <div>
                                <label class="form-label fs-5 mb-2 fw-semibold">Vaccination Details</label>
                                <Textarea class="form-control form-control-sm custom-font" autoResize rows="5" cols="30" />
                            </div>
                        </div>
                    </div>
                </titled-card>
                <titled-card class="mt-5" title="SOAP" id="soap">
                    <div class="row mt-4">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <div>
                                <label class="form-label fs-5 mb-2 fw-semibold">Subjective</label>
                                <Textarea class="form-control form-control-sm custom-font" autoResize rows="5" cols="30" />
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <div>
                                <label class="form-label fs-5 mb-2 fw-semibold">Objective</label>
                                <Textarea class="form-control form-control-sm custom-font" autoResize rows="5" cols="30" />
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <div>
                                <label class="form-label fs-5 mb-2 fw-semibold">Assessment</label>
                                <Textarea class="form-control form-control-sm custom-font" autoResize rows="5" cols="30" />
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <div>
                                <label class="form-label fs-5 mb-2 fw-semibold">Plan</label>
                                <Textarea class="form-control form-control-sm custom-font" autoResize rows="5" cols="30" />
                            </div>
                        </div>
                    </div>
                </titled-card>
                <titled-card class="mt-5 mb-5" title="Consulting Physician" id="physician">
                    <div class="row mt-4">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <div>
                                <label class="form-label fs-5 mb-2 fw-semibold">Select Consulting Physician</label>
                                <select class="form-control form-select">
                                    <option value="">Please Select</option>
                                    <option value="">asdasds</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </titled-card>
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
export default defineComponent({
    name: "PatientChart",
    components: {
        TitledCard,
        Textarea,
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

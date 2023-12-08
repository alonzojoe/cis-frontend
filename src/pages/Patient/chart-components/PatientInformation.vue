<template>
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
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import TitledCard from "@/components/Cards/TitledCard.vue";
import Textarea from "primevue/textarea";
export default defineComponent({
    name: "PatientInformation",
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

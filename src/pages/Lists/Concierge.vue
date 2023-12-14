<template>
    <div class="card">
        <titled-card class="mb-3" title="Search Patient">
            <div class="row mt-4">
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
                        <label class="form-label fs-6 mb-2 fw-semibold">Payment Type</label>
                        <select class="form-control form-select-sm custom-font form-select">
                            <option value="">Please Select</option>
                            <option value="CASH">CASH</option>
                            <option value="HMO">HMO</option>
                        </select>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div class="d-flex gap-2 align-items-center" style="margin-top: 1.7rem;">
                        <button class="btn btn-primary">Search</button>
                        <button class="btn btn-danger">Refresh</button>
                    </div>
                </div>
            </div>
        </titled-card>
        <div class="d-flex justify-content-end align-items-center">
            <button class="btn btn-primary" @click="addPatient()">Add New Patient</button>
        </div>
        <div class="table-responsive mt-3">
            <table class="table table-bordered table-hover">
                <thead>
                    <tr style="text-transform:capitalize !important;">
                        <th class="text-center bg-primary text-white fw-bold p-1 m-0">Consultation No.</th>
                        <th class="text-center bg-primary text-white fw-bold p-1 m-0">Date of Consultation</th>
                        <th class="text-center bg-primary text-white fw-bold p-1 m-0">Patient Name</th>
                        <th class="text-center bg-primary text-white fw-bold p-1 m-0">Gender</th>
                        <th class="text-center bg-primary text-white fw-bold p-1 m-0">Birthdate</th>
                        <th class="text-center bg-primary text-white fw-bold p-1 m-0">Payment Type</th>
                        <th class="text-center bg-primary text-white fw-bold p-1 m-0">Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(p, index) in patients" :key="index">
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            {{ p.consultation_no }}
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            {{ p.consultation_date }}
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            {{ p.patient }}
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            {{ p.gender }}
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            {{ p.birthdate }}
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            {{ p.payment_type }}
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            <button class="btn btn-warning btn-sm">Update Chart</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <paginator />
    </div>
    <modal-md :details="modalDetails" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TitledCard from '@/components/Cards/TitledCard.vue';
import Paginator from '@/components/Paginators/Paginator.vue';
import ModalMd from '@/components/Modals/ModalMd.vue';
export default defineComponent({
    name: "PatientConcierge",
    components: {
        TitledCard,
        Paginator,
        ModalMd
    },
    setup() {
        const modalDetails = ref({
            show: false,
            title: 'Patient Registry',
        })

        const patients = ref(
            [
                {
                    "consultation_no": "CON-122023-1141722",
                    "consultation_date": "December 9, 2023 10:54 AM",
                    "patient": "DELA CRUZ, JUAN NEPOMUCENO",
                    "gender": "MALE",
                    "birthdate": "January 27, 1992",
                    "payment_type": "CASH"
                },
                {
                    "consultation_no": "CON-122023-1141723",
                    "consultation_date": "December 9, 2023 11:15 AM",
                    "patient": "GARCIA, MARIA ELENA",
                    "gender": "FEMALE",
                    "birthdate": "March 14, 1985",
                    "payment_type": "HMO"
                },
                {
                    "consultation_no": "CON-122023-1141724",
                    "consultation_date": "December 9, 2023 11:35 AM",
                    "patient": "RODRIGUEZ, CARLOS ALBERTO",
                    "gender": "MALE",
                    "birthdate": "September 5, 1990",
                    "payment_type": "HMO"
                },
                {
                    "consultation_no": "CON-122023-1141725",
                    "consultation_date": "December 9, 2023 11:55 AM",
                    "patient": "LOPEZ, ANA ISABEL",
                    "gender": "FEMALE",
                    "birthdate": "June 8, 1982",
                    "payment_type": "CASH"
                },
                {
                    "consultation_no": "CON-122023-1141726",
                    "consultation_date": "December 9, 2023 12:15 PM",
                    "patient": "SMITH, JOHN MICHAEL",
                    "gender": "MALE",
                    "birthdate": "October 20, 1988",
                    "payment_type": "HMO"
                },
                {
                    "consultation_no": "CON-122023-1141727",
                    "consultation_date": "December 9, 2023 12:35 PM",
                    "patient": "MARTINEZ, SOPHIA LEE",
                    "gender": "FEMALE",
                    "birthdate": "April 15, 1995",
                    "payment_type": "CASH"
                },
                {
                    "consultation_no": "CON-122023-1141728",
                    "consultation_date": "December 9, 2023 12:55 PM",
                    "patient": "WANG, JASON",
                    "gender": "MALE",
                    "birthdate": "August 3, 1980",
                    "payment_type": "CASH"
                },
                {
                    "consultation_no": "CON-122023-1141729",
                    "consultation_date": "December 9, 2023 1:15 PM",
                    "patient": "ANDERSON, EMMA GRACE",
                    "gender": "FEMALE",
                    "birthdate": "February 12, 1997",
                    "payment_type": "HMO"
                },
                {
                    "consultation_no": "CON-122023-1141730",
                    "consultation_date": "December 9, 2023 1:35 PM",
                    "patient": "NGUYEN, ALEXANDER",
                    "gender": "MALE",
                    "birthdate": "September 28, 1983",
                    "payment_type": "HMO"
                },
                {
                    "consultation_no": "CON-122023-1141731",
                    "consultation_date": "December 9, 2023 1:55 PM",
                    "patient": "GOMEZ, ISABELLA",
                    "gender": "FEMALE",
                    "birthdate": "July 7, 1990",
                    "payment_type": "HMO"
                }
            ]

        )

        const addPatient = () => {
            modalDetails.value.show = true
        }

        return { modalDetails, addPatient, patients }
    }
})
</script>

<style scoped></style>
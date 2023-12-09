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
                        <input type="text" class="form-control form-control-sm custom-font" />
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div>
                        <label class="form-label fs-6 mb-2 fw-semibold">Payment Type</label>
                        <input type="text" class="form-control form-control-sm custom-font" />
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
            <button class="btn btn-primary">Add New Patient</button>
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
                    <tr>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            CON-122023-1141722
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            December 9, 2023 10:54 AM
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            DELA CRUZ, JUAN NEPOMUCENO
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            MALE
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            January 27, 1992
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            CASH
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            <button class="btn btn-warning btn-sm">Update Chart</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            CON-122023-1141723
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            December 9, 2023 11:15 AM
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            GARCIA, MARIA ELENA
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            FEMALE
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            March 14, 1985
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            HMO
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            <button class="btn btn-warning btn-sm">Update Chart</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            CON-122023-1141724
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            December 9, 2023 11:35 AM
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            RODRIGUEZ, CARLOS ALBERTO
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            MALE
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            September 5, 1990
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            HMO
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            <button class="btn btn-warning btn-sm">Update Chart</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            CON-122023-1141725
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            December 9, 2023 11:55 AM
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            LOPEZ, ANA ISABEL
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            FEMALE
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            June 8, 1982
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            CASH
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            <button class="btn btn-warning btn-sm">Update Chart</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            CON-122023-1141726
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            December 9, 2023 12:15 PM
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            SMITH, JOHN MICHAEL
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            MALE
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            October 20, 1988
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            HMO
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            <button class="btn btn-warning btn-sm">Update Chart</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            CON-122023-1141727
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            December 9, 2023 12:35 PM
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            MARTINEZ, SOPHIA LEE
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            FEMALE
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            April 15, 1995
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            CASH
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            <button class="btn btn-warning btn-sm">Update Chart</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            CON-122023-1141728
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            December 9, 2023 12:55 PM
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            WANG, JASON
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            MALE
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            August 3, 1980
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            CASH
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            <button class="btn btn-warning btn-sm">Update Chart</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            CON-122023-1141729
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            December 9, 2023 1:15 PM
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            ANDERSON, EMMA GRACE
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            FEMALE
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            February 12, 1997
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            HMO
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            <button class="btn btn-warning btn-sm">Update Chart</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            CON-122023-1141730
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            December 9, 2023 1:35 PM
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            NGUYEN, ALEXANDER
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            MALE
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            September 28, 1983
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            HMO
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            <button class="btn btn-warning btn-sm">Update Chart</button>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            CON-122023-1141731
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            December 9, 2023 1:55 PM
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            GOMEZ, ISABELLA
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            FEMALE
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            July 7, 1990
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            HMO
                        </td>
                        <td class="text-center align-middle fw-normal p-1 m-0">
                            <button class="btn btn-warning btn-sm">Update Chart</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TitledCard from '@/components/Cards/TitledCard.vue';
export default defineComponent({
    name: "PatientMasterfile",
    components: {
        TitledCard,
    },
    setup() {


        return {}
    }
})
</script>

<style scoped></style>
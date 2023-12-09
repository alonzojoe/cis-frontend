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
                        <th class="text-center bg-primary text-white p-1 m-0">Consultation No.</th>
                        <th class="text-center bg-primary text-white p-1 m-0">Date of Consultation</th>
                        <th class="text-center bg-primary text-white p-1 m-0">Last Name</th>
                        <th class="text-center bg-primary text-white p-1 m-0">First Name</th>
                        <th class="text-center bg-primary text-white p-1 m-0">Middle Name</th>
                        <th class="text-center bg-primary text-white p-1 m-0">Birthdate</th>
                        <th class="text-center bg-primary text-white p-1 m-0">Payment Type</th>
                        <th class="text-center bg-primary text-white p-1 m-0">Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-center align-middle fw-bold p-1 m-0">
                            CON-122023-1141722
                        </td>
                        <td class="text-center align-middle fw-bold p-1 m-0">
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
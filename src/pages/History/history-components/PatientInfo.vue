<template>
    <titled-card title="Patient Information">
        <div class="row mt-3">
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 fw-semibold">Last Name</label>
                    <input type="text" class="form-control form-control-sm custom-font cst-capital none-bordered"
                        maxlength="255" v-model="history.lname" />
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 fw-semibold">First Name</label>
                    <input type="text" class="form-control form-control-sm custom-font cst-capital none-bordered"
                        maxlength="255" v-model="history.fname" />
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 fw-semibold">Middle Name</label>
                    <input type="text" class="form-control form-control-sm custom-font cst-capital none-bordered"
                        maxlength="255" v-model="history.mname" />
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 fw-semibold">Suffix</label>
                    <input type="text" class="form-control form-control-sm custom-font cst-capital none-bordered"
                        maxlength="5" v-model="history.suffix" />
                </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 fw-semibold">Birthdate</label>
                    <input type="text" class="form-control form-control-sm custom-font cst-capital none-bordered"
                        maxlength="255" v-model="history.birthdate" />
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 fw-semibold">Age</label>
                    <input type="text" class="form-control form-control-sm custom-font cst-capital none-bordered"
                        maxlength="255" v-model="history.age" />
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 fw-semibold">Gender</label>
                    <input type="text" class="form-control form-control-sm custom-font cst-capital none-bordered"
                        maxlength="255" v-model="history.gender" />
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <div>
                    <label class="form-label fs-6 fw-semibold">Contact No.</label>
                    <input type="text" class="form-control form-control-sm custom-font cst-capital none-bordered"
                        maxlength="255" v-model="history.contact_no" />
                </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-sm-12 col-md-12 col-lg-12">
                <div>
                    <label class="form-label fs-6 fw-semibold">Address</label>
                    <input type="text" class="form-control form-control-sm custom-font cst-capital none-bordered"
                        maxlength="255" v-model="history.address" style="text-align:left !important;" />

                </div>
            </div>
        </div>
    </titled-card>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import TitledCard from "@/components/Cards/TitledCard.vue";
import { useStore } from "vuex";
export default defineComponent({
    name: "PatientInfo",
    components: {
        TitledCard,
    },
    setup() {
        const store = useStore();
        const history = computed(() => store.getters.getHistory)

        return {
            history
        }
    }
})
</script>

<style scoped></style>
<template>
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
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import TitledCard from "@/components/Cards/TitledCard.vue";
import Textarea from "primevue/textarea";
export default defineComponent({
    name: "SocialHistory",
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

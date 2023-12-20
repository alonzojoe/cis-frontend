<template>
    <titled-card class="mt-5 mb-5" title="Consulting Physician" id="physician">
        <div class="row mt-4">
            <div class="col-sm-12 col-md-12 col-lg-12">
                <div>
                    <label class="form-label fs-5 mb-2 fw-semibold">Select Consulting Physician</label>
                    <select class="form-control form-select">
                        <option value="">Please Select</option>
                        <option :value="p.id" v-for="p in physicians" :key="p.id">
                            {{ p.lname }}, {{ p.fname }} {{ p.mname }}, MD
                        </option>
                    </select>
                </div>
            </div>
        </div>
    </titled-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import TitledCard from "@/components/Cards/TitledCard.vue";
import Textarea from "primevue/textarea";
import { useStore } from "vuex";
export default defineComponent({
    name: "Physician",
    components: {
        TitledCard,
        Textarea,
    },
    setup() {
        const store = useStore();
        const physicians = computed(() => store.getters.getAllPhysicians);
        return {
            physicians
        };
    },
});
</script>

<style scoped></style>

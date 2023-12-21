<template>
  <titled-card title="Patient Information" id="pinfo">
    <div class="row mt-4">
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold"
            >Date of Consultation</label
          >
          <input
            type="datetime-local"
            class="form-control form-control-sm custom-font"
            v-model="consultation.consultation_datetime"
          />
          <!-- <div id="defaultFormControlHelp" class="form-text">
                                We'll never share your details with anyone else.
                            </div> -->
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold"
            >Consultation No.</label
          >
          <input
            type="text"
            class="form-control form-control-sm custom-font"
            v-model="consultation.consultation_no"
            disabled
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold">Payment Type</label>
          <select
            class="form-control form-select-sm custom-font form-select"
            v-model="consultation.payment_type"
          >
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
          <label class="form-label fs-6 mb-2 fw-semibold">Last Name</label>
          <input
            type="text"
            class="form-control form-control-sm custom-font"
            maxlength="11"
            v-model="patient.lname"
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold">First Name</label>
          <input
            type="text"
            class="form-control form-control-sm custom-font"
            maxlength="11"
            v-model="patient.fname"
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold">Middle Name</label>
          <input
            type="text"
            class="form-control form-control-sm custom-font"
            maxlength="11"
            v-model="patient.mname"
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold">Suffix</label>
          <input
            type="text"
            class="form-control form-control-sm custom-font"
            maxlength="11"
            v-model="patient.suffix"
          />
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold">Birthdate</label>
          <input
            type="date"
            :max="currentDate"
            @change="calculateAges()"
            class="form-control form-control-sm custom-font"
            v-model="patient.birthdate"
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold">Age</label>
          <input
            type="text"
            class="form-control form-control-sm custom-font"
            v-model="patient.age"
            disabled
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold">Gender</label>
          <select
            class="form-control form-select-sm custom-font form-select"
            v-model="patient.gender"
          >
            <option value="">Please Select</option>
            <option value="MALE">MALE</option>
            <option value="FEMALE">FEMALE</option>
          </select>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold">Contact No.</label>
          <input
            type="text"
            class="form-control form-control-sm custom-font"
            maxlength="11"
            v-model="patient.contact"
          />
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-sm-12 col-md-6 col-lg-6">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold">Address</label>
          <Textarea
            v-model="patient.address"
            class="form-control form-control-sm custom-font"
            autoResize
            rows="5"
            cols="30"
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6">
        <div>
          <label class="form-label fs-6 mb-2 fw-semibold"
            >Chief Complaint</label
          >
          <Textarea
            v-model="consultation.chief_complaint"
            class="form-control form-control-sm custom-font"
            autoResize
            rows="5"
            cols="30"
          />
        </div>
      </div>
    </div>
  </titled-card>
  <pre>{{ patient }}</pre>
  <pre>{{ consultation }}</pre>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import TitledCard from "@/components/Cards/TitledCard.vue";
import Textarea from "primevue/textarea";
import { useStore } from "vuex";
import moment from "moment";
import { calculateAge } from "@/service";
export default defineComponent({
  name: "PatientInformation",
  components: {
    TitledCard,
    Textarea,
  },
  setup() {
    const store = useStore();
    const patient = computed(() => store.getters.getPatient);
    const consultation = computed(() => store.getters.getConsultationHistory);
    const currentDate = moment(Date.now()).format("yyyy-MM-DD");

    const calculateAges = async () => {
      const age = calculateAge(patient.value.birthdate);
      store.commit("setAge", age);
    };

    onMounted(async () => {
      calculateAges();
    });

    return {
      patient,
      consultation,
      currentDate,
      calculateAges,
    };
  },
});
</script>

<style scoped></style>

const state = {
    data: {
        pastHistory: {
            id: 0,
            unremarkable: '',
            blood_disease: '',
            asthma: '',
            hypertension: '',
            cva: '',
            gut_disease: '',
            git_disease: '',
            pulmo_disease: '',
            previous_or: '',
            previous_hospitalization: '',
            other_findings: '',
        },

        familyHistory: {
            id: 0,
            unremarkable: '',
            hcvd: '',
            chd: '',
            cva: '',
            gut_disease: '',
            blood_dyscrasia: '',
            allergy: '',
            dm: '',
            git_disease: '',
            pulmo_disease: '',
            ca: '',
            other_findings: '',
        },

        socialHistory: {
            id: 0,
            smoking: '',
            alcohol_intake: '',
            betel_nut_chewing: '',
            drug_food_allergy: '',
            others: '',
        },

        patient: {
            id: 0,
            lname: '',
            fname: '',
            mname: '',
            birthdate: '',
            age: '',
            gender: '',
            contact_no: '',
            address: '',
            vaccination: '',
            past_history_id: '',
            family_history_id: '',
            social_history_id: '',
        },

        consultation: {
            id: 0,
            patient_id: 0,
            physician_id: '',
            consultation_no: '',
            consultation_datetime: '',
            payment_type: '',
            chief_complaint: '',
            subjective: '',
            objective: '',
            assessment: '',
            plan: '',
        },

        vitalSigns: {
            id: 0,
            consultation_id: '',
            height: '',
            weight: '',
            bmi: '',
            bp_f: '',
            bp_s: '',
            oxygen_saturation: '',
            respiratory_rate: '',
            pulse_rate: '',
            cbg: '',
        }

    }
}

const mutations = {

}

const actions = {

}

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}
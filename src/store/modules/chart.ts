import api from '@/api';
import { buildQueryParams } from '@/service'
import moment from 'moment';

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
            f_unremarkable: '',
            hcvd: '',
            chd: '',
            f_cva: '',
            f_gut_disease: '',
            blood_dyscrasia: '',
            allergy: '',
            dm: '',
            f_git_disease: '',
            f_pulmo_disease: '',
            ca: '',
            f_other_findings: '',
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
        },

        chartResponse: {}

    }
}

const mutations = {
    setPastHistory: (state, payload) => {
        state.data.pastHistory = {
            id: payload.id,
            unremarkable: payload.unremarkable,
            blood_disease: payload.blood_disease,
            asthma: payload.asthma,
            hypertension: payload.hypertension,
            cva: payload.cva,
            gut_disease: payload.gut_disease,
            git_disease: payload.git_disease,
            pulmo_disease: payload.pulmo_disease,
            previous_or: payload.previous_or,
            previous_hospitalization: payload.previous_hospitalization,
            other_findings: payload.other_findings,
        }
    },

    setFamilyHistory: (state, payload) => {
        state.data.familyHistory = {
            id: payload.id,
            f_unremarkable: payload.unremarkable,
            hcvd: payload.hcvd,
            chd: payload.chd,
            f_cva: payload.cva,
            f_gut_disease: payload.gut_disease,
            blood_dyscrasia: payload.blood_dyscrasia,
            allergy: payload.allergy,
            dm: payload.dm,
            f_git_disease: payload.git_disease,
            f_pulmo_disease: payload.pulmo_disease,
            ca: payload.ca,
            f_other_findings: payload.other_findings,
        }
    },

    setSocialHistory: (state, payload) => {
        state.data.socialHistory = {
            id: payload.id,
            smoking: payload.smoking,
            alcohol_intake: payload.alcohol_intake,
            betel_nut_chewing: payload.betel_nut_chewing,
            drug_food_allergy: payload.drug_food_allergy,
            others: payload.others,
        }
    },

    setPatient: (state, payload) => {
        state.data.patient = {
            id: payload.id,
            lname: payload.lname,
            fname: payload.fname,
            mname: payload.mname,
            birthdate: payload.birthdate,
            age: payload.age,
            gender: payload.gender,
            contact_no: payload.contact_no,
            address: payload.address,
            vaccination: payload.vaccination,
            past_history_id: payload.past_history_id,
            family_history_id: payload.family_history_id,
            social_history_id: payload.social_history_id,
        }
    },

    setConsultation: (state, payload) => {
        state.data.consultation = {
            id: payload.id,
            patient_id: payload.patient_id,
            physician_id: payload.physician_id,
            consultation_no: payload.consultation_no,
            consultation_datetime: payload.consultation_datetime,
            payment_type: payload.payment_type,
            chief_complaint: payload.chief_complaint,
            subjective: payload.subjective,
            objective: payload.objective,
            assessment: payload.assessment,
            plan: payload.plan,
        }
    },

    setVitalSigns: (state, payload) => {
        state.data.getVitalSigns = {
            id: payload.id,
            consultation_id: payload.consultation_id,
            height: payload.height,
            weight: payload.weight,
            bmi: payload.bmi,
            bp_f: payload.bp_f,
            bp_s: payload.bp_s,
            oxygen_saturation: payload.oxygen_saturation,
            respiratory_rate: payload.respiratory_rate,
            pulse_rate: payload.pulse_rate,
            cbg: payload.cbg,
        }
    },

    setPastHistoryEmpty: (state) => {
        state.data.pastHistory = {
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
        }
    },

    setFamilyHistoryEmpty: (state) => {
        state.data.familyHistory = {
            id: 0,
            f_unremarkable: '',
            hcvd: '',
            chd: '',
            f_cva: '',
            f_gut_disease: '',
            blood_dyscrasia: '',
            allergy: '',
            dm: '',
            f_git_disease: '',
            f_pulmo_disease: '',
            ca: '',
            f_other_findings: '',
        }
    },

    setSocialHistoryEmpty: (state) => {
        state.data.socialHistory = {
            id: 0,
            smoking: '',
            alcohol_intake: '',
            betel_nut_chewing: '',
            drug_food_allergy: '',
            others: '',
        }
    },

    setPatientEmpty: (state) => {
        state.data.patient = {
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
        }
    },

    setConsultationEmpty: (state) => {
        state.data.consultation = {
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
        }
    },

    setVitalSignsEmpty: (state) => {
        state.data.vitalSigns = {
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
    },

    setChartResponse: (state, payload) => {
        state.data.chartResponse = payload
    }
}

const actions = {
    async saveChart({ commit }, payload) {
        const response = await api.post('/patient/chart/create', {
            //pastHistory
            unremarkable: payload.unremarkable,
            blood_disease: payload.blood_disease,
            asthma: payload.asthma,
            hypertension: payload.hypertension,
            cva: payload.cva,
            gut_disease: payload.gut_disease,
            git_disease: payload.git_disease,
            pulmo_disease: payload.pulmo_disease,
            previous_or: payload.previous_or,
            previous_hospitalization: payload.previous_hospitalization,
            other_findings: payload.other_findings,
            //familyHistory
            f_unremarkable: payload.f_unremarkable,
            hcvd: payload.hcvd,
            chd: payload.chd,
            f_cva: payload.f_cva,
            f_gut_disease: payload.f_gut_disease,
            blood_dyscrasia: payload.blood_dyscrasia,
            allergy: payload.allergy,
            dm: payload.dm,
            f_git_disease: payload.f_git_disease,
            f_pulmo_disease: payload.f_pulmo_disease,
            ca: payload.ca,
            f_other_findings: payload.f_other_findings,
            //socialHistory
            smoking: payload.smoking,
            alcohol_intake: payload.alcohol_intake,
            betel_nut_chewing: payload.betel_nut_chewing,
            drug_food_allergy: payload.drug_food_allergy,
            others: payload.others,
            //patient
            lname: payload.lname,
            fname: payload.fname,
            mname: payload.mname,
            birthdate: payload.birthdate,
            age: payload.age,
            gender: payload.gender,
            contact_no: payload.contact_no,
            address: payload.address,
            vaccination: payload.vaccination,
            created_by: payload.created_by,
            //consultation
            physician_id: payload.physician_id,
            consultation_datetime: payload.consultation_datetime,
            payment_type: payload.payment_type,
            chief_complaint: payload.chief_complaint,
            subjective: payload.subjective,
            objective: payload.objective,
            assessment: payload.assessment,
            plan: payload.plan,
            //vitals
            height: payload.height,
            weight: payload.weight,
            bmi: payload.bmi,
            bp_f: payload.bp_f,
            bp_s: payload.bp_s,
            oxygen_saturation: payload.oxygen_saturation,
            respiratory_rate: payload.respiratory_rate,
            pulse_rate: payload.pulse_rate,
            cbg: payload.cbg,
        });
        commit('setChartResponse', response.data.data);

    }
}

const getters = {
    getPastHistory: state => state.data.pastHistory,
    getFamilyHistory: state => state.data.familyHistory,
    getSocialHistory: state => state.data.socialHistory,
    getPatient: state => state.data.patient,
    getConsultation: state => state.data.consultation,
    getVitalSigns: state => state.data.vitalSigns
}

export default {
    state,
    mutations,
    actions,
    getters
}
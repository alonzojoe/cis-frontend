import { ref } from "vue"

export const validatePatient = ref({
    consultation_datetime: true,
    payment_type: true,
    lname: true,
    fname: true,
    birthdate: true,
    gender: true,
    chief_complaint: true,
})

export const validateVitals = ref({
    height: true,
    weight: true,
})

export const validateSoap = ref({
    subjective: true,
    objective: true,
    assessment: true,
    plan: true
})

export const validatePhysician = ref({
    physician_id: true,
})

export const validateChecker = async (formData) => {
    for (const field of Object.keys(validatePatient.value)) {
        if (!formData[field]) {
            validatePatient.value[field] = false;
        } else {
            validatePatient.value[field] = true;
        }
    }

    for (const field of Object.keys(validateVitals.value)) {
        if (!formData[field]) {
            validateVitals.value[field] = false;
        } else {
            validateVitals.value[field] = true;
        }
    }

    for (const field of Object.keys(validateSoap.value)) {
        if (!formData[field]) {
            validateSoap.value[field] = false;
        } else {
            validateSoap.value[field] = true;
        }
    }

    for (const field of Object.keys(validatePhysician.value)) {
        if (!formData[field]) {
            validatePhysician.value[field] = false;
        } else {
            validatePhysician.value[field] = true;
        }
    }
}

export const validateFields = async (toast, formData, type) => {
    const requiredFields = [
        { payload: 'consultation_datetime', message: 'User Last Name' },
        { payload: 'fname', message: 'User First Name' },
        { payload: 'email', message: 'User Email' },
        { payload: 'bool', message: 'User Password' },
        { payload: 'conf', message: 'User Confirm Password' },
    ]

    consultation_datetime: true,
    payment_type: true,
    lname: true,
    fname: true,
    birthdate: true,
    gender: true,
    chief_complaint: true,

    validateChecker(formData)

    const errors = ref(0);

    requiredFields.every((r) => {
        if (!formData[r.payload]) {
            errors.value++
            if (type != 1) {
                toast.add({ severity: 'error', summary: 'Field Required:', detail: `${r.message}`, life: 3000 });
            }
            return false;
        }
        return true;
    })

    return errors;
}
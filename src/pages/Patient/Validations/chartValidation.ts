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

// export const validateChecker = async (formData) => {
//     for (const field of Object.keys(validatePatient.value)) {
//         if (!formData[field]) {
//             validatePatient.value[field] = false;
//         } else {
//             validatePatient.value[field] = true;
//         }
//     }

//     for (const field of Object.keys(validateVitals.value)) {
//         if (!formData[field]) {
//             validateVitals.value[field] = false;
//         } else {
//             validateVitals.value[field] = true;
//         }
//     }

//     for (const field of Object.keys(validateSoap.value)) {
//         if (!formData[field]) {
//             validateSoap.value[field] = false;
//         } else {
//             validateSoap.value[field] = true;
//         }
//     }

//     for (const field of Object.keys(validatePhysician.value)) {
//         if (!formData[field]) {
//             validatePhysician.value[field] = false;
//         } else {
//             validatePhysician.value[field] = true;
//         }
//     }
// }

export const validateChecker = async (formData) => {
    const validateAllFields = (validationObject) => {
        return Object.values(validationObject).every((value) => value === true);
    };

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

    const isPatientValid = validateAllFields(validatePatient.value);
    const isVitalsValid = validateAllFields(validateVitals.value);
    const isSoapValid = validateAllFields(validateSoap.value);
    const isPhysicianValid = validateAllFields(validatePhysician.value);

    const result = {
        patient: isPatientValid,
        vitals: isVitalsValid,
        soap: isSoapValid,
        physician: isPhysicianValid,
    };


    return result;
};


export const validateFields = async (toast, formData, type) => {
    const requiredFields = [
        { payload: 'consultation_datetime', message: 'Consultation Date & Time' },
        { payload: 'payment_type', message: 'Payment Type' },
        { payload: 'lname', message: 'Last Name' },
        { payload: 'fname', message: 'First Name' },
        { payload: 'birthdate', message: 'Birthdate' },
        { payload: 'gender', message: 'Gender' },
        { payload: 'chief_complaint', message: 'Chief Complaint' },
        { payload: 'height', message: 'Height' },
        { payload: 'weight', message: 'Weight' },
        { payload: 'subjective', message: 'Subjective' },
        { payload: 'objective', message: 'Objective' },
        { payload: 'assessment', message: 'Assessment' },
        { payload: 'plan', message: 'Plan' },
        { payload: 'physician_id', message: 'Physician' }
    ]

    const sections = await validateChecker(formData);

    const errors = ref({
        count: 0,
        sections: sections
    });

    requiredFields.every((r) => {
        if (!formData[r.payload]) {
            errors.value.count++
            if (type != 1) {
                toast.add({ severity: 'error', summary: 'Field Required:', detail: `${r.message}`, life: 3000 });
            }
            return false;
        }
        return true;
    })

    return errors;
}
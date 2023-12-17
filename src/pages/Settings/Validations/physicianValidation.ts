import { flattenDiagnosticMessageText } from "typescript"
import { ref } from "vue"

export const validationStatus = ref({
    lname: true,
    fname: true
})

export const validateChecker = async (formData) => {
    for (const field of Object.keys(validationStatus.value)) {
        if (!formData[field]) {
            validationStatus.value[field] = false;
        } else {
            validationStatus.value[field] = true;
        }
    }
}

export const validateFields = async (toast, formData, type) => {
    const requiredFields = [
        { payload: 'lname', message: 'Physician Last Name' },
        { payload: 'fname', message: 'Physician First Name' }
    ]

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
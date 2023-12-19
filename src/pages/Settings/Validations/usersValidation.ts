import { ref } from "vue"

export const validationStatus = ref({
    lname: true,
    fname: true,
    email: true,
    password: true,
    bool: true,
    conf: true,
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
        { payload: 'lname', message: 'User Last Name' },
        { payload: 'fname', message: 'User First Name' },
        { payload: 'email', message: 'User Email' },
        { payload: 'bool', message: 'User Password' },
        { payload: 'conf', message: 'User Confirm Password' },
    ]

    const passwordLength = { payload: 'pwLength', message: 'Passsword must be at least 6 letters' }
    if (formData.bool.length < 6) {
        requiredFields.push(passwordLength)
        validationStatus.value.pwLength = true
    } else {
        delete validationStatus.value.pwLength
    }

    const mismatch = { payload: 'mismatch', message: 'Passsword does not match' }
    if (formData.bool !== formData.conf) {
        requiredFields.push(mismatch)
        validationStatus.value.mismatch = true
    } else {
        delete validationStatus.value.mismatch
    }



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
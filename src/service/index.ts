import { inject } from 'vue'
import CryptoJS from 'crypto-js'
import Cookies from 'js-cookie';
import moment from 'moment';
export function swalMessage(swal, title: String, text: String, icon: String) {
    return swal({
        title: title,
        text: text,
        icon: icon
    })
}

export function swalConfirmation(swal, title: String, text: String, icon: String) {
    return swal({
        title: title,
        text: text,
        icon: icon,
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `Cancel`,
    })
}


export function deCrypto(stringToDecrypt) {

    const key = import.meta.env.VITE_CRYPTO_APP_KEY;

    var encrypted_json = JSON.parse(atob(stringToDecrypt));
    var decrypted = CryptoJS.AES.decrypt(encrypted_json.value, CryptoJS.enc.Base64.parse(key), {
        iv: CryptoJS.enc.Base64.parse(encrypted_json.iv)
    });

    const stringDecrypted = decrypted.toString(CryptoJS.enc.Utf8);
    // for object JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    return stringDecrypted

}


export function encryptData(data) {
    const password = import.meta.env.VITE_CRYPTO_SECRET_KEY;

    const encryptedData = CryptoJS.AES.encrypt(data, password).toString();

    return encryptedData;
}

export function NumericOnly(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();;
    } else {
        return true;
    }
}

export function NumericVitals(evt) {
    evt = evt || window.event;
    var charCode = evt.which || evt.keyCode;


    if ((charCode >= 48 && charCode <= 57) || charCode === 46) {

        if (charCode === 46 && evt.target.value.indexOf('.') !== -1) {
            evt.preventDefault();
        }
    } else {
        evt.preventDefault();
    }
}


export function decryptData(data) {
    const password = import.meta.env.VITE_CRYPTO_SECRET_KEY;
    try {
        const bytes = CryptoJS.AES.decrypt(data, password);
        if (bytes.toString()) {
            const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            return decryptedData;
        } else {
            console.error("Decryption failed. Invalid key / data.");
            return "Invalid data"; // Return an "invalid data" string
        }
    } catch (error) {
        // console.error("Error decrypting data:", error);
        Cookies.remove('auth_token');
        return "Invalid data"; // Return an "invalid data" string
    }
}

export function buildQueryParams(params) {
    const queryParams = [];

    for (const key in params) {
        if (params[key]) {
            queryParams.push(`${key}=${params[key]}`);
        }

    }

    return queryParams.join('&');

}

export const trimZeroes = (num) => {
    let stringNumber = num.toString();

    stringNumber = stringNumber.replace(/^0+/, '');

    if (stringNumber === '') {
        return 0;
    }

    return parseInt(stringNumber);
}

export const calculateAge = (selectedDate) => {
    const birthDate = moment(selectedDate);
    const currentDate = moment();

    const years = currentDate.diff(birthDate, 'years');
    birthDate.add(years, 'years');

    return years;
}


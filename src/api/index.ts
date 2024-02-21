import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

let refresh = false;

api.interceptors.response.use((resp) => resp, async (error) => {
    if (error.response.status === 401 && !refresh) {
        refresh = true
        try {
            const oldToken = localStorage.getItem("ajioasdmianc8a79sdy0")
            const response = await api.post('/auth/refresh', {}, {
                headers: {  Authorization: 'Bearer ' + oldToken,
                }
            });
            if (response.status === 200) {
                const newToken = response.data.authorization.token;
                Cookies.set("auth_token", newToken, { expires: 365 });
                localStorage.setItem("ajioasdmianc8a79sdy0", newToken);
                api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
                api.defaults.headers.common['ngrok-skip-browser-warning'] = true;
                return api(error.config);
            }
        } catch (refreshError) {

            console.error('Error refreshing token:', refreshError);

        }
    }
    return Promise.reject(error);
});


export default api;
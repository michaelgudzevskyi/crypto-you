import axios from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    crossDomain: true,
    timeout: 30000,
})

api.interceptors.request.use(async (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('Bearer')}`
    return config
})

const header = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        'Refresh-Token': localStorage.getItem('refresh_token'),
        'User-Email': localStorage.getItem('user_email'),
    },
}

// Function that will be called to refresh authorization
const refreshAuthLogic = (failedRequest) =>
    api
        .post('/oauth/v4/backoffice/oauth/token', null, header)
        .then((res) => {
            localStorage.setItem('Bearer', res.data.token)
            localStorage.setItem('refresh_token', res.data.refreshToken)
            failedRequest.response.config.headers.Authorization = `Bearer ${res.data.token}`
            return Promise.resolve()
        })
        .catch(() => {})

// Instantiate the interceptor (you can chain it as it returns the axios instance)
createAuthRefreshInterceptor(api, refreshAuthLogic)

export default api

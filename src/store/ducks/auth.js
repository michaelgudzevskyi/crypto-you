import api from '../../services'

export const Types = {
    SET_SUCCESS: 'ui/SET_SUCCESS',
    SET_ERRORS: 'ui/SET_ERRORS',
    CLEAR_ERRORS: 'ui/CLEAR_ERRORS',
    LOADING_UI: 'ui/LOADING_UI',
    STOP_LOADING_UI: 'ui/STOP_LOADING_UI',
    SET_AUTHENTICATED: 'auth/SET_AUTHENTICATED',
    SET_UNAUTHENTICATED: 'auth/SET_UNAUTHENTICATED',
}

const initialState = {
    authenticated: false,
    token: null,
    credentials: null,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true,
                token: action.payload.access_token,
            }
        default:
            return state
    }
}

export const Creators = {
    login: (userData) => (dispatch) => {
        dispatch({ type: Types.LOADING_UI })
        api.post('/oauth/v4/backoffice/oauth/login', userData)
            .then((res) => {
                dispatch({
                    type: Types.SET_AUTHENTICATED,
                    payload: res.data,
                })
            })
            .catch((err) => {
                dispatch({
                    type: Types.SET_ERRORS,
                    payload: err.message,
                })
            })
    },
}

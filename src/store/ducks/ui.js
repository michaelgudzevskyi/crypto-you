export const Types = {
    SET_SUCCESS: 'ui/SET_SUCCESS',
    SET_ERRORS: 'ui/SET_ERRORS',
    CLEAR_ERRORS: 'ui/CLEAR_ERRORS',
    LOADING_UI: 'ui/LOADING_UI',
    STOP_LOADING_UI: 'ui/STOP_LOADING_UI',
    SET_BLUR: 'ui/SET_BLUR',
}

const initialState = {
    loading: false,
    errors: null,
    blur: false,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.SET_SUCCESS:
            return {
                ...state,
                loading: false,
                blur: false,
            }
        case Types.SET_ERRORS:
            return {
                ...state,
                loading: false,
                blur: false,
                errors: action.payload,
            }
        case Types.CLEAR_ERRORS:
            return {
                ...state,
                loading: false,
                blur: false,
                errors: null,
            }
        case Types.LOADING_UI:
            return {
                ...state,
                loading: true,
                blur: false,
            }
        case Types.SET_BLUR:
            return {
                ...state,
                blur: true,
            }
        case Types.STOP_LOADING_UI:
            return {
                ...state,
                loading: false,
                blur: false,
            }
        default:
            return state
    }
}

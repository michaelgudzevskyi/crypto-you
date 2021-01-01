import { combineReducers } from 'redux'

import { Types as AuthTypes } from './auth'

import auth from './auth'
import ui from './ui'

const reducers = combineReducers({
    auth,
    ui,
})

// reset the state of a redux store
const rootReducer = (state, action) => {
    if (action.type === AuthTypes.SET_UNAUTHENTICATED) {
        state = undefined
    }
    return reducers(state, action)
}

export default rootReducer

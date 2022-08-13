import { actionTypes } from "./actionTypes"
const initialState = {
    users: [],
    user: {},
    loading: false
}

const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USERS:
            return {
                ...state, 
                users: action.payload,
                loading: false
            }
        case actionTypes.DELETE_USER:
        case actionTypes.ADD_USER:
        case actionTypes.UPDATE_USER:            
            return {
                ...state,
                loading: false
            }
        case actionTypes.GET_SINGLE_USER:
            return {
                ...state, user: action.payload, loading: false
            }
        
        default:
            return state
    }
}

export default usersReducers
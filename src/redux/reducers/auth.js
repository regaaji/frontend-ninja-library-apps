import {
    getAuthAction,
    pending,
    rejected,
    fulfilled
} from "../action/actionTypes";
const initialState = {
    dataAuth: [],
    isLoading: false
}

const authReducers = (state = initialState, action) => {
    switch (action.type) {
         case  getAuthAction + pending:
            return {
                ...state,
                isLoading: true,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
         case  getAuthAction + rejected:
            return {
                ...state,
               isRejected: true,
                isLoading: false
            }
         case  getAuthAction + fulfilled:
            return {
                ...state,
                isFulfilled: true,
                isLoading: true,
                dataAuth: state.dataAuth
            }
        default: return state
    }
}

export default authReducers
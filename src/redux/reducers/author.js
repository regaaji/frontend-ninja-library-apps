import {
  getAuthorListAction,
  postAuthorAction,
  putAuthorAction,
  deleteAuthorAction,
  pending,
  rejected,
  fulfilled,
} from "../action/actionTypes";

const initialValue = {
    authorDataList:[],
    errMsg: [],
    isLoading: false,
    isPending: false,
    isRejected: false,
    isFulfilled: false
};

const authorReducers = (state = initialValue, action) => {
	  switch (action.type) {

	  	

            //GET AUTHOR BOOK
            case  getAuthorListAction + pending:
            return{
                ...state,
                isLoading: true,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
            case  getAuthorListAction + rejected:
            return {
                ...state,
                isRejected: true,
                isLoading: false,
                errMsg : action.payload.data
            }
            case  getAuthorListAction + fulfilled:
            return {
                ...state,
                isFulfilled: true,
                isLoading: true,
                authorDataList: action.payload.data
            }


            //POST AUTHOR
             case  postAuthorAction + pending:
            return{
                ...state,
                isLoading: true,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
            case  postAuthorAction + rejected:
            return {
                ...state,
                isRejected: true,
                isLoading: false,
                errMsg : action.payload.data
            }
            case  postAuthorAction + fulfilled:
            return {
                ...state,
                isFulfilled: true,
                isLoading: true,
            }


            //PUT AUTHOR
             case  putAuthorAction + pending:
            return{
                ...state,
                isLoading: true,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
            case  putAuthorAction + rejected:
            return {
                ...state,
                isRejected: true,
                isLoading: false,
                errMsg : action.payload.data
            }
            case  putAuthorAction + fulfilled:
            return {
                ...state,
                isFulfilled: true,
                isLoading: true,
            }


            //DELETE AUTHOR
             case  deleteAuthorAction + pending:
            return{
                ...state,
                isLoading: true,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
            case  deleteAuthorAction + rejected:
            return {
                ...state,
                isRejected: true,
                isLoading: false,
                errMsg : action.payload.data
            }
            case  deleteAuthorAction + fulfilled:
            return {
                ...state,
                isFulfilled: true,
                isLoading: true,
            }


	     default:
            return state
    }

}
export default authorReducers
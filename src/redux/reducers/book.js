
import {
  getAuthorAction,
  getGenreAction,
  getBookAction,
  getSearchAction,
  getTitleAction,
  getPageAction,
  postBookAction,
  postBorrowBookAction,
  putBookAction,
  deleteBookAction,
  pending,
  rejected,
  fulfilled,
} from "../action/actionTypes";

const initialValue = {
    bookData:[],
    errMsg: [],
    isLoading: false,
    isPending: false,
    isRejected: false,
    isFulfilled: false
};

const bookReducers = (state = initialValue, action) => {
    switch (action.type){
        //GET BOOK
        case  getBookAction + pending:
            return{
                ...state,
                isLoading: true,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
            case  getBookAction + rejected:
            return {
                ...state,
                isRejected: true,
                isLoading: false,
                errMsg : action.payload.data
            }
            case  getBookAction + fulfilled:
            return {
                ...state,
                isFulfilled: true,
                isLoading: true,
                bookData: action.payload.data
            }

            //SEARCH BOOK

             case  getSearchAction + pending:
            return{
                ...state,
                isLoading: true,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
            case  getSearchAction + rejected:
            return {
                ...state,
                isRejected: true,
                isLoading: false,
                errMsg : action.payload.data
            }
            case  getSearchAction + fulfilled:
            return {
                ...state,
                isFulfilled: true,
                isLoading: true,
                bookData: action.payload.data
            }

            //SORTING TITLE BOOK

             case  getTitleAction + pending:
            return{
                ...state,
                isLoading: true,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
            case  getTitleAction + rejected:
            return {
                ...state,
                isRejected: true,
                isLoading: false,
                errMsg : action.payload.data
            }
            case  getTitleAction + fulfilled:
            return {
                ...state,
                isFulfilled: true,
                isLoading: true,
                bookData: action.payload.data
            }


            //SORTING AUTHOR BOOK
             case  getAuthorAction + pending:
            return{
                ...state,
                isLoading: true,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
            case  getAuthorAction + rejected:
            return {
                ...state,
                isRejected: true,
                isLoading: false,
                errMsg : action.payload.data
            }
            case  getAuthorAction + fulfilled:
            return {
                ...state,
                isFulfilled: true,
                isLoading: true,
                bookData: action.payload.data
            }


            //SORTING GENRE BOOK
            case  getGenreAction + pending:
            return{
                ...state,
                isLoading: true,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
            case  getGenreAction + rejected:
            return {
                ...state,
                isRejected: true,
                isLoading: false,
                errMsg : action.payload.data
            }
            case  getGenreAction + fulfilled:
            return {
                ...state,
                isFulfilled: true,
                isLoading: true,
                bookData: action.payload.data
            }

            

            //PAGINATION BOOK
            case  getPageAction + pending:
            return{
                ...state,
                isLoading: true,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
            case  getPageAction + rejected:
            return {
                ...state,
                isRejected: true,
                isLoading: false,
                errMsg : action.payload.data
            }
            case  getPageAction + fulfilled:
            return {
                ...state,
                isFulfilled: true,
                isLoading: true,
                bookData: action.payload.data
            }



            //EDIT BOOK
            case  putBookAction + pending:
            return{
                ...state,
                isLoading: true,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
            case  putBookAction + rejected:
            return {
                ...state,
                isRejected: true,
                isLoading: false,
                errMsg : action.payload.data
            }
            case  putBookAction + fulfilled:
            return {
                ...state,
                isFulfilled: true,
                isLoading: true,
                bookData: action.payload.data
            }

            // POST BORROW BOOK
             case  postBorrowBookAction + pending:
            return{
                ...state,
                isLoading: true,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
            case  postBorrowBookAction + rejected:
            return {
                ...state,
                isRejected: true,
                isLoading: false,
                errMsg : action.payload.data
            }
            case  postBorrowBookAction + fulfilled:
            return {
                ...state,
                isFulfilled: true,
                isLoading: true,
            }



            // CREATE BOOK
             case  postBookAction + pending:
            return{
                ...state,
                isLoading: true,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
            case  postBookAction + rejected:
            return {
                ...state,
                isRejected: true,
                isLoading: false,
                errMsg : action.payload.data
            }
            case  postBookAction + fulfilled:
            return {
                ...state,
                isFulfilled: true,
                isLoading: true,
                bookData: action.payload.data
            }

            //DELETE BOOK
             case  deleteBookAction + pending:
            return{
                ...state,
                isLoading: true,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
            case  deleteBookAction + rejected:
            return {
                ...state,
                isRejected: true,
                isLoading: false,
                errMsg : action.payload.data
            }
            case  deleteBookAction + fulfilled:
            return {
                ...state,
                isFulfilled: true,
                isLoading: true,
            }

            
            default:
                return state;
    }
}

export default bookReducers
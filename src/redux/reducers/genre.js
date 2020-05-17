import {
  getGenreListAction,
  postGenreAction,
  putGenreAction,
  deleteGenreAction,
  pending,
  rejected,
  fulfilled,
} from "../action/actionTypes";

const initialValue = {
    genreDataList:[],
    errMsg: [],
    isLoading: false,
    isPending: false,
    isRejected: false,
    isFulfilled: false
};

const genreReducers = (state = initialValue, action) => {
	  switch (action.type) {

	  	

            //GET GENRE BOOK
            case  getGenreListAction + pending:
            return{
                ...state,
                isLoading: true,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
            case  getGenreListAction + rejected:
            return {
                ...state,
                isRejected: true,
                isLoading: false,
                errMsg : action.payload.data
            }
            case  getGenreListAction + fulfilled:
            return {
                ...state,
                isFulfilled: true,
                isLoading: true,
                genreDataList: action.payload.data
            }


            //POST GENRE
             case  postGenreAction + pending:
            return{
                ...state,
                isLoading: true,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
            case  postGenreAction + rejected:
            return {
                ...state,
                isRejected: true,
                isLoading: false,
                errMsg : action.payload.data
            }
            case  postGenreAction + fulfilled:
            return {
                ...state,
                isFulfilled: true,
                isLoading: true,
            }


            //PUT GENRE
             case  putGenreAction + pending:
            return{
                ...state,
                isLoading: true,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
            case  putGenreAction + rejected:
            return {
                ...state,
                isRejected: true,
                isLoading: false,
                errMsg : action.payload.data
            }
            case  putGenreAction + fulfilled:
            return {
                ...state,
                isFulfilled: true,
                isLoading: true,
            }


             //DELETE GENRE
             case  deleteGenreAction + pending:
            return{
                ...state,
                isLoading: true,
                isPending: true,
                isRejected: false,
                isFulfilled: false
            }
            case  deleteGenreAction + rejected:
            return {
                ...state,
                isRejected: true,
                isLoading: false,
                errMsg : action.payload.data
            }
            case  deleteGenreAction + fulfilled:
            return {
                ...state,
                isFulfilled: true,
                isLoading: true,
            }


	     default:
            return state
    }

}
export default genreReducers
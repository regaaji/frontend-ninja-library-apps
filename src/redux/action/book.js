import {
	getBookAction, 
	postBookAction, 
    postBorrowBookAction, 
	putBookAction,
	deleteBookAction,
	getSearchAction, 
	getTitleAction, 
	getAuthorAction, 
	getGenreAction, 
	getPageAction
} from "./actionTypes";
import {
	getBooks, 
	postBooks, 
	putBooks,
	deleteBooks,
    postBorrowBooks, 
	getSearch, 
	getSort, 
	getSortAuth, 
	getSortGen, 
	getPage
} from "../../utils/http";


export const getAllBook = () => {
    return {
        type: getBookAction,
        payload: getBooks(),
    }
}

export const getAllSearch = (title) => {
    return {
        type: getSearchAction,
          payload: getSearch(title)
    }
}

export const getSortTitle = () => {
    return {
        type: getTitleAction,
        payload: getSort(),
    }
}

export const getSortAuthor = () => {
    return {
        type: getAuthorAction,
        payload: getSortAuth(),
    }
}

export const getSortGenre = () => {
    return {
        type: getGenreAction,
        payload: getSortGen(),
    }
}

export const getPagination = (val) => {
    return {
        type: getPageAction,
        payload: getPage(val),
    }
}

export const postBook = (data) => {
    return {
        type: postBookAction,
        payload: postBooks(data),
    }
}

export const postBorrowBook = (data) => {
    return {
        type: postBorrowBookAction,
        payload: postBorrowBooks(data),
    }
}

export const updateBook = (data) => {
    return {
        type: putBookAction,
        payload: putBooks(data),
    }
}


export const deleteBook = (id) => {
    return {
        type: deleteBookAction,
        payload: deleteBooks(id),
    }
}

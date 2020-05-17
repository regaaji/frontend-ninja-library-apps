import {
	getAuthorListAction,
	deleteAuthorAction,
	putAuthorAction,
	postAuthorAction
} from "./actionTypes";
import {
	getAuthor,
	postAuthor,
	putAuthor,
	deleteAuthor  
} from "../../utils/http";

export const getAllAuthor = () => {
    return {
        type: getAuthorListAction,
        payload: getAuthor(),
    }
}

export const postAuthorCreator = (data) => {
    return {
        type: postAuthorAction,
        payload: postAuthor(data),
    }
}

export const updateAuthorChange = (data) => {
    return {
        type: putAuthorAction,
        payload: putAuthor(data),
    }
}

export const deleteAuthorById = (id) => {
    return {
        type: deleteAuthorAction,
        payload: deleteAuthor(id),
    }
}
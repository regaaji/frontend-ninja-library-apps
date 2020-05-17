import {
	getGenreListAction,
	postGenreAction,
	putGenreAction,
	deleteGenreAction
} from "./actionTypes";
import {
	getGenre,
	postGenre,
	putGenre,
	deleteGenre 
} from "../../utils/http";

export const getAllGenre = () => {
    return {
        type: getGenreListAction,
        payload: getGenre(),
    }
}

export const postGenreCreator = (data) => {
    return {
        type: postGenreAction,
        payload: postGenre(data),
    }
}

export const updateGenreChange = (data) => {
    return {
        type: putGenreAction,
        payload: putGenre(data),
    }
}

export const deleteGenreById = (id) => {
    return {
        type: deleteGenreAction,
        payload: deleteGenre(id),
    }
}
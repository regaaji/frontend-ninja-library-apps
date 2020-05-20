import Axios from 'axios'

const URL_STRING = "https://ninja-library-apps.netlify.app/books/"
//const URL_BASE = process.env.REACT_APP_URL_BASE
const URL_API = "https://ninja-library-apps.netlify.app/book"
const API_TOKEN = localStorage.getItem('token')



export const getBooks = () => {
	// const requestData = {
 //        search,sortBy, page,limit
 //    }
    // console.log(qs.stringify(requestData))
	return Axios.get(`${URL_STRING}`, {
        headers:{
            'Authorization' : `${API_TOKEN}`,
            'Content-Type' : 'application/x-www-form-urlencoded' 
        }    
    })
}

export const getDetailBooks = ({id}) => {
	console.log(id)
	return Axios.get(`${URL_STRING}${id}`, {
        headers:{
            'Authorization' : `${API_TOKEN}`,
            'Content-Type' : 'application/x-www-form-urlencoded' 
        }    
    })
}


export const getSearch = (title) => {	
	return Axios.get(`${URL_STRING}?search=${title}`, {
        headers:{
            'Authorization' : `${API_TOKEN}`,
            'Content-Type' : 'application/x-www-form-urlencoded' 
        }    
    })
}

export const getSort = () => {	
	return Axios.get(`${URL_STRING}?sortBy=title`, {
        headers:{
            'Authorization' : `${API_TOKEN}`,
            'Content-Type' : 'application/x-www-form-urlencoded' 
        }    
    })
}

export const getSortGen = () => {	
	return Axios.get(`${URL_STRING}?sortBy=genre`, {
        headers:{
            'Authorization' : `${API_TOKEN}`,
            'Content-Type' : 'application/x-www-form-urlencoded' 
        }    
    })
}

export const getSortAuth = () => {	
	return Axios.get(`${URL_STRING}?sortBy=author`, {
        headers:{
            'Authorization' : `${API_TOKEN}`,
            'Content-Type' : 'application/x-www-form-urlencoded' 
        }    
    })
}

export const getPage = (val) => {	
	return Axios.get(`${URL_STRING}?limit=${val}`, {
        headers:{
            'Authorization' : `${API_TOKEN}`,
            'Content-Type' : 'application/x-www-form-urlencoded' 
        }    
    })
}

export const loginUser = (body) => {
	// return Axios.post(`${URL_API}/auth/login`, body)
	return Axios.post(`${URL_API}/auth/login`, {
		headers: {
			body: body,
			'content-type': 'application/x-www-form-urlencoded'
		}
	})
}


export const postBorrowBooks = (body) => {
	const data = new FormData()
	
	data.append('books_id', body.books_id)
	data.append('user_id', body.id_user)
	data.append('name_image', body.image)
	data.append('title', body.title)
	data.append('status', body.statusBorrow)

	return Axios.post(`${URL_STRING}borrow`, data, {
		headers: {
			  'Authorization' : `${API_TOKEN}`,
			  'content-type': 'application/x-www-form-urlencoded'
		}
	})

}

export const getHistory = (id_user) => {	
	return Axios.get(`${URL_API}/authors/history/${id_user}`, {
		headers: {
			'content-type': 'application/x-www-form-urlencoded'
		}
	})
}

export const putBorrowBooks = (body) => {
	const data = new FormData()
	console.log("body",body);	
	data.append('books_id', body.books_id)

	return Axios.put(`${URL_STRING}/borrowHistory/${body.id}`, data, {
		headers: {
			  'Authorization' : `${API_TOKEN}`,
			  'content-type': ' multipart/form-data'
		}
	})
}


export const getBorrowBooks = ({id}) => {
	console.log(id)
	return Axios.get(`${URL_STRING}borrow/${id}`, {
        headers:{
            'Authorization' : `${API_TOKEN}`,
            'Content-Type' : 'application/x-www-form-urlencoded' 
        }    
    })
}

export const borrowBooks = (body) => {
	const data = new URLSearchParams()
	data.append('status', body.borrow)
    return Axios.put(`${URL_STRING}borrow/${body.id}`, data, {
        headers:{
            'Authorization' : `${API_TOKEN}`,
            'Content-Type' : 'application/x-www-form-urlencoded' 
        }    
    })
}



export const returnBooks = (body) => {
	const data = new URLSearchParams()
	data.append('status', body.back)
    return Axios.put(`${URL_STRING}borrow/${body.user_id}`, data, {
        headers:{
            'Authorization' : `${API_TOKEN}`,
            'Content-Type' : 'application/x-www-form-urlencoded' 
        }    
    })
}

export const postLogin = (body) => {
	const data = new URLSearchParams()
	data.append('username', body.username)
	data.append('password', body.password)
	return Axios.post(`${URL_API}/auth/login`, data, {
		headers: {
			'Authorization' : `${API_TOKEN}`,
			'content-type': 'application/x-www-form-urlencoded'
		}
	})
}

export const getGenre = () => {	
	return Axios.get(`${URL_API}/genres`)
}

export const postGenre = (body) => {
	const data = new URLSearchParams()
	data.append('name', body.name)
	return Axios.post(`${URL_API}/genres`, data, {
		headers: {
			'Authorization' : `${API_TOKEN}`,
			'content-type': 'application/x-www-form-urlencoded'
		}
	})
}

export const putGenre = (body) => {
	const data = new URLSearchParams()
	data.append('id', body.id)
	console.log(body.id)
	data.append('name', body.name)
	return Axios.put(`${URL_API}/genres/${body.id}`, data, {
		headers: {
			'Authorization' : `${API_TOKEN}`,
			'content-type': 'application/x-www-form-urlencoded'
		}
	})
}

export const deleteGenre = (id) => {
	return Axios.delete(`${URL_API}/genres/${id}`, {
		headers: {
			'Authorization' : `${API_TOKEN}`,
			'content-type': 'application/x-www-form-urlencoded'
		}
	})
}


export const getAuthor = () => {	
	return Axios.get(`${URL_API}/authors`, {
		headers: {
			'Authorization' : `${API_TOKEN}`,
			'content-type': 'application/x-www-form-urlencoded'
		}
	})
}

export const postAuthor = (body) => {
	const data = new URLSearchParams()
	data.append('name', body.name)
	return Axios.post(`${URL_API}/authors`, data, {
		headers: {
			'Authorization' : `${API_TOKEN}`,
			'content-type': 'application/x-www-form-urlencoded'
		}
	})
}

export const putAuthor = (body) => {
	const data = new URLSearchParams()
	data.append('id', body.id)
	console.log(body.id)
	data.append('name', body.name)
	return Axios.put(`${URL_API}/authors/${body.id}`, data, {
		headers: {
			'Authorization' : `${API_TOKEN}`,
			'content-type': 'application/x-www-form-urlencoded'
		}
	})
}

export const deleteAuthor = (id) => {
	return Axios.delete(`${URL_API}/authors/${id}`, {
		headers: {
			'Authorization' : `${API_TOKEN}`,
			'content-type': 'application/x-www-form-urlencoded'
		}
	})
}



export const postRegister = (body) => {
	const data = new URLSearchParams()
	data.append('name', body.name)
	data.append('username', body.username)
	data.append('password', body.password)
	data.append('role', body.role)
	return Axios.post(`${URL_API}/auth/register`, data, {
		headers: {
			'content-type': 'application/x-www-form-urlencoded'
		}
	})
}


export const putBooks = (body) => {
	const data = new FormData()
	
	data.append('id', body.id)
	data.append('title', body.title)
	data.append('description', body.description)
	 if(body.image){data.append('image', body.image)} 
	data.append('genre', body.genre)
	data.append('author', body.author)
	data.append('status', body.status)

	return Axios.put(`${URL_STRING}/update/${body.id}`, data, {
		headers: {
			  'Authorization' : `${API_TOKEN}`,
			  'content-type': ' multipart/form-data'
		}
	})
}


export const deleteBooks = (id) => {
	
	return Axios.delete(`${URL_STRING}delete/${id}`,{
		headers: {
			  'Authorization' : `${API_TOKEN}`,
			  'content-type': ' multipart/form-data'
		}
	})
}

export const postBooks = (body) => {
	const data = new FormData()
	
	data.append('id', body.id)
	data.append('title', body.title)
	data.append('description', body.description)
	data.append('image', body.image)
	data.append('genre', body.genre)
	data.append('author', body.author)
	data.append('status', body.status)

	return Axios.post(`${URL_STRING}`, data, {
		headers: {
			  'Authorization' : `${API_TOKEN}`,
			  'content-type': ' multipart/form-data'
		}
	})

}


export const refresh = (body) => {
	console.log(body.refreshToken)
	const data = new URLSearchParams()
	data.append('api_token', body.refreshToken)
    return Axios.post(`${URL_API}/auth/token`,data, {
		headers: {
			'content-type': 'application/x-www-form-urlencoded'
		}
	})
}

export const allToken = (token) => {
	return Axios.get(`${URL_API}/auth/login`, {
		headers: {
			'Authorization': token,
			'content-type': 'application/x-www-form-urlencoded'
		}
	})
}

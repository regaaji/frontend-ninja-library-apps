import {
    getAuthAction,
    getAuthRegister
} from "./actionTypes";
import {
  postLogin,
  postRegister
} from "../../utils/http";


export const requestLogin = (data, props) => {
    return {
        type: getAuthAction,
        payload: postLogin(data)
          .then(res => {
              console.log(res);
                if (res.status === 200) {
                    alert('You have successfully logged in')
                    try {

                        localStorage.setItem('username', res.data.result.username)
                        localStorage.setItem('token', res.data.result.token)
                        localStorage.setItem('role', res.data.result.role)
                        localStorage.setItem('id_user', res.data.result.id)
                        localStorage.setItem('refreshToken', res.data.result.refreshToken)
                        
                        props.history.push('/home')

                    } catch (err) {
                        console.log("Something's wrong")
                    }
                }
            }).catch(err => {
                alert("Your username/ password is wrong")
            })
    }
}

export const requestRegister = (data, props) => {
    return {
        type: getAuthRegister,
        payload: postRegister(data)
          .then(result => {
             console.log(result);
            if (result.status === 200) {
                alert("Register Success")
                try {
                    props.history.push('/login')
                } catch (error) {
                    console.log('a shit just happened')
                }
            }
        }).catch(error => {
            console.log(error)
        })

    }
}

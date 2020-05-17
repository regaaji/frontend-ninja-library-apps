import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import {refresh} from '../../utils/http';


class RefreshToken extends Component{

    state = {
        load: false,
        refreshToken : localStorage.getItem('refreshToken'),
        token : localStorage.getItem('token')
    }

    handleClick = async () => {
        this.setState({
            load:true
        })

        const {refreshToken} = this.state;

        console.log({refreshToken})

         
          
          
        await refresh({refreshToken})
        .then((response)=>{
            console.log(response)
            localStorage.removeItem('token')
            localStorage.setItem('token', response.data.result.token)
             window.location.href=process.env.REACT_APP_URL_REDIRECT
        })
        .catch((error) => {
            console.log(error.response)
        //     if (error.response.data.result == "Forbidden") {
        //         localStorage.removeItem('token')
        //         const token = localStorage.getItem('token');
        // const role = localStorage.getItem('role');
        // const username = localStorage.getItem('username');
        //  localStorage.removeItem('token');
        //     localStorage.removeItem('role');
        //     localStorage.removeItem('username')
        //     this.props.history.push('/login')
        //     }
        })


    }



    render(){
        const {load} = this.state
        return (
            <>
                <div className="container mt-5 pt-2">
                    <div className="row mt-3 justify-content-center">
                        <div className="col-lg-4 mt-5">
                           
                            <div className="card shadow">
                                <div className="card-header bg-warning text-white"> <i className="fas fa-exclamation-circle mr-2"></i>Refresh Token</div>
                                <div className="card-body text-center">
                                 <span className="text-secondary">Your token has expired, you should try to press the refresh button</span><br/>
                                    <Link className="btn btn-danger text-white mt-3" onClick={this.handleClick}>
                                <i className={load ? "fas fa-sync-alt mr-1 fa-spin":"fas fa-sync-alt mr-1"}></i> Refresh
                            </Link>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
                
            </>
        )
    }
}

export default RefreshToken
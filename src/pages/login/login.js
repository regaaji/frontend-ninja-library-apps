import React, { Component } from "react";
import "./Login.css";
// import {postLogin} from '../../utils/http';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestLogin } from '../../redux/action/auth';


const mapStateToProps = (auth) => {
  return {
    auth
  }
}


const validUsernameRegex = RegExp(/([a-z])\w+/g);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class Login extends Component {
     constructor(props) {
        super(props);

        this.state = {
            username: null,
            password: null,
            errors: {
                username: '',
                password: '',
            }
        };
    console.log("Login", this.props)
    }


    componentDidMount() {
        if (localStorage.getItem('token')) {
            this.props.history.push('/')
        } 
    }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
     
     case 'username': 
        errors.username = 
          validUsernameRegex.test(value)
            ? ''
            : 'Username must be lowercase!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

   
 

   onSubmit = async (e) => {

        e.preventDefault();
            const {username, password} = this.state
            
            if(username == null){
            
             alert('The username must not be blank')
            
             } else if(password == null){
            
                alert('The password must not be blank')
            
            } else {

                
                if(validateForm(this.state.errors)) {

                   const data = {
                        username,
                        password,
                    }

                   this.props.dispatch(requestLogin(data, this.props))

                }else{

                  alert('You failed to login')
                
                }
            
            }
       
                    
    }
    render() {
        const {errors} = this.state;
        return (
            <div className="grid-container-index">
                {/* <!-- left-section --> */}
                <section className="left-section">
                    <img src={require("../../images/cover.png")} alt="" />
                    <div className="header-cover">
                        <p>Book is a window </p>
                        <p>to the world </p>
                    </div>
                    <div className="footer-cover">
                        <p>Photo by Mark Pan4ratte on Unsplash</p>
                    </div>
                    <div className="overlay-bg"></div>
                </section>
                {/* <!-- end of left-section -->
        <!-- right-section --> */}
                <section className="right-section">
                    <div className="top-logo">
                        <img src={require("../../images/bookshelf.png")} alt="logo-cover" srcset="" />
                    </div>
                    <div className="form-header">
                        <header>Login</header>
                        <p>Welcome Back, Please Login to your account</p>
                    </div>
                    <div className="login-form">
                        <div className="login-form-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="input-wrapper login">
                                    <div className="input-items">
                                        <label for="">Username</label>
                                        <br />
                                        <input  onChange={this.handleChange}
                                        type="text" name="username" id="" placeholder="Your username" />
                                        {errors.username.length > 0 && 
                                         <small id="emailHelp" class="form-text text-danger">{errors.username}</small>}
                                    </div>
                                    <div className="input-items password">
                                        <label for="">Password</label>
                                        <br />
                                        <input  onChange={this.handleChange}
                                        type="password" name="password" id="" placeholder="Your password" />
                                        {errors.password.length > 0 && 
                                         <small id="emailHelp" class="form-text text-danger">{errors.password}</small>}
                                    </div>
                                </div>

                                <div className="forgot-password">
                                    <ul>
                                        <li>
                                            <input type="checkbox" />
                                            <label>Remember Me
                                    </label>
                                        </li>
                                        <li>
                                            <Link>Forgot Password</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="form-btn">
                                    <ul>
                                        <li>
                                            <button
                                                type="submit"> {/* WAJIB GINI ada event yg di passing*/}
                                            Sign In
                                            </button>
                                        </li>
                                        <li><a href="/register"><button type="button">Sign Up</button></a></li>
                                        {/* <!-- <li><a href="http://">Sign Up</a></li> --> */}
                                    </ul>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="footer login-footer">
                        <footer>
                            <p>By signing up, you agree to Book’s</p>
                            <p><span>Terms and Conditions</span> & <span>Privacy Policy</span></p>
                        </footer>
                    </div>

                </section>
                {/* <!-- end of right-section --> */}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Login)
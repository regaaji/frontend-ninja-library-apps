import React, { Component } from "react";
// import {postRegister} from '../../utils/http';
import "./Register.css";

import { connect } from 'react-redux';
import { requestRegister } from '../../redux/action/auth';


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

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            username: null,
            password: null,
            role: 1,
            errors: {
                name: '',
                username: '',
                password: '',
                role: ''
            }
        };
    }

    

     handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
       let errors = this.state.errors;

        switch (name) {
          case 'name': 
            errors.name = 
              value.length < 4
                ? 'Username must be 4 characters long!'
                : '';
            break;
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
            case 'role': 
            errors.role = 
              value.length < 1
                ? 'role must be 1 characters long!'
                : '';
            break;
          default:
            break;
        }



        this.setState({errors, [name]: value});
        // this.setState({[name]: value});
      }

   onSubmit = async (e) => {
        e.preventDefault()
        const {name, username, password, role} = this.state
        console.log(role)
        console.log(name)
            
            if(name == null){
            
             alert('The name must not be blank')
            
             } else if(username == null){
            
                alert('The username must not be blank')
            
            } else if(password == null) {
                
                alert('The password must not be blank')
            
            } else {
                // console.log(this.state.errors)
                if(validateForm(this.state.errors)) {


                   const data = {
                        name,
                        username,
                        password,
                        role
                    }

                   this.props.dispatch(requestRegister(data, this.props))



                }else{

                  alert('You failed to Register')
                
                }

            }
                    
    }
    render() {
         const {errors} = this.state;
        return (
            <div className="grid-container-index">
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
                <section className="right-section">
                    <div className="top-logo">
                        <img src={require("../../images/bookshelf.png")} alt="logo-cover" srcset="" />
                    </div>
                    <div className="form-header header-register">
                        <header>Register</header>
                        <p>Welcome Back, Please Register to create account</p>
                    </div>
                    <div className="login-form">
                        <div className="login-form-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="input-wrapper register-form-input">
                                    <div className="input-items">
                                        <label for="">Name</label>
                                        <br />
                                        <input  onChange={this.handleChange} type="text" name="name" id="" placeholder="Input name" autocomplete="off" />
                                        {errors.name.length > 0 && 
                                         <small id="emailHelp" class="form-text text-danger">{errors.name}</small>}
                                    </div>
                                    <div className="input-items">
                                        <label for="">Username</label>
                                        <br />
                                        <input  onChange={this.handleChange} type="text" name="username" id="" placeholder="Input username" autocomplete="off"/>
                                        {errors.username.length > 0 && 
                                         <small id="emailHelp" class="form-text text-danger">{errors.username}</small>}
                                    </div>
                                    <div className="input-items">
                                        <label for="">Password</label>
                                        <br />
                                        <input  onChange={this.handleChange} type="password" name="password" id="" placeholder="Input password" />
                                        {errors.password.length > 0 && 
                                         <small id="emailHelp" class="form-text text-danger">{errors.password}</small>}
                                    </div>
                                    
                                        <input  onChange={this.handleChange} type="hidden" value="1" name="role" id="" placeholder="Input role" />
                                    
                                </div>
                                <div className="form-btn">
                                    <ul>
                                        <li>
                                            <button
                                                type="submit">
                                                Sign Up
                                            </button>
                                        </li>
                                        <li>
                                            <a href="/login"><button type="button">Sign In</button></a>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="footer">
                        <footer>
                            <p>By signing up, you agree to Book’s</p>
                            <p>
                                <span>Terms and Conditions</span> & <span>Privacy Policy</span>
                            </p>
                        </footer>
                    </div>
                </section>
                {/* <!-- end of right-section --> */}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Register)
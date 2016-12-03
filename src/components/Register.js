import React, { Component } from 'react';
import { register } from '../modules/user'

class Register extends Component {
      constructor() {
        super();
        //this.state = { username: '', password: '', confirm: '', submitDisabled: false };
        //this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
    }

    // onChangeHandler(event) {
    //     switch (event.target.name) {
    //         case 'username':
    //             this.setState({ username: event.target.value });
    //             break;
    //         case 'password':
    //             this.setState({ password: event.target.value });
    //             break;
    //         case 'confirmPassword':
    //             this.setState({ confirmPassword: event.target.value });
    //             break;
    //         case 'email':
    //             this.setState({ email: event.target.value });
    //             break;    
    //         default:
    //             break;
    //     }
    // }

    onSubmitHandler(event) {
        event.preventDefault();
        console.log(this.username.value)
        if (this.state.password !== this.state.confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        this.setState({ submitDisabled: true });
        register(this.state.username, this.state.password, this.state.email, this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        if (response === true) {
            // Navigate away from register page
            this.context.router.push('/');
        } else {
            // Something went wrong, let the user try again
            this.setState({ submitDisabled: true });
        }
    }

    render() {
        return (
            <div className="container">
            	     <div className="box">        
                    	<hr/>
                    	<h2 className="intro-text text-center">
                        	<strong>Register form</strong>
                    	</h2>
                    	<hr/>
                    	<form className="form" onSubmit={this.onSubmitHandler} role="form"> 

                        <div className="row">
                            <div className="form-group col-xs-offset-4 col-xs-4">
                               <label>Username</label>
                               <input className="form-control"
                                  type="text"
                                  name="username"
                                  ref={(input) => {this.username = input}}
                                  disabled={this.props.submitDisabled}/>
                            </div>
                        </div>

                         <div className="row">
                            <div className="form-group col-xs-offset-4 col-xs-4">
                               <label>Password</label>
                                <input className="form-control"
                                  type="password"
                                  name="password"
                                  ref={(input) => {this.password = input}}
                                  disabled={this.props.submitDisabled}/>
                            </div>
                          </div>

                         <div className="row">  
                           	<div className="form-group col-xs-offset-4 col-xs-4">
                               <label>Confirm Password</label>
                                <input className="form-control"
                                  type="password"
                                  name="confirmPassword"
                                  ref={(input) => {this.confirmPassword = input}}
                                  disabled={this.props.submitDisabled}/>
                            </div>
                          </div>

                          <div className="row">
                            <div className="form-group col-xs-offset-4 col-xs-4">
                               <label>Email Address</label>
                               <input className="form-control"
                                  type="email"
                                  name="email"
                                  ref={(input) => {this.email = input}}
                                  disabled={this.props.submitDisabled}/>
                            </div>
                         </div>
                         
                         <div className="row">
                            <div className="form-group col-lg-12">
                               <input type="hidden" name="save" value="contact"/>
                               <button type="submit" className="btn btn-default" disabled={this.props.submitDisabled}>Submit</button>
                            </div>
                        	</div>
                    	</form>
                	</div>
          </div>
        );
    }
}

Register.contextTypes = {
    router: React.PropTypes.object
};

export default Register
import React, { Component } from 'react';
import { register } from '../modules/user'

class Register extends Component {
      constructor() {
        super();
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        // if (this.state.password !== this.state.confirmPassword) {
        //     alert("Passwords don't match");
        //     return;
        // }
        //this.setState({ submitDisabled: true });
        register(this.username.value, this.password.value, this.email.value, this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        if (response === true) {
            this.context.router.push('/');
        } else {
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
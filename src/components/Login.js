import React, {Component} from 'react';
import { login } from '../modules/user';
import { alert } from './common/Alert'

class Login extends Component {
   constructor() {
        super();
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        login(this.username.value, this.password.value, this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        if (response === true) {
            alert('success', 'You logged in successful.')
            this.context.router.push('/');
        } else {
          alert('error', 'An error occured. Please try again.')
            this.setState({ submitDisabled: true });
        }
    }
    render() {
        return (
            <div className="container">
                   <div className="box">
                      <hr/>
                      <h2 className="intro-text text-center">
                          <strong>Login form</strong>
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
                            <div className="form-group col-lg-12">
                               <input type="hidden" name="save" value="contact"/>
                               <button type="submit" className="btn btn-default">Submit</button>
                            </div>
                          </div>
                      </form>
                  </div>
          </div>
        );
    }
}

Login.contextTypes = {
    router: React.PropTypes.object
};

export default Login
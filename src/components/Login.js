import React, {Component} from 'react';
import LoginForm from './LoginForm';

class Login extends Component {
    render() {
        return (
            <div>
                <span>Login Page</span>
                <LoginForm />
            </div>
        );
    }
}

export default Login
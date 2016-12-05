import React, { Component } from 'react';
import { logout } from '../models/user';
import { alert } from '../models/alerts'

class Logout extends Component {
    constructor() {
        super();
        this.logout();
    }

    logout() {
        logout(this.onSubmitResponse.bind(this));
    }

    onSubmitResponse(response) {
        if (response === true) {
            alert('success', 'You logged out successfully.')
            this.context.router.push('/');
        } else {
            alert('error', 'An error occured. Please try again.')
        }
    }

    render() {
        return (
            <div></div>
        );
    }
}

Logout.contextTypes = {
    router: React.PropTypes.object
};

export default Logout
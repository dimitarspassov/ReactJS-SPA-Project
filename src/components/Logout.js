import React, { Component } from 'react';
import { logout } from '../modules/user';

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
            this.context.router.push('/');
        } else {
            // Something went wrong, let the user know
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
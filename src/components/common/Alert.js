import React, {Component} from 'react';
import $ from 'jquery';
import observer from '../../modules/observer';

class Alert extends Component {
    constructor() {
        super();
        this.state ={
            message: '',
            type: '',
            visible: false
        };
        this.ajaxStart = this.ajaxStart.bind(this);
        this.hide = this.hide.bind(this);
        this.handleAjaxError = this.handleAjaxError.bind(this);

        //observer.showSuccess = this.showSuccess.bind(this);
        //observer.showError = this.showError.bind(this);
    }

    componentDidMount() {
        $(document).on({
            ajaxStart: this.ajaxStart,
            ajaxStop: this.hide
        });

        $(document).ajaxError(this.handleAjaxError);
    }

    ajaxStart() {
        this.setState({ message: 'Loading...', type: 'info', visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }

    handleAjaxError(event, response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        this.showError(errorMsg);
    }

    showSuccess(message) {
        this.setState({ message: message, type: 'success', visible: true });
        setTimeout(this.hide, 3000);
    }

    showError(errorMsg) {
        this.setState({ message: errorMsg, type: 'error', visible: true });
    }

    render() {
        if (!this.state.visible) return null;

        let className = 'alert';
        switch (this.state.type) {
            case 'info':
                className += ' alert-info';
                break;
            case 'error':
                className += ' alert-danger';
                break;
            case 'success':
                className += ' alert-success';
                break;
            default:
                break;
        }

        return (
            <div className={className} role="alert" onClick={this.hide}>
                <strong>{this.state.message}</strong>
            </div>
        )
    }
}

export default Alert 
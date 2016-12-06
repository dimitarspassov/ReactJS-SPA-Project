import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import Modal from 'react-modal';
import {loadSingleEvent, attend, leave, isAttending, deleteCurrentEvent} from '../models/events';
import {alert} from '../models/alerts'

class SingleEventPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventId: this.props.params.id,
            eventData: {},
            modalIsOpen: false
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.attendBtn = this.attendBtn.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
    }

    onLoadSuccess(response) {
        this.setState({eventData: response})
    }

    componentDidMount() {
        loadSingleEvent(this.onLoadSuccess, this.state.eventId);

        let btn = $("#attendBtn");

        if (isAttending(this.state.eventId)) {
            btn.removeClass("btn btn-outline-success btn-lg");
            btn.addClass("btn btn-success btn-lg");
            btn.text("I'm comming!");
        }
    }

    attendBtn() {
        let btn = $("#attendBtn");

        if (!sessionStorage.getItem("username")) {
            return this.context.router.push('/login');
        }

        if (btn.hasClass("btn btn-outline-success btn-lg")) {
            btn.removeClass("btn btn-outline-success btn-lg");
            btn.addClass("btn btn-success btn-lg");
            btn.text("I'm comming!");
            attend(this.state.eventId)
        } else {
            btn.removeClass("btn btn-success btn-lg");
            btn.addClass("btn btn-outline-success btn-lg");
            btn.text("I wanna come!");
            leave(this.state.eventId)
        }
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    executeDelete(id) {
        deleteCurrentEvent(id, this.onSubmitResponse);
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    onSubmitResponse(response) {
        if (response === true) {
            alert('success', 'You successfully deleted your event.')
            this.context.router.push('/');
        } else {
            alert('error', 'An error occured. Please try again.')
            this.setState({submitDisabled: true});
        }
    }

    editAvailable() {

        if (sessionStorage.getItem('username') === this.state.eventData.author) {
            return (
                <div>
                    <Link className="btn btn-default btn-lg" to={"/edit/" + this.state.eventId}>Edit</Link>
                    <div>
                        <button className="btn btn-default btn-lg" onClick={this.openModal.bind(this)}>Delete</button>

                        <Modal className="modal-dialog"
                               isOpen={this.state.modalIsOpen}
                               onRequestClose={this.closeModal}
                               contentLabel="Modal"
                        >
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" onClick={this.closeModal.bind(this)}
                                            className="close">&times;</button>
                                    <h4 className="modal-title">Confirm delete</h4>
                                </div>
                                <div className="modal-body">
                                    <p>Are you sure you want to delete the following event:</p>
                                    <p>{this.state.eventData.title}</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default"
                                            onClick={this.closeModal.bind(this)}>Back
                                    </button>
                                    <button type="button" className="btn btn-primary"
                                            onClick={() => this.executeDelete(this.state.eventId)}>Yes, Delete
                                    </button>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>

            );
        }
    }

    render() {
        if (this.state.eventData.author === sessionStorage.getItem("username")) {
            $("#attendBtn").css("display", "none")
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="box">
                        <div className="col-lg-12">
                            <hr></hr>
                            <h2 className="intro-text text-center">
                                <strong>{this.state.eventData.title}</strong>
                            </h2>
                            <h2 className="intro-text text-center">
                                <small>Publisher: {this.state.eventData.author}</small>
                            </h2>
                            <hr></hr>
                            <div className="form-group col-lg-12">
                                <button id="attendBtn" type="button" className="btn btn-outline-success btn-lg"
                                        onClick={this.attendBtn}>I wanna come!
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center">
                            <img className="img-responsive img-border img-full" src={this.state.eventData.image}
                                 alt=""></img>
                            <h2>
                                <small>{this.state.eventData.date}, {this.state.eventData.location}</small>
                            </h2>
                            <p>{this.state.eventData.description}</p>
                            {this.editAvailable()}
                            <hr></hr>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SingleEventPage.contextTypes = {
    router: React.PropTypes.object
};

export default SingleEventPage;
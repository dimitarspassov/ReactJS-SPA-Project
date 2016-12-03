import React from 'react';
import {create} from '../modules/events';
import $ from 'jquery';


class CreateEvent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {title: '', description: '',date: '', location: '', image: ''};
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
    }

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();

        //ToDO FileUpload
        let image = $("#imageUrl").val()
        //  this.setState();
        create($("#title").val(), $("#description").val(), $("#date").val(), $("#location").val(), image, this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        if (response === true) {
           // this.context.router.push('/events');
        } else {
            // ToDo: Something went wrong, let the user try again
        }
    }

    render() {
        return (<div>
                <div className="container">
                    <div className="box">
                        <hr/>
                        <h2 className="intro-text text-center">
                            <strong>Create Event</strong>
                        </h2>
                        <hr/>
                            <form className="form">
                                    <div className="row">
                                        <div className="form-group col-xs-offset-4 col-xs-4">
                                        <label>Title</label>
                                            <input id="title" className="form-control" required type="text"/>
                                        </div>
                                    </div>

                                    <div className="row">
                                    <div className="form-group col-xs-offset-4 col-xs-4">
                                        <label>Description</label>
                                            <textarea className="form-control" id="description" ></textarea>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-xs-offset-4 col-xs-4">
                                            <label>Date</label>
                                            <input id="date" type="date" required className="form-control" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-xs-offset-4 col-xs-4">
                                            <label>Location</label>
                                            <input id="location" type="text" required className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-xs-offset-4 col-xs-4">
                                            <label>Image Url</label>
                                            <input id="imageUrl" type="text" required className="form-control" />
                                        </div>
                                    </div>

                                <div className="form-group col-lg-12">
                                    <button type="submit" onClick={this.onSubmitHandler} className="btn btn-default">Submit</button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEvent;
import React from 'react';
import {create} from '../modules/events';
import {Link} from 'react-router';
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
        let image = $("#imageUrl").val() //|| $("#imageFile");
        //  this.setState();
        create($("#title").val(), $("#description").val(), $("#date").val(), $("#location").val(), image, this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        if (response === true) {
            // ToDo: Navigate away from login page
           // this.context.router.push('/');
        } else {
            // ToDo: Something went wrong, let the user try again
        }
    }

    render() {
        return (<div>
                <div className="container">
                    <div className="brand">Create Event</div>
                        <div className="box">
                            <form className="form-horizontal">
                                <fieldset>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="textinput">Title</label>
                                        <div className="col-md-4">
                                            <input id="title" name="textinput" type="text" placeholder="Enter event title" className="form-control input-md"/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="textarea">Description</label>
                                        <div className="col-md-4">
                                            <textarea className="form-control" id="description" name="textarea" placeholder="Enter event description"></textarea>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="textinput">Date</label>
                                        <div className="col-md-4">
                                            <input id="date" name="textinput" type="date" required className="form-control input-md" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="textinput">Location</label>
                                        <div className="col-md-4">
                                            <input id="location" name="textinput" type="text" placeholder="Enter event location" className="form-control input-md"/>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="textinput">Image Url</label>
                                        <div className="col-md-4">
                                            <input id="imageUrl" name="textinput" type="text" placeholder="Enter Image Url" className="form-control input-md" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="filebutton">Upload Image</label>
                                        <div className="col-md-4">
                                            <input id="imageFile" name="filebutton" className="input-file" type="file"/>
                                        </div>
                                    </div>
                                   <div className="buttonHolder"> <input className="btn btn-default btn-lg" type="submit" onClick={this.onSubmitHandler} value="Create"/></div>
                                </fieldset>
                            </form>
                        </div>
                </div>
            </div>
        );
    }
}

export default CreateEvent;
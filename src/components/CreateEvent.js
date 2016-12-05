import React from 'react';
import {create} from '../modules/events';
import { alert } from '../modules/alerts'

class CreateEvent extends React.Component {

    constructor(props) {
        super(props);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        create(this.title.value, this.description.value, this.date.value, this.location.value, this.image.value, this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        if (response === true) {
             alert('success', 'You successfully created a new event.')
            this.context.router.push('/myEvents');
        } else {
             alert('error', 'An error occured. Please try again.')
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
                            <form className="form" onSubmit={this.onSubmitHandler}>
                                    <div className="row">
                                        <div className="form-group col-xs-offset-4 col-xs-4">
                                        <label>Title</label>
                                             <input className="form-control" required
                                                type="text"
                                                name="title"
                                                ref={(input) => {this.title = input}}
                                                disabled={this.props.submitDisabled}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                    <div className="form-group col-xs-offset-4 col-xs-4">
                                        <label>Description</label>
                                            <textarea className="form-control" 
                                                name="description"
                                                ref={(input) => {this.description = input}}
                                                disabled={this.props.submitDisabled}
                                                >
                                            </textarea>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-xs-offset-4 col-xs-4">
                                            <label>Date</label>
                                             <input className="form-control" required
                                                type="date"
                                                name="date"
                                                ref={(input) => {this.date = input}}
                                                disabled={this.props.submitDisabled}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-xs-offset-4 col-xs-4">
                                            <label>Location</label>
                                                <input className="form-control" required
                                                    type="text"
                                                    name="location"
                                                    ref={(input) => {this.location = input}}
                                                    disabled={this.props.submitDisabled}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-xs-offset-4 col-xs-4">
                                            <label>Image Url</label>
                                             <input className="form-control" required
                                                    type="text"
                                                    name="image"
                                                    ref={(input) => {this.image = input}}
                                                    disabled={this.props.submitDisabled}/>
                                        </div>
                                    </div>

                                <div className="form-group col-lg-12">
                                    <button type="submit" className="btn btn-default">Submit</button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        );
    }
}

CreateEvent.contextTypes = {
    router: React.PropTypes.object
};
export default CreateEvent;
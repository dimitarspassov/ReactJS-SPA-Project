import React from 'react';
import {create} from '../models/events';
import { alert } from '../models/alerts';
import RichTextEditor from 'react-rte';

class CreateEvent extends React.Component {
    constructor() {
        super();
        this.state = {
            value: RichTextEditor.createEmptyValue()
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        create(this.title.value, this.state.value.toString('html'), this.date.value, this.location.value, this.image.value, this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        if (response === true) {
             alert('success', 'You successfully created a new event.')
            this.context.router.push('/myEvents');
        } else {
             alert('error', 'An error occured. Please try again.')
        }
    }

    onChange (value) {
        this.setState({value});
        if (this.props.onChange) {
          this.props.onChange(
            value.toString('html')
          );
        }
      };

    render() {
        if (!sessionStorage.getItem("username")) {
            return this.context.router.push('/login');
        }
        
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
                                        <div className="form-group col-xs-offset-3 col-xs-6">
                                        <label>Title</label>
                                             <input className="form-control" required
                                                type="text"
                                                name="title"
                                                ref={(input) => {this.title = input}}
                                                disabled={this.props.submitDisabled}/>
                                        </div>
                                    </div>

                                    <div className="row editor">
                                    <div className="form-group col-xs-offset-3 col-xs-6">
                                        <label>Description</label>
                                        <RichTextEditor
                                            value={this.state.value}
                                            onChange={this.onChange}
                                          />
                                    </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-xs-offset-3 col-xs-6">
                                            <label>Date</label>
                                             <input className="form-control" required
                                                type="date"
                                                name="date"
                                                ref={(input) => {this.date = input}}
                                                disabled={this.props.submitDisabled}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-xs-offset-3 col-xs-6">
                                            <label>Location</label>
                                                <input className="form-control" required
                                                    type="text"
                                                    name="location"
                                                    ref={(input) => {this.location = input}}
                                                    disabled={this.props.submitDisabled}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-xs-offset-3 col-xs-6">
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
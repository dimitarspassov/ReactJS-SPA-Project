import React, {Component} from 'react';
import RichTextEditor  from 'react-rte';
import {loadSingleEvent, editEvent} from '../models/events';
import { alert } from '../models/alerts';

export default class EditPage extends Component {
    constructor() {
        super();
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        //this.onChange = this.onChange.bind(this);

        this.state = {
            author: '',
            title: '',
            //value: RichTextEditor.createValueFromString('', 'html'),
            date: '',
            location: '',
            image: '',
            submitDisabled: true
        };
    }

    componentDidMount() {
        loadSingleEvent(this.onLoadSuccess, this.props.params.id);
    }

    onLoadSuccess(response) {
        this.setState({
            author: response.author,
            title: response.title,
            //value: RichTextEditor.createValueFromString(response.description, 'html'),
            date: response.date,
            location: response.location,
            image: response.image,
            submitDisabled: false
        });
    }

    onChangeHandler(event) {
        console.log(event.target.value);
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }
     // onChange (value) {
     //    this.setState({value});
     //    if (this.props.onChange) {
     //      this.props.onChange(
     //        value.toString('html')
     //      );
     //    }
     //  };
    onSubmitHandler(event) {
        event.preventDefault();
        this.setState({submitDisabled: true});
        editEvent(
            this.props.params.id,
            this.state.author,
            this.state.title,
            //this.state.value.toString('html'),
            this.state.date,
            this.state.location,
            this.state.image,
            this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        if (response === true) {
            alert('success', 'You successfully edited your event.')
            this.context.router.push('/');
        } else {
             alert('error', 'An error occured. Please try again.')
            this.setState({submitDisabled: true});
        }
    }

    render() {
        if (!sessionStorage.getItem("username")) {
            return this.context.router.push('/login');
        }

        return (
                <div className="container">
                   <div className="box">
                      <hr/>
                      <h2 className="intro-text text-center">
                          <strong>Edit Event</strong>
                      </h2>
                      <hr/>
                <form role="form" onSubmit={this.props.onSubmitHandler}>
                    <div className="row">
                          <div className="form-group col-xs-offset-3 col-xs-6">
                            <label>Title</label>
                            <input type="text" className="form-control"
                                   name="title"
                                   value={this.state.title}
                                
                                   onChange={this.state.onChangeHandler}/>
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-xs-offset-3 col-xs-6">
                            <label>Description</label>
                          
                         </div>
                        </div>
                         <div className="row">
                          <div className="form-group col-xs-offset-3 col-xs-6">
                            <label>Date</label>
                            <input type="date" className="form-control"
                                   name="date"
                                   value={this.state.date}
                                   disabled={this.state.submitDisabled}
                                   onChange={this.state.onChangeHandler}/>
                        </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-xs-offset-3 col-xs-6">
                            <label>Location</label>
                            <input type="text" className="form-control"
                                   name="location"
                                   value={this.state.location}
                                   disabled={this.state.submitDisabled}
                                   onChange={this.state.onChangeHandler}/>
                         </div>
                        </div>
                         <div className="row">
                          <div className="form-group col-xs-offset-3 col-xs-6">
                            <label>Image</label>
                            <input type="text" className="form-control"
                                   name="image"
                                   value={this.state.image}
                                   disabled={this.state.submitDisabled}
                                   onChange={this.state.onChangeHandler}/>
                         </div>
                        </div>
                        
                    <div className="form-group col-lg-12">
                          <button type="submit" className="btn btn-default">Submit</button>
                    </div>
                </form>
            </div>
          </div>
        );
    }
}

EditPage.contextTypes = {
    router: React.PropTypes.object
};
import React from 'react';
import {loadSingleEvent, attend, leave, isAttending} from '../modules/events';
import $ from 'jquery';

import {Link} from 'react-router';

class SingleEventPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventId: this.props.params.id,
            eventData: {}
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response) {
        // Display event
        this.setState({eventData: response})
    }

    componentDidMount() {
        // Request current event from the server
        loadSingleEvent(this.onLoadSuccess, this.state.eventId);

        let btn = $("#attendBtn");
        if(!sessionStorage.getItem("username")){
            btn.css("display", "none")
        }
        if(isAttending(this.props.eventId)){
            btn.removeClass("btn btn-outline-success btn-lg")
            btn.addClass("btn btn-success btn-lg")
            btn.text("I'm comming!")
        }

    }

    attendBtn(){
        let btn = $("#attendBtn")

       // if(!sessionStorage.getItem("username")){
        //    return this.context.router.push('/login');       ????
       // }

        if(btn.hasClass("btn btn-outline-success btn-lg")){
            btn.removeClass("btn btn-outline-success btn-lg")
            btn.addClass("btn btn-success btn-lg")
            btn.text("I'm comming!")
            attend(this.props.eventId)

        }
        else{
            btn.removeClass("btn btn-success btn-lg")
            btn.addClass("btn btn-outline-success btn-lg")
            btn.text("I wanna come!")
            leave(this.props.eventId)
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="box">
                        <div className="col-lg-12">
                            <hr></hr>
                            <h2 className="intro-text text-center">
                                <strong>{this.state.eventData.title}</strong>
                            </h2>
                            <hr></hr>
                            <div className="form-group col-lg-12">
                            <button id="attendBtn" type="button" className="btn btn-outline-success btn-lg" onClick={this.attendBtn}>I wanna come!</button>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center">
                            <img className="img-responsive img-border img-full" src={this.state.eventData.image}></img>
                            <h2>
                                <small>{this.state.eventData.date}</small>
                            </h2>
                            <p>{this.state.eventData.description}</p>
                            <hr></hr>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default SingleEventPage;
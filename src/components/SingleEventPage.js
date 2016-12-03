import React from 'react';
import {loadSingleEvent} from '../modules/events';

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
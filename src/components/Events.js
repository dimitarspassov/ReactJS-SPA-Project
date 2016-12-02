import React from 'react';
//import Team from './Team';
import {loadEvents} from '../modules/events';
import {Link} from 'react-router';

class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response) {
        // Display events
        this.setState({events: response})
    }

    componentDidMount() {
        // Request list of events from the server
        loadEvents(this.onLoadSuccess);
    }

    render() {
        let eventsHtml = "";

        return (<div className="container">
                <div className="box">
                <div className="row">
                    {this.state.events.map((e, i) => {
                        return(<div className="col-md-4 portfolio-item">
                        <a href="#">
                            <img className="img-responsive" src={e.image} alt=""/>
                        </a>
                        <h3>
                            <a href="#">{e.title}</a>
                        </h3>
                        <p>{e.description}</p>
                    </div>
                        )})}
                </div>

                    <div className="row text-center">
                    <div className="col-lg-12">
                        <ul className="pagination">
                            <li>
                                <a href="#">&laquo;</a>
                            </li>
                            <li className="active">
                                <a href="#">1</a>
                            </li>
                            <li>
                                <a href="#">2</a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                            <li>
                                <a href="#">4</a>
                            </li>
                            <li>
                                <a href="#">5</a>
                            </li>
                            <li>
                                <a href="#">&raquo;</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Events;
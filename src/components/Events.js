import React from 'react';
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

        return (<div className="container">
                <div className="box">
                <div className="row">
                    {this.state.events.map((e, i) => {
                        return(<div key={e._id} className="col-md-4 portfolio-item">
                        <a href="#">
                            <img className="img-responsive" src={e.image} alt=""/>
                        </a>
                        <h3>
                            <h2>{e.title}
                            <br/>
                            <small>{e.date}</small>
                            </h2>
                        </h3>
                        <p>{e.description}</p>
                                <a href="#" className="btn btn-default btn-lg">Read More</a>
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
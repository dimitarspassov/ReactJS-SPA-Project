import React from 'react';
import {Link} from 'react-router';
import {loadEvents} from '../modules/events';

Object.defineProperty(Array.prototype, 'chunk_inefficient', {
    value: function (chunkSize) {
        let array = this;
        return [].concat.apply([],
            array.map(function (elem, i) {
                return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
            })
        );
    }
});

class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
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
                    <hr/>
                    <h2 className="intro-text text-center">
                        <strong>Events</strong>
                    </h2>
                    <hr/>
                    {(this.state.events.chunk_inefficient(3)).map(row =>
                        <div className="row">
                            {row.map(event =>
                                <div id={event._id} className="col-md-4 portfolio-item">
                                    <a href="#">
                                        <img className="img-responsive" src={event.image} alt=""/>
                                    </a>
                                    <h2>
                                        <h3>{event.title}
                                            <br/>
                                            <small>{event.date}</small>
                                        </h3>
                                    </h2>
                                    <p>{event.description}</p>
                                    <Link className="btn btn-default btn-lg" to={"/details/" + event._id}>ReadMore</Link>
                                </div>)}
                        </div>
                    )};

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
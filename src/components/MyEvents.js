import React from 'react';
import {Link} from 'react-router';
import {loadEvents, loadAttendingEvents} from '../models/events';

class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            attendingEvents: []
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response) {
        // Display events
        let myEvents = response.filter(x => {return x.author === sessionStorage.getItem('username')})
        loadAttendingEvents();
        let attendingEvents = JSON.parse(sessionStorage.getItem("attendingEvents"))
        let renderAttendingEvents = []
        for(let e of response){
           if(attendingEvents.indexOf(e._id) >= 0){
               renderAttendingEvents.push(e)
           }
        }
        this.setState({events: myEvents, attendingEvents: renderAttendingEvents})
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
                        <strong>Events I'm attending</strong>
                    </h2>
                    <hr/>
                    {(this.state.attendingEvents.chunk_inefficient(3)).map(row =>
                        <div className="row">
                            {row.map(event =>
                                <div id={event._id} className="col-md-4 portfolio-item">
                                    <Link to={"/details/" + event._id}>
                                        <img className="img-responsive" src={event.image} alt=""/>
                                    </Link>
                                    <h2>
                                        <h3>{event.title}
                                            <br/>
                                            <small>{event.date}</small>
                                        </h3>
                                    </h2>
                                    <p>{(event.description).slice(0,75)}</p>
                                    <Link className="btn btn-default btn-lg" to={"/details/" + event._id}>ReadMore</Link>
                                </div>)}
                        </div>
                    )}
                </div>

            <div className="box">
            <hr/>
            <h2 className="intro-text text-center">
            <strong>Events hosted By Me</strong>
        </h2>
        <hr/>
        {(this.state.events.chunk_inefficient(3)).map(row =>
            <div className="row">
                {row.map(event =>
                    <div id={event._id} className="col-md-4 portfolio-item">
                        <Link to={"/details/" + event._id}>
                            <img className="img-responsive" src={event.image} alt=""/>
                        </Link>
                        <h2>
                            <h3>{event.title}
                                <br/>
                                <small>{event.date}</small>
                            </h3>
                        </h2>
                        <p>{(event.description).slice(0,75)}</p>
                        <Link className="btn btn-default btn-lg" to={"/details/" + event._id}>ReadMore</Link>
                    </div>)}
            </div>
        )}
    </div>
    </div>
        )
    }
}

export default Events;
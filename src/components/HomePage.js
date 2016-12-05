import React from 'react';
import {loadEvents} from '../modules/events';
import {Link} from 'react-router';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            lastThreeEvents:[]
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response) {
        // Display events
        this.setState({events: response});
        this.setState({lastThreeEvents:response.reverse().slice(0,3)})
    }

    componentDidMount() {
        // Request list of events from the server
        loadEvents(this.onLoadSuccess);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="box">
                        <div className="col-lg-12">
                            <hr></hr>
                            <h2 className="intro-text text-center">
                                <strong>All events | One place </strong>
                            </h2>
                            <hr></hr>
                            <img className="img-responsive img-border img-left"
                                 src={require("../../public/libs/startbootstrap/img/home-desc-image.jpg")} alt=""/>
                            <hr className="visible-xs"></hr>
                            <p>
                                Have you ever wanted to put your event ad somewhere all your fans can see it?
                                Or maybe you are in the beginning of your glory path and want to invite people to your
                                events?
                                We're here to help!
                            </p>
                            <p><strong>Event Storm </strong> is not only a website for events! What you see is a social
                                network where anyone can share his events!</p>
                            <p>Concerts, small gigs, sport events, seminars and many other...</p>
                            <p className="text-center">
                                <Link to={"/login"}>
                                    <strong>Login</strong>
                                </Link>
                                &nbsp;and get caught in the Event Storm.
                            </p>
                            <p className="text-center">Not registered yet? Do it&nbsp;
                                <Link to={"/register"}>
                                    <strong>here</strong>
                                </Link>
                                !
                            </p>
                        </div>
                    </div>
                </div>

                {this.state.lastThreeEvents.map((event, i) => {
                    return ( <div key={event._id} className="box">
                        <div className="col-lg-12 text-center">
                            <div id="carousel-example-generic">
                                <div className="carousel-inner">
                                    <div className="item active">
                                        <Link to={"/details/" + event._id}>
                                            <img className="img-responsive img-full"
                                                 src={event.image} alt=""/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className="brand-before">
                            <small>{event.date}</small>
                        </h2>
                        <h1 className="brand-name text-center">{event.title}</h1>
                        <hr className="tagline-divider"/>
                        <h2>
                            <small>By:</small>
                            <strong>{event.author}</strong>
                        </h2>
                    </div>)
                })}

            </div>
        );
    }
}

export default HomePage;

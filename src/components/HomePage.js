import React from 'react';
import {loadEvents} from '../models/events';
import {Link} from 'react-router';

var Carousel = require('react-responsive-carousel').Carousel;

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response) {
        this.setState({events: response.reverse().filter(e => new Date(e.date) > Date.now())
            .sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0,5)});
    }

    componentWillMount() {
        loadEvents(this.onLoadSuccess);
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="box carousel-box">
                        <div className="col-lg-12">

                         <Carousel showArrows={true} autoPlay interval={3000} infiniteLoop={true} showThumbs={false}>
                            {this.state.events.map((event, i) => {
                                return (
                                    <div key={i}>
                                            <Link to={"/details/" + event._id}>
                                            <img className="img-responsive carousel" src={event.image} alt=""/>
                                            <p className="legend">{event.title}</p>
                                            </Link>
                                    </div> 
                                    )
                            })}
                            </Carousel>
                            
                        </div>
                    </div>
                </div>

                  <div className="row">
                    <div className="box">
                        <div className="col-lg-12">
                            <hr/>
                            <h2 className="intro-text text-center">
                                <strong>All events | One place </strong>
                            </h2>
                            <hr/>
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
            </div>
        );
    }
}

export default HomePage;

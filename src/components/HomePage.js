import React from 'react';
import {loadEvents} from '../modules/events';
import {Link} from 'react-router';

class HomePage extends React.Component {

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
		let len = this.state.events.length
        return (
            <div className="container">
                    {this.state.events.reverse().splice(0,3).map((event, i) => {
						return( <div key={event._id} className="box">
						<div className="col-lg-12 text-center">
							<div id="carousel-example-generic">
								<div className="carousel-inner">
									<div className="item active">
										<a href="#">
										<img className="img-responsive img-full"
											 src={event.image} alt=""/>
											</a>
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
							<small>By
								<strong>{event.author}</strong>
							</small>
						</h2>
					</div>)})}
                </div>
            
        );
    }
}

export default HomePage;

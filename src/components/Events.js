import React from 'react';
import {Link} from 'react-router';
import {loadEvents} from '../modules/events';
import Pager from 'react-pager';

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

    constructor() {
        super();
        this.state = {
            events: [],
            totalEvents: 3,
            current: 1,
            visiblePage: 3,
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.handlePageChanged = this.handlePageChanged.bind(this);
    }

    onLoadSuccess(response) {
        this.setState({events: response})
    }

    componentWillMount() {
        loadEvents(this.onLoadSuccess);
    }

    handlePageChanged(newPage) {
        this.setState({ current : newPage });
    } 

    render() {
        return (
            <div className="container">
                <div className="box">
                    <hr/>
                    <h2 className="intro-text text-center">
                        <strong>Events</strong>
                    </h2>
                    <hr/>
                    {(this.state.events.chunk_inefficient(3)).map((row, i) =>
                        <div className="row" key={i}>
                            {row.map(event =>
                                <div key={event._id} id={event._id} className="col-md-4 portfolio-item">
                                    <Link to={"/details/" + event._id}>
                                        <img className="img-responsive" src={event.image} alt=""/>
                                    </Link>
                                        <h3>{event.title}
                                            <br/>
                                            <small>{event.date}</small>
                                        </h3>
                                    <p>{(event.description).slice(0,75)}</p>
                                    <Link className="btn btn-default btn-lg"  to={"/details/" + event._id}>ReadMore</Link>
                                </div>)}
                        </div>
                    )}

                <Pager
                    total={this.state.total}
                    current={this.state.current}
                    visiblePages={this.state.visiblePage}
                    titles={{ first: 'First', last: 'Last' }}
                    onPageChanged={this.handlePageChanged}
                />
                </div>
            </div>
        )
    }
}

export default Events;
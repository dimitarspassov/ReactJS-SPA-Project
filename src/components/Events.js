import React from 'react';
import {Link} from 'react-router';
import {loadEvents} from '../models/events';
import Pagination from 'react-js-pagination'

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
            activePage: 1,
            eventRows: [],
            sorted: false
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleSortingChange = this.handleSortingChange.bind(this);
    }

    componentDidMount() {
        loadEvents(this.onLoadSuccess);
    }

    onLoadSuccess(response) {
        if (this.state.sorted) {
            this.setState({
                events: response.filter(e => new Date(e.date) > Date.now()),
                eventRows: response.filter(e => new Date(e.date) > Date.now()).chunk_inefficient(3),
            })
        } else if (this.state.sorted === false) {
            this.setState({
                events: response
                    .filter(e => new Date(e.date) > Date.now())
                    .sort((a, b) => new Date(b._kmd.ect) - new Date(a._kmd.ect)),
                eventRows: response.sort((a, b) => new Date(b._kmd.ect) - new Date(a._kmd.ect)).filter(e => new Date(e.date) > Date.now()).chunk_inefficient(3),
            })
        }
    }

    handlePageChange(pageNumber) {

        this.setState(
            {activePage: pageNumber});
    }

    handleSortingChange(selector) {

        if (selector === "added") {

            this.setState({
                events: this.state.events.sort((a, b) => new Date(b._kmd.ect) - new Date(a._kmd.ect)),
                eventsRows: this.state.events.sort((a, b) => new Date(b._kmd.ect) - new Date(a._kmd.ect)).chunk_inefficient(3),
                activePage: 1,
                sorted: true
            });

            this.onLoadSuccess(this.state.events)
        } else if (selector === "edited") {

            this.setState({
                events: this.state.events.sort((a, b) => new Date(b._kmd.lmt) - new Date(a._kmd.lmt)),
                eventsRows: this.state.events.sort((a, b) => new Date(b._kmd.lmt) - new Date(a._kmd.lmt)).chunk_inefficient(3),
                activePage: 1,
                sorted: true
            });

            this.onLoadSuccess(this.state.events)
        } else if (selector === "soonest") {

            this.setState({
                events: this.state.events.sort((a, b) => new Date(a.date) - new Date(b.date)),
                eventsRows: this.state.events.sort((a, b) => new Date(a.date) - new Date(b.date)).chunk_inefficient(3),
                activePage: 1,
                sorted: true
            });

            this.onLoadSuccess(this.state.events);
        }
    }


    renderEvents(eventsToRender) {

        if (eventsToRender !== undefined) {
            return eventsToRender.map(event =>
                <div key={event._id} id={event._id} className="col-md-4 portfolio-item">
                    <Link to={"/details/" + event._id}>
                        <img className="img-responsive img-thumbnail" src={event.image} alt=""/>
                    </Link>
                    <h3>{event.title}
                        <br/>
                        <small>{event.date}</small>
                    </h3>
                    <p>{(event.description).slice(0, 75)}</p>
                    <Link className="btn btn-default btn-lg"
                          to={"/details/" + event._id}>ReadMore</Link>
                </div>)
        }

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

                    <div className="row">
                        <h2 className="intro-text text-center">Sort by:</h2>
                        <div className="intro-text text-center">
                            <button className="btn btn-default" onClick={() => this.handleSortingChange('added')}>Date
                                added
                            </button>
                            <button className="btn btn-default" onClick={() => this.handleSortingChange('edited')}>Last
                                edited
                            </button>
                            <button className="btn btn-default" onClick={() => this.handleSortingChange('soonest')}>
                                Soonest first
                            </button>
                        </div>
                        <br></br>
                    </div>

                    <div className="row">
                        {this.state.eventRows[Number(this.state.activePage) - 1] !== undefined ?

                            this.renderEvents(this.state.eventRows[Number(this.state.activePage) - 1])

                            :
                            console.log()
                        }
                    </div>
                    <div className="text-center">
                        <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={3}
                            totalItemsCount={this.state.events.length}
                            pageRangeDisplayed={5}
                            onChange={this.handlePageChange}
                        />
                    </div>

                </div>
            </div>
        )
    }
}

export default Events;
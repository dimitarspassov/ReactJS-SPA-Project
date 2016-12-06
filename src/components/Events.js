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
            eventRows: []
        };
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        loadEvents(this.onLoadSuccess);
    }

    onLoadSuccess(response) {
        this.setState({
            events: response,
            eventRows: response.chunk_inefficient(3),
        })
    }

    handlePageChange(pageNumber) {

        this.setState(
            {activePage: pageNumber,});
    }

    renderEvents(eventsToRender){

        return eventsToRender.map(event =>
            <div key={event._id} id={event._id} className="col-md-4 portfolio-item">
                <Link to={"/details/" + event._id}>
                    <img className="img-responsive" src={event.image} alt=""/>
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
                    {this.state.eventRows[Number(this.state.activePage)-1]!==undefined ?

                            this.renderEvents(this.state.eventRows[Number(this.state.activePage)-1])

                        :
                        console.log()
                    }

                    <Pagination className="center-block"
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
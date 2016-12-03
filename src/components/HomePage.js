import React from 'react';

class HomePage extends React.Component {
    render() {
        let latestThreeEvents = this.props.events.splice(0,3)
            .map(event =>
                <div className="box">
                    <div className="col-lg-12 text-center">
                        <div id="carousel-example-generic">
                            <div className="carousel-inner">
                                <div className="item active">
                                    <img className="img-responsive img-full"
                                         src={event.image} alt=""/>
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
                </div>
            );
        return (
            <div className="container">
                <div className="row">
                    {latestThreeEvents}
                </div>
            </div>
        );
    }
}

export default HomePage;

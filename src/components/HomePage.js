import React from 'react';

class HomePage extends React.Component {
	render() {
		return (

        <div className="container">
            <div className="row">
                <div className="box">
                    <div className="col-lg-12 text-center">
                        <div id="carousel-example-generic">
                            <div className="carousel-inner">
                                <div className="item active">
                                    <img className="img-responsive img-full" src={require('../../public/libs/startbootstrap/img/slide-1.jpg')} alt=""/>
                                </div>
                            </div>
                        </div>
                        <h2 className="brand-before">
                            <small>Event's date</small>
                        </h2>
                        <h1 className="brand-name">Event's name</h1>
                        <hr className="tagline-divider"/>
                        <h2>
                            <small>By
                            <strong>Event's creator</strong>
                            </small>
                        </h2>
                    </div>
                </div>
                <div className="box">
                    <div className="col-lg-12 text-center">
                        <div id="carousel-example-generic">
                            <div className="carousel-inner">
                                <div className="item active">
                                    <img className="img-responsive img-full" src={require('../../public/libs/startbootstrap/img/slide-2.jpg')} alt=""/>
                                </div>
                            </div>
                        </div>
                        <h2 className="brand-before">
                            <small>Event's date</small>
                        </h2>
                        <h1 className="brand-name">Event's name</h1>
                        <hr className="tagline-divider"/>
                        <h2>
                            <small>By
                                <strong>Event's creator</strong>
                            </small>
                        </h2>
                    </div>
                </div>
                <div className="box">
                    <div className="col-lg-12 text-center">
                        <div id="carousel-example-generic">
                            <div className="carousel-inner">
                                <div className="item active">
                                    <img className="img-responsive img-full" src={require('../../public/libs/startbootstrap/img/slide-3.jpg')} alt=""/>
                                </div>
                            </div>
                        </div>
                        <h2 className="brand-before">
                            <small>Event's date</small>
                        </h2>
                        <h1 className="brand-name">Event's name</h1>
                        <hr className="tagline-divider"/>
                        <h2>
                            <small>By
                                <strong>Event's creator</strong>
                            </small>
                        </h2>
                    </div>
                </div>
            </div>
        </div>


		);
	}	
}

export default HomePage;

//             <h1 class="brand-name">Business Casual</h1>
//             <hr class="tagline-divider">
//                 <h2>
//                     <small>By
//                         <strong>Start Bootstrap</strong>
//                     </small>
//                 </h2>

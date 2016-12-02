import React from 'react';
import {Link} from 'react-router'

class Nav extends React.Component {
  render() {
    return (
     <nav className="navbar navbar-default" className="navbar navbar-default" role="navigation">
            <div className="container" className="container">
         
            <div className="navbar-header" className="navbar-header">
                <button type="button" className="navbar-toggle" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only" className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" className="icon-bar"></span>
                    <span className="icon-bar" className="icon-bar"></span>
                    <span className="icon-bar" className="icon-bar"></span>
                </button>
               
                <a className="navbar-brand" className="navbar-brand" href="index.html">Eventi</a>
            </div>
           
                <ul className="nav navbar-nav" className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/createEvent">Create Event</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </div>
    </nav>
    );
  }
}

export default Nav;


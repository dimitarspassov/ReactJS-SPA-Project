import React from 'react';
import {Link} from 'react-router'

class Nav extends React.Component {
  render() {
    return (
     <nav className="navbar navbar-default" class="navbar navbar-default" role="navigation">
            <div className="container" class="container">
         
            <div className="navbar-header" class="navbar-header">
                <button type="button" className="navbar-toggle" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only" class="sr-only">Toggle navigation</span>
                    <span className="icon-bar" class="icon-bar"></span>
                    <span className="icon-bar" class="icon-bar"></span>
                    <span className="icon-bar" class="icon-bar"></span>
                </button>
               
                <a className="navbar-brand" class="navbar-brand" href="index.html">Eventi</a>
            </div>
           
                <ul className="nav navbar-nav" class="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/create-event">Create Event</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </div>
    </nav>
    );
  }
}

export default Nav;


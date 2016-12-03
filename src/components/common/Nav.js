import React from 'react';
import {Link} from 'react-router'

class Nav extends React.Component {
    constructor(){
        super()
    }
  render() {
    let nav = '' 
    return (
     <nav className="navbar navbar-default" role="navigation">
            <div className="container">
         
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
               
                <a className="navbar-brand" href="index.html">MENU</a>
            </div>
           
                <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/createEvent">Create Event</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </div>
    </nav>
    );
  }
}

export default Nav;


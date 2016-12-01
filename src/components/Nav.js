import React from 'react';

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
           
            <div className="collapse navbar-collapse" class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav" class="nav navbar-nav">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="blog.html">Blog</a>
                    </li>
                    <li>
                        <a href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
  }
}

export default Nav;


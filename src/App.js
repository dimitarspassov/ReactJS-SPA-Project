import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';
import Homepage from './components/HomePage';
import KinveyRequester from './modules/requester';

class App extends React.Component {
	constructor() {
        super();
        this.state = { loggedIn: false, username: '' };
    }
    
  render() {
    return (
      <div className="App">
          <div className="container">
              <div className="brand">Event Storm</div>
          </div>
          <Nav />
          <main id="main"></main>
          {/*{this.props.children}*/}
          <Footer />
      </div>
    );
  }
}


function showView(reactViewComponent) {
    ReactDOM.render(reactViewComponent,
        document.getElementById('main'));
}

(function showHomeView() {
    KinveyRequester.getLastThreeEvents().then(loadLastThreeEvents.bind(this));

    function loadLastThreeEvents(events) {

        showView(<Homepage events={events} />)
    }
})();
export default App;

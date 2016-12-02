import React from 'react';
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';

class App extends React.Component {
	constructor() {
        super();
        this.state = { loggedIn: false, username: '' };
    }
    
  render() {
    return (
      <div className="App">
        <Nav />
        {this.props.children}
          <Footer />
      </div>
    );
  }
}

export default App;

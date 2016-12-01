import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';

class App extends React.Component {
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

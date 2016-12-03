import React from 'react';
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';
import observer from './modules/observer';

class App extends React.Component {
	constructor() {
            super();
            this.state = { loggedIn: false, username: '' };
            observer.onSessionUpdate = this.onSessionUpdate.bind(this);
        }
        componentDidMount() {
        this.onSessionUpdate();
    }

    onSessionUpdate() {
        let name = sessionStorage.getItem("username");
        if (name) {
            this.setState({ loggedIn: true, username: sessionStorage.getItem("username") });
        } else {
            this.setState({ loggedIn: false, username: '' });
        }
    }
        render() {
          return (
            <div className="App">
                <div className="container">
                    <div className="brand">Event Storm</div>
                </div>
                <Nav loggedIn={this.state.loggedIn} user={this.state.username}/>
                {this.props.children}       
                <Footer />
            </div>
          );
        }
}

export default App;

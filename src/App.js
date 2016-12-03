import React from 'react';
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';
//import KinveyRequester from './modules/requester';

class App extends React.Component {
	constructor() {
            super();
            this.state = { 
              username: '', 
              userId: '' 
            };
        }
        isLoggedIn(){
          let user= {
              isLogged: false,
              username: sessionStorage.getItem("userId"),
              userId: sessionStorage.getItem("userId")
          };

          if(sessionStorage.getItem("userId") !== '') {
              return user;
          } else {
            return false;
          }
        }

      // componentDidMount() {
      //   this.state = {
      //       username: sessionStorage.getItem("username"),
      //       userId: sessionStorage.getItem("userId")
      // };
       
        // $(document).on({
        //     ajaxStart: function() { $("#loadingBox").show() },
        //     ajaxStop: function() { $("#loadingBox").hide() }
        // });
       
        // $(document).ajaxError(this.handleAjaxError.bind(this));
     
        // $("#infoBox, #errorBox").click(function() {
        //     $(this).fadeOut();
        // });
   // }
        render() {
          return (
            <div className="App">
                <div className="container">
                    <div className="brand">Event Storm</div>
                </div>
                <Nav/>
                {this.props.children}       
                <Footer />
            </div>
          );
        }
}

export default App;

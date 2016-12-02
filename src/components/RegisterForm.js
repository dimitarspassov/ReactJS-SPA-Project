import React, {Component} from 'react';

class RegisterForm extends Component {
   render() {
       return (
        	<div className="row">
            	<div className="box">
                	<div className="col-lg-12">
                    	<hr/>
                    	<h2 className="intro-text text-center">
                        	<strong>Register form</strong>
                    	</h2>
                    	<hr/>
                    	<form className="form" role="form"> 
                        	<div className="row">
                            <div className="form-group col-xs-offset-4 col-xs-4">
                               <label>Username</label>
                               <input type="text" className="form-control"/>
                            </div>
                        </div>
                         <div className="row">
                            <div className="form-group col-xs-offset-4 col-xs-4">
                               <label>Password</label>
                               <input type="tel" className="form-control"/>
                            </div>
                          </div>
                         <div className="row">  
                           	<div className="form-group col-xs-offset-4 col-xs-4">
                               <label>Confirm Password</label>
                               <input type="tel" className="form-control"/>
                            </div>
                          </div>
                          <div className="row">
                            <div className="form-group col-xs-offset-4 col-xs-4">
                               <label>Email Address</label>
                               <input type="email" className="form-control"/>
                            </div>
                         </div>
                         <div className="row">
                            <div className="form-group col-lg-12">
                               <input type="hidden" name="save" value="contact"/>
                               <button type="submit" className="btn btn-default">Submit</button>
                            </div>
                        	</div>
                    	</form>
                	</div>
            	</div>
        	</div>
       );
    }
}

export default RegisterForm
import React from 'react';

export default class EditForm extends React.Component {
    render() {
        return (
            <div className="container">
                   <div className="box">
                      <hr/>
                      <h2 className="intro-text text-center">
                          <strong>Edit Event</strong>
                      </h2>
                      <hr/>
                <form role="form" onSubmit={this.props.onSubmitHandler}>
                    <div className="row">
                          <div className="form-group col-xs-offset-4 col-xs-4">
                            <label>Title</label>
                            <input type="text" className="form-control"
                                   name="title"
                                   value={this.props.title}
                                  disabled={this.props.submitDisabled}
                                   onChange={this.props.onChangeHandler}/>
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-xs-offset-4 col-xs-4">
                            <label>Description</label>
                            <textarea type="text" className="form-control"
                                   name="description"
                                      value={this.props.description}
                                   disabled={this.props.submitDisabled}
                                      onChange={this.props.onChangeHandler}>
                            </textarea>
                         </div>
                        </div>
                         <div className="row">
                          <div className="form-group col-xs-offset-4 col-xs-4">
                            <label>Date</label>
                            <input type="date" className="form-control"
                                   name="date"
                                   value={this.props.date}
                                   disabled={this.props.submitDisabled}
                                   onChange={this.props.onChangeHandler}/>
                        </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-xs-offset-4 col-xs-4">
                            <label>Location</label>
                            <input type="text" className="form-control"
                                   name="location"
                                   value={this.props.location}
                                   disabled={this.props.submitDisabled}
                                   onChange={this.props.onChangeHandler}/>
                         </div>
                        </div>
                         <div className="row">
                          <div className="form-group col-xs-offset-4 col-xs-4">
                            <label>Image</label>
                            <input type="text" className="form-control"
                                   name="image"
                                   value={this.props.image}
                                   disabled={this.props.submitDisabled}
                                   onChange={this.props.onChangeHandler}/>
                         </div>
                        </div>
                        
                    <div className="form-group col-lg-12">
                          <button type="submit" className="btn btn-default">Submit</button>
                    </div>
                </form>
            </div>
          </div>
        );
    }
}

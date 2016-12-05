import React from 'react';

export default class EditForm extends React.Component {
    render() {
        return (
            <div className="col-lg-12">
                <hr></hr>
                <h2 className="intro-text text-center">Edit Event</h2>
                <hr></hr>
                <form role="form" onSubmit={this.props.onSubmitHandler}>
                    <div className="row">
                        <div className="form-group col-lg-4">
                            <label>Title</label>
                            <input type="text" className="form-control"
                                   name="title"
                                   value={this.props.title}
                                disabled={this.props.submitDisabled}
                                   onChange={this.props.onChangeHandler}/>
                        </div>
                        <div className="form-group col-lg-4">
                            <label>Date</label>
                            <input type="text" className="form-control"
                                   name="date"
                                   value={this.props.date}

                                   disabled={this.props.submitDisabled}
                                   onChange={this.props.onChangeHandler}/>
                        </div>
                        <div className="form-group col-lg-4">
                            <label>Image</label>
                            <input type="text" className="form-control"
                                   name="image"
                                   value={this.props.image}
                                   disabled={this.props.submitDisabled}
                                   onChange={this.props.onChangeHandler}/>
                        </div>
                        <div className="form-group col-lg-12">
                            <label>Description</label>
                            <textarea type="text" className="form-control"
                                   name="description"
                                      value={this.props.description}
                                   disabled={this.props.submitDisabled}
                                      onChange={this.props.onChangeHandler}>
                            </textarea>
                        </div>
                    </div>
                    <input className="btn btn-default" type="submit" value="Submit changes" disabled={this.props.submitDisabled}
                    />
                </form>
            </div>
        );
    }
}

import React from 'react';

export default class EditForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler}>
                <div className="form-group">
                    <label>Author:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        value={this.props.author}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Title:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        value={this.props.title}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Date:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        value={this.props.date}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Img:</label>
                    <img src={this.props.image} alt=""></img>
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        className="form-control"
                        name="description"
                        value={this.props.description}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <input className="btn btn-default" type="submit" value="Submit changes" disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}
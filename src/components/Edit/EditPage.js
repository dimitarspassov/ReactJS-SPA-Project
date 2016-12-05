import React from 'react';
import EditForm from './EditForm';
import {loadSingleEvent, editEvent} from '../../modules/events';

export default class EditPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {author: '', title: '', description: '', date: '', location: '', image: ''};
        this.bindEventHandlers();
    }

    componentDidMount() {
        // Populate form
        loadSingleEvent(this.onLoadSuccess, this.props.params.id,);
    }

    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response) {
        this.setState({
            author: response.author,
            title: response.title,
            description: response.description,
            date: response.date,
            location: response.location,
            image: response.image
        });
    }

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.setState({submitDisabled: true});
        editEvent(this.props.params.id, this.state.author, this.state.title, this.state.description, this.state.date, this.state.location, this.state.image, this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        if (response === true) {
            // Navigate away from login page
            this.context.router.push('/');
        } else {
            // Something went wrong, let the user try again
            this.setState({submitDisabled: true});
        }
    }

    render() {
        return (
            <div>
                <h1>Edit Page</h1>
                <EditForm
                    author={this.state.author}
                    title={this.state.title}
                    description={this.state.description}
                    date={this.state.date}
                    location={this.state.location}
                    image={this.state.image}
                    submitDisabled={this.state.submitDisabled}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                />
            </div>
        );
    }
}

EditPage.contextTypes = {
    router: React.PropTypes.object
};
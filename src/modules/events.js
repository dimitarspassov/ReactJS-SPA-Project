import {get, post, update} from './requester';

function loadEvents(callback) {
    // Request events from db
    get('appdata', 'events', 'basic')
        .then(callback);
}

function create( title, description, date, location, image, callback) {
    let author = "Eli" //sessionStorage.getItem('username')
    let eventData = {
        author: author,
        title:title,
        description:description,
        date:date,
        location:location,
        image:image
    };

    post('appdata', 'events', eventData, 'basic')
        .then(callback);
}

export {loadEvents, create};
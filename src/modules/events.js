import {get, post, update} from './requester';

function loadEvents(callback) {
    // Request events from db
    get('appdata', 'events', 'basic')
        .then(callback);
}

export {loadEvents};
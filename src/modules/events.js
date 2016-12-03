import KinveyRequester from './requester';

function loadEvents(callback) {
    KinveyRequester.get('appdata', 'events', 'kinvey')
        .then(callback);
}

function loadSingleEvent(callback, id) {

    KinveyRequester.get('appdata', 'events/'+id, 'guest')
        .then(callback);
}

function create( title, description, date, location, image, callback) {
    let author = sessionStorage.getItem('username')
    let eventData = {
        author: author,
        title:title,
        description:description,
        date:date,
        location:location,
        image:image
    };

    KinveyRequester.post('appdata', 'events', eventData, 'kinvey')
        .then(callback);
}

export {loadEvents, create, loadSingleEvent};
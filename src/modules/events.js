import KinveyRequester from './requester';

function loadEvents(callback) {
    // Request events from db
    KinveyRequester.get('appdata', 'events', 'guest')
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

    KinveyRequester.post('appdata', 'events', eventData, 'guest')
        .then(callback);
}

export {loadEvents, create};
import KinveyRequester from './requester';

function loadEvents(callback) {
    KinveyRequester.get('appdata', 'events', 'guest')
        .then(callback);
}

function loadSingleEvent(callback, id) {

    KinveyRequester.get('appdata', 'events/'+id, 'guest')
        .then(callback);
}

function editEvent(id, author, title, description, date, location, image, callback) {
    let eventData = {
        author:author,
        title: title,
        description: description,
        date: date,
        location: location,
        image: image,
    };

    KinveyRequester.update('appdata', 'events/' + id, eventData, 'kinvey')
        .then(callback(true));
}

function create(title, description, date, location, image, callback) {
    let author = sessionStorage.getItem('username')
    let eventData = {
        author: author,
        title:title,
        description:description,
        date:date,
        location:location,
        image:image
    };

    KinveyRequester.post('appdata', 'events', eventData, 'kinvey').then(callback(true));
}

function attend(eventID) {
    KinveyRequester.get('appdata', 'user-events/'+ sessionStorage.getItem('userId'), 'kinvey').then(function (response) {
        let events = response.events
        events.push(eventID)
        let data= {
            events: events
        }
        KinveyRequester.update('appdata', 'user-events/' + sessionStorage.getItem('userId'), data, "kinvey")
    })
}

function leave(eventID) {
    KinveyRequester.get('appdata', 'user-events/'+ sessionStorage.getItem('userId'), 'kinvey').then(function (response) {
        let events = response.events
        events = events.filter(x => {return x != eventID+""})
        let data= {
            events: events
        }
        KinveyRequester.update('appdata', 'user-events/' + sessionStorage.getItem('userId'), data, "kinvey")
    })
}

function loadAttendingEvents(){
    KinveyRequester.get('appdata', 'user-events/'+ sessionStorage.getItem('userId'), 'kinvey').then(function (res) {
        let eventsArray = res.events.filter(x => {return x != "empty"})
        sessionStorage.setItem('attendingEvents',JSON.stringify(eventsArray))
   })
}

function isAttending(eventID) {
   if(!sessionStorage.getItem('attendingEvents')) loadAttendingEvents()
    let attendingEvents = JSON.parse(sessionStorage.getItem("attendingEvents"))
    let renderAttendingEvents = []
    if(attendingEvents.indexOf(eventID) >= 0) {
         return true   
    }
    return false
}

export {loadEvents, create, loadSingleEvent, attend, leave, loadAttendingEvents, isAttending, editEvent};
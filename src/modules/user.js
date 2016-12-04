import KinveyRequester from './requester';
import observer from './observer';

function login(username, password, callback) {
    let userData = {
        username,
        password
    };

    KinveyRequester.post('user', 'login', userData, 'basic')
        .then(loginSuccess);

    function loginSuccess(userInfo) {
        saveSession(userInfo);
        callback(true);
    }
}

function register(username, password, email, callback) {
    let userData = {
        username,
        password, 
        email
    };

    KinveyRequester.post('user', '', userData, 'basic')
        .then(registerSuccess);

    function registerSuccess(userInfo) {
        console.log('success')
       // observer.showSuccess('Successful registration.');
        saveSession(userInfo);

        let data = {
            _id: userInfo._id,
            events: ["empty"]
        };
        KinveyRequester.post('appdata', 'user-events', data, "kinvey").then(function () {
            callback(true);
        })
    }
}

function logout(callback) {
    KinveyRequester.post('user', '_logout', null, 'kinvey')
        .then(logoutSuccess);


    function logoutSuccess(response) {
        sessionStorage.clear();
        observer.onSessionUpdate();
        callback(true);
    }
}

function saveSession(userInfo) {
    sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
    sessionStorage.setItem('userId', userInfo._id);
    sessionStorage.setItem('username', userInfo.username);
}

export { login, register, logout };
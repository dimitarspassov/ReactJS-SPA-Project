import $ from 'jquery';

const KinveyRequester = (function () {

        const kinveyBaseUrl = "https://baas.kinvey.com/";
        const kinveyAppKey = "kid_Hk2vMlJme";
//const kinveyAppSecret = "fb14ec4b700d4dcdbdb2a58295051bba";

        function makeAuth(type) {
            switch (type) {
                //  case 'guest':
                //      return { 'Authorization': "Basic " + btoa("guest" + ":" + "guest") };
                case 'basic':
                    return {'Authorization': "Basic " + btoa("guest" + ":" + "guest")};  //??
                case 'kinvey':
                    return {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')};
                default:
                    break;
            }
        }

        function getLastThreeEvents() {
            return $.get({
                url: kinveyBaseUrl + 'appdata/' + kinveyAppKey + '/events',
                headers: makeAuth('basic'),
            });
        }

        function get(module, uri, auth) {
            const kinveyLoginUrl = kinveyBaseUrl + module + "/" + kinveyAppKey + "/" + uri;
            const kinveyAuthHeaders = makeAuth(auth);

            return $.ajax({
                method: "GET",
                url: kinveyLoginUrl,
                headers: kinveyAuthHeaders
            });
        }

        function post(module, uri, data, auth) {

            const kinveyLoginUrl = kinveyBaseUrl + module + "/" + kinveyAppKey + "/" + uri;
            const kinveyAuthHeaders = makeAuth(auth);

            let request = {
                method: "POST",
                url: kinveyLoginUrl,
                headers: kinveyAuthHeaders
            };

            if (data !== null) {
                request.data = data;
                $.ajax(request);
            }
            return;
        }

        function update(module, uri, data, auth) {
            // const kinveyLoginUrl = kinveyBaseUrl + module + "/" + kinveyAppKey + "/" + uri;
            // const kinveyAuthHeaders = makeAuth(auth);
            //
            // let request = {
            //     method: "PUT",
            //     url: kinveyLoginUrl,
            //     headers: kinveyAuthHeaders,
            //     data: data
            // };
            //
            // return $.ajax(request);
        }

        return {getLastThreeEvents, get, post}
    })();

export default KinveyRequester;
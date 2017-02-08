app.factory('Api', function ($http, $base64, localStorageService) {
    return {
        login: function (username, password) {
            console.log('test');
            var userRequest = {
                method: 'GET',
                url: 'https://redmine.ekreative.com/users/current.json',
                headers: {
                    Authorization: 'Basic ' + $base64.encode(username + ':' + password),
                    'Content-Type': 'json'

                }

            };
            return $http(userRequest)

        },

        get: function(url) {
            var pass = localStorageService.get('pass');
            var username = localStorageService.get('username');
            return $http.get('https://redmine.ekreative.com/' + url, {
                headers: {
                    Authorization: 'Basic ' + $base64.encode(username + ':' + pass),
                    'Content-Type': 'json'

                }
            });
        },
        post: function(url, data) {
            var pass = localStorageService.get('pass');
            var username = localStorageService.get('username');
            return $http.post('https://redmine.ekreative.com/' + url, data, {
                headers: {
                    Authorization: 'Basic ' + $base64.encode(username + ':' + pass),
                    'Content-Type': 'application/json'

                }
            });
        }


    };
});



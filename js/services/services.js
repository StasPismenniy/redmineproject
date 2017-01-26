app.factory('Api', function ($http, $base64) {
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
                .then(function (data, status) {
                    console.log(data)
                })
        },

        get: function(url) {
            return $http.get('https://redmine.ekreative.com/projects/current.json' + url, {
                headers: {
                    Authorization: 'Basic ' + $base64.encode(username + ':' + password),
                    'Content-Type': 'json'

                }
            });
        },
        post: function(url, data) {
            return $http.post('https://redmine.ekreative.com/' + url, {}, data);
        }


    };
});



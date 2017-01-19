

    app.factory('Api', function ($http, $base64) {
        return {
            login: function (username, password) {
                console.log('test');
                var userRequest = {
                    method: 'POST',
                    url: 'https://redmine.ekreative.com/users/current.json',
                    headers:{
                        Authorization:
                        'Basic ' + $base64.encode(username + ':' + password)
                    }
                };
                $http(userRequest)
                    .success(function(data, status) {
                        console.log(data)
                    })
            }
        };
    });



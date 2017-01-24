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

                    // projects: function (username, password) {
                    //     var projects = {
                    //         method: 'GET',
                    //         url: 'https://redmine.ekreative.com/users/current.json',
                    //         headers: {
                    //             Authorization: 'Basic ' + $base64.encode(username + ':' + password),
                    //             'Content-Type': 'json'
                    //         }
                    //     }
                    // }
                }

            };
            $http(userRequest)
                .then(function (data, status) {
                    console.log(data)
                })
        }


    };
});



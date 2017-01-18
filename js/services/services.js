angular.module('starter.services', []);

app.service('Auth', function($http) {
    $http.post('https://redmine.ekreative.com', data, config)
        .then(
            function(response){
                // success callback
            },
            function(response){
                // failure callback
            }
        );
});



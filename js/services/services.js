angular.module('starter.services', [])

    .controller("Auth", function ($scope, $http) {

        $http.get('https://redmine.ekreative.com/login?')
            .then(function (data) {
                console.log(data)
        });
    });



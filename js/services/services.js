angular.module('starter.services', []);

AuthLogin.factory('Auth', ['$http', function ($http) {

    $http({
        method: 'GET',
        url: 'https://redmine.ekreative.com'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

}]);


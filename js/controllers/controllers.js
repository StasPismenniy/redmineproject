app.controller('AppCtrl', function ($scope, Api) {
    console.log('test');

    $scope.username = '';
    $scope.pass = '';

    $scope.login = function () {
        Api.login($scope.username ,$scope.pass );
    }


});
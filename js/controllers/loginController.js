app.controller('loginCtrl', function ($scope, Api, localStorageService, $state) {
    console.log('test');

    $scope.username = '';
    $scope.pass = '';
    $scope.pass = localStorageService.get('pass');
    $scope.username = localStorageService.get('username');
    console.log('local');



    // if (localStorageService.get('username')) {
    //     $scope.username = localStorageService.get('username');
    // }

    $scope.login = function () {
        Api.login($scope.username ,$scope.pass );

        localStorageService.set('username', $scope.username);
        console.log('yes username');
        localStorageService.set('pass', $scope.pass);
        console.log('yes');

        $state.go('main.projects');
    };


});
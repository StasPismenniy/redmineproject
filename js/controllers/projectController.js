app.controller('projectsCtrl', function ($scope, Api, localStorageService) {
    $scope.projects = function () {
        Api.projects();
    };

});

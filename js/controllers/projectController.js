app.controller('projectsCtrl', function ($scope, Api) {
    Api.get('projects.json')
        .then(function (data, status) {
            console.log(data);

            $scope.projects = data.data.projects;
            //console.log($scope.projects);
        }, function (data, status) {
            console.log(data);
        });
});

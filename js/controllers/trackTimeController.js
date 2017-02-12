app.controller('trackTimeController', function ($scope, Api) {
    Api.get('projects.json')
        .then(function (data, status) {
            console.log(data);

            $scope.projects = data.data.projects;
            console.log($scope.projects);
        }, function (data, status) {
            console.log(data);
        });


    $scope.hours = '';
    $scope.comments = '';
    $scope.projectItem = '';

    $scope.post = function () {
        var project = JSON.parse($scope.projectItem);
        Api.post('time_entries.json', {
            time_entry: {
                project_id: project.id,
                hours: $scope.hours,
                spent_on: Date,
                comments: $scope.comments
            }
        });

        console.log(JSON.parse($scope.projectItem));

        console.log('tracked')

    }
});

app.controller('trackTimeControllerProjects', function ($scope, Api, $stateParams) {

    $scope.hours = '';
    $scope.comments = '';

    $scope.post = function () {
        Api.post('time_entries.json', {
            time_entry: {
                project_id: $stateParams.id,
                hours: $scope.hours,
                spent_on: Date,
                comments: $scope.comments
            }
        });

        console.log('tracked')

    }
});

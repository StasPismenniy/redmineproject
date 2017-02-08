app.controller('trackTimeController', function ($scope, Api, $stateParams) {

    $scope.hours = time_entry.hours;
    $scope.comments = time_entry.comments;

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

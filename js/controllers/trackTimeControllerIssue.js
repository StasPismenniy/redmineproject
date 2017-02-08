app.controller('trackTimeControllerIssue', function ($scope, Api, $stateParams) {

    $scope.hours = null;
    $scope.comments = null;

    $scope.post = function () {
        Api.post('time_entries.json', {
            time_entry: {
                issue_id: $stateParams.id,
                hours: $scope.hours,
                spent_on: Date,
                comments: $scope.comments
            }
        });

        console.log('tracked')

    }
});


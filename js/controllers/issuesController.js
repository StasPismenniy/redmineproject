app.controller('issuesCtrl', function ($scope, Api, $stateParams) {
    Api.get('issues.json?project_id=' + $stateParams.id)
        .then(function (data, status) {
            console.log(data);

            $scope.issues = data.data.issues;
            console.log($scope.issues, $stateParams.id);
        }, function (data, status) {
            console.log(data);
        });
});

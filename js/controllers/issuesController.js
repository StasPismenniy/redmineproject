app.controller('issuesCtrl', function ($scope, Api, $stateParams) {
    Api.get('issues.json/')
        .then(function (data, status) {
            console.log(data);

            $scope.issues = data.data.issues;
            console.log($scope.issues);
        }, function (data, status) {
            console.log(data);
        });
});

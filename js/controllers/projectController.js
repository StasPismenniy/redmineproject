app.controller('projectsCtrl', function ($scope, Api) {
    Api.get('projects.json')
        .then(function (data, status) {
            console.log(data);

        }, function (data, status) {
            console.log(data);
        });
});

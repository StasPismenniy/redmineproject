app.controller('commentsController', function ($scope, localStorageService) {

    $scope.commentsList = [];
    if (localStorageService.get('commentsList')) {
        $scope.commentsList = localStorageService.get('commentsList');
    }

    $scope.commentsForm ={
        commentsDescription: ''
    };


    $scope.addComment = function (commentsForm) {
        if (commentsForm.commentsDescription) {
            $scope.commentsList.push({
                commentsDescription: commentsForm.commentsDescription

            });
            $scope.commentsForm.commentsDescription = '';

            localStorageService.set('commentsList', $scope.commentsList);
            console.log('added');
        }
    };

    $scope.remove = function (commentsItem) {

        var index = $scope.commentsList.indexOf(commentsItem);

        if (commentsItem) {
            $scope.commentsList.splice(index, 1);
            localStorageService.set('commentsList', $scope.commentsList);
        }

    };

});

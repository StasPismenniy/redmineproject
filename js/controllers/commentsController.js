app.controller('commentsController', function ($scope, localStorageService) {

    $scope.commentsList = [];
    if (localStorageService.get('commentsList')) {
        $scope.todoList = localStorageService.get('commentsList');
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

});

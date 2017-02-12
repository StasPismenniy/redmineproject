var app = angular.module('starter', ['ui.router', 'base64', 'LocalStorageModule'])

    .run(function () {

    })

    .config(function (localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('demoPrefix');
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('main', {
                url: '/',
                templateUrl: 'templates/menu/menu.html',
                abstract: true
            })


            .state('main.login', {
                url: 'login',
                views: {
                    mainContent: {
                        templateUrl: 'templates/login/login.html',
                        controller: 'loginCtrl'
                    }
                }
            })

            .state('main.projects', {
                url: 'projects',
                views: {
                    mainContent: {
                        templateUrl: 'templates/projects/projects.html',
                        controller: 'projectsCtrl'
                    }
                }
            })

            .state('main.issues', {
                url: 'projects/:id',
                views: {
                    mainContent: {
                        templateUrl: 'templates/issues/issues.html',
                        controller: 'issuesCtrl'
                    }
                }
            })

            .state('main.tracktimeprojects', {
                url: 'tracktimeprojects/:id',
                views: {
                    mainContent: {
                        templateUrl: 'templates/trackTimeProjects/trackTimeProjects.html',
                        controller: 'trackTimeControllerProjects'
                    }
                }
            })
            .state('main.tracktimeissue', {
                url: 'tracktimeissue/:id',
                views: {
                    mainContent: {
                        templateUrl: 'templates/trackTimeIssue/trackTimeIssue.html',
                        controller: 'trackTimeControllerIssue'
                    }
                }
            })
            .state('main.about', {
                url: 'about',
                views: {
                    mainContent: {
                        templateUrl: 'templates/about/about.html',
                        controller: ''
                    }
                }
            })
            .state('main.comments', {
                url: 'comments',
                views: {
                    mainContent: {
                        templateUrl: 'templates/comments/comments.html',
                        controller: 'commentsController'
                    }
                }
            })
            .state('main.tracktime', {
                url: 'tracktime',
                views: {
                    mainContent: {
                        templateUrl: 'templates/trackTime/trackTime.html',
                        controller: 'trackTimeController'
                    }
                }
            });

        $urlRouterProvider.otherwise('/login'); //
    });
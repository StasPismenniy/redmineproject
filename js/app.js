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
                // controller: 'starter.controllers'
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

            .state('main.tracktime', {
                url: 'tracktime/:id',
                views: {
                    mainContent: {
                        templateUrl: 'templates/trackTime/trackTime.html',
                        controller: 'trackTimeController'
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
            });

        $urlRouterProvider.otherwise('/login'); //
    });
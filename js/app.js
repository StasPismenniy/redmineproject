var app = angular.module('starter', ['ui.router', 'base64'])

.run(function () {

})

.config(function($stateProvider, $urlRouterProvider) {
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
                    controller: 'AppCtrl'
                }
            }
        });

    $urlRouterProvider.otherwise('/login');
});
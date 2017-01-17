angular.module('starter', ['ui.router', 'starter.controllers', 'starter.services'])

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
                    templateUrl: 'templates/login/login.html'
                    // controller: 'TodoController'
                }
            }
        });

    $urlRouterProvider.otherwise('/login');
});
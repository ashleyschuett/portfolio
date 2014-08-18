"use strict";
var app = angular.module('app', [
    'ngRoute',
    'Controllers'
]);

app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'assets/partials/index.html',
                controller:  'HomeController'
            }).
            when('/resume',{
                templateUrl: 'assets/partials/resume.html',
                controller:  'ResumeController'
            }).
            when('/profolio/:id', {
                templateUrl: 'assets/partials/project.html',
                controller: 'ProjectController'
            }).
            when('/profolio', {
                templateUrl: 'assets/partials/profolio.html',
                controller:  'ProfolioController'
            }).
            when('/about-me', {
                templateUrl: 'assets/partials/aboutme.html',
                controller: 'ProjectController'
            }).
            otherwise({
                redirectTo: '/'
            });

        // use the HTML5 History API
        //$locationProvider.html5Mode(true).hashPrefix('!');
    }]);

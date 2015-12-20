require('angular');
require('ui-router');


var app = angular.module('app', [
  'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('landingpage', {
      url: "/",
      templateUrl: "./templates/landingpage-template.html"
    })
});

require('./pages/landingpage-controller.js');

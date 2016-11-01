'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<page-list></page-list>'
        }).
        when('/cosmeticos', {
          template: '<product-list></product-list>'
        }).
        otherwise('/');
    }
  ]);

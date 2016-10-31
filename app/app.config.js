'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/phones', {
          template: '<page-list></page-list>'
        }).
        when('/cosmeticos', {
          template: '<phone-list></phone-list>'
        }).
        otherwise('/phones');
    }
  ]);

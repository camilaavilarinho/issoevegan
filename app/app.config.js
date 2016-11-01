'use strict';

angular.
  module('veganApp').
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
        when('/alimentos', {
          template: '<food-list></food-list>'
        }).
        when('/limpeza', {
          template: '<cleaning-list></cleaning-list>'
        }).
        when('/higiene', {
          template: '<hygiene-list></hygiene-list>'
        }).
        when('/criancas', {
          template: '<children-list></children-list>'
        }).
        when('/outros', {
          template: '<other-list></other-list>'
        }).
        otherwise('/');
    }
  ]);

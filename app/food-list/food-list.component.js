'use strict';

angular.
  module('foodList').
  component('foodList', {
    templateUrl: 'food-list/food-list.template.html',
    controller: ['$http', '$scope',
      function FoodListController($http, $scope) {
        $scope.products = [];
        $http.get('products/food.json').then(function(response) {
          $scope.products = response.data;
        });
      }
    ]
  });

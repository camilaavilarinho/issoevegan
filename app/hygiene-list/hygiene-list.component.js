'use strict';

angular.
  module('hygieneList').
  component('hygieneList', {
    templateUrl: 'product-list/product-list.template.html',
    controller: ['$http', '$scope',
      function HygieneListController($http, $scope) {
        $scope.products = [];
        $http.get('products/hygiene.json').then(function(response) {
          $scope.products = response.data;
        });
      }
    ]
  });

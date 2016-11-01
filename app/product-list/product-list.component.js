'use strict';

angular.
  module('productList').
  component('productList', {
    templateUrl: 'product-list/product-list.template.html',
    controller: ['$http', '$scope',
      function PhoneListController($http, $scope) {
        $scope.products = [];
        $http.get('products/products.json').then(function(response) {
          $scope.products = response.data;
        });
      }
    ]
  });

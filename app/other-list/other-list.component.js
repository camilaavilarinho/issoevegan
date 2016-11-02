'use strict';

angular.
  module('otherList').
  component('otherList', {
    templateUrl: 'product-list/product-list.template.html',
    controller: ['$http', '$scope',
      function OtherListController($http, $scope) {
        $scope.products = [];
        $http.get('products/other.json').then(function(response) {
          $scope.products = response.data;
        });
      }
    ]
  });

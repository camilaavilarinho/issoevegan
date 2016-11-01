'use strict';

angular.
  module('otherList').
  component('otherList', {
    templateUrl: 'other-list/other-list.template.html',
    controller: ['$http', '$scope',
      function OtherListController($http, $scope) {
        $scope.products = [];
        $http.get('products/products.json').then(function(response) {
          $scope.products = response.data;
        });
      }
    ]
  });

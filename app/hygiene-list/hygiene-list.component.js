'use strict';

angular.
  module('hygieneList').
  component('hygieneList', {
    templateUrl: 'hygiene-list/hygiene-list.template.html',
    controller: ['$http', '$scope',
      function HygieneListController($http, $scope) {
        $scope.products = [];
        $http.get('products/products.json').then(function(response) {
          $scope.products = response.data;
        });
      }
    ]
  });

'use strict';

angular.
  module('cleaningList').
  component('cleaningList', {
    templateUrl: 'product-list/product-list.template.html',
    controller: ['$http', '$scope',
      function CleaningListController($http, $scope) {
        $scope.products = [];
        $http.get('products/cleaning.json').then(function(response) {
          $scope.products = response.data;
        });
      }
    ]
  });

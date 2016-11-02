'use strict';

angular.
  module('cleaningList').
  component('cleaningList', {
    templateUrl: 'cleaning-list/cleaning-list.template.html',
    controller: ['$http', '$scope',
      function CleaningListController($http, $scope) {
        $scope.products = [];
        $http.get('products/cleaning.json').then(function(response) {
          $scope.products = response.data;
        });
      }
    ]
  });

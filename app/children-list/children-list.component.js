'use strict';

angular.
  module('childrenList').
  component('childrenList', {
    templateUrl: 'children-list/children-list.template.html',
    controller: ['$http', '$scope',
      function ChildrenListController($http, $scope) {
        $scope.products = [];
        $http.get('products/children.json').then(function(response) {
          $scope.products = response.data;
        });
      }
    ]
  });

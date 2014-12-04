angular.module('angular-dry-forms').controller('createItemController', [
    '$scope',
    '$http',
    function CreateItemController($scope, $http) {

        $scope.submitText = 'Create Item'

        $scope.newItem = {};


        $scope.createItem = function(newItem) {
            $http.post('/item', newItem)
                .success(function(data, status, headers, config) {
                    $scope.statusMessage = 'Your item has been created';
                    console.log('created new item ' + newItem);
                    $scope.newItem = {};
                    $scope.submitted = false;
                }).error(function(data, status, headers, config) {
                    console.log('error when creating new item');
                });
        };
    }
]);
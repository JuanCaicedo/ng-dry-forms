angular.module('angular-dry-forms').controller('editItemController', [
    '$scope',
    '$http',
    function EditItemController($scope, $http) {

        $scope.submitText = 'Submit Changes'

        $scope.editItem = function(changedItem) {
            $http.put('/item', changedItem)
                .success(function(data, status, headers, config) {
                    if (data) {
                        $scope.statusMessage = 'Your edits have been submitted';
                    } else {
                        alert(JSON.stringify(data));
                    }
                }).error(function(data, status, headers, config) {
                    console.log('Error when editing item');
                });
        };
    }
]);
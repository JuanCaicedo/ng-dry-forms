angular.module('angular-dry-forms').controller('itemFormController', [
    '$scope',
    '$http',
    function ItemFormController($scope, $http) {

        $scope.newItem = {};

        var methods = {
            post: function(newItem) {
                $http.post('/item', newItem)
                    .success(function(data, status, headers, config) {
                        $scope.statusMessage = 'Your item has been created';
                        $scope.submitted = false;
                    }).error(function(data, status, headers, config) {
                        $scope.statusMessage = 'There was an error creating your item';
                        deffered.reject(data, status, headers, config);
                    });
            },
            put: function(changedItem) {
                $http.put('/item', changedItem)
                    .success(function(data, status, headers, config) {
                        if (data) {
                            $scope.statusMessage = 'Your edits have been submitted';
                            $scope.submitted = false;
                        } else {
                            alert(JSON.stringify(data));
                            deffered.reject(data, status, headers, config);
                        }
                    }).error(function(data, status, headers, config) {
                        console.log('Error when editing item');
                    });
            }
        };

        $scope.submit = function(itemForm) {
            $scope.submitted = true;
            if (itemForm.$valid) {
                methods[$scope.method]($scope.newItem);
            }
        };

    }
]);
var sjModule = angular.module('angular-dry-forms');
sjModule.directive('itemForm', function() {
    var linkFunction = function(scope, element, attributes) {
        scope.submitText = attributes['submitText'];
        scope.method = attributes['method'];
    };

    return {
        restrict: "E",
        transclude: true,
        templateUrl: '/js/directives/itemForm/itemForm.html',
        link: linkFunction,
        scope: {}
    };
});
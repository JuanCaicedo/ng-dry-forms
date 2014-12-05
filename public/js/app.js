angular.module('angular-dry-forms', [
    'ui.router',
])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        //Set up state provider
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('createItem', {
                    url: '/',
                    templateUrl: '/partials/createItem.html'
                });
            $stateProvider
                .state('editItem', {
                    url: '/edit',
                    templateUrl: '/partials/editItem.html'
                });
        }
    ]);
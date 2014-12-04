angular.module('angular-dry-forms', [
    'ui.router',
])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$httpProvider',
        //Set up state provider
        function ($stateProvider, $urlRouterProvider, $httpProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('item', {
                    url: '/',
                    templateUrl: '/partials/createItem.html'
                });
            $stateProvider
                .state('search', {
                    url: '/edit',
                    templateUrl: '/partials/editItem.html'
                });
        }
    ]);
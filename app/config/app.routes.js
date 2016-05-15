(function () {
    'use strict';

    angular.module('sand').config(routes);

    routes.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

    function routes($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('castle', {
            url: '/',
            controller: 'castleCtrl',
            controllerAs: 'vm',
            templateUrl: '/app/components/castlePage/castlePage.html',
            resolve: {
                ctrlData: function(castleService) {
                    return castleService.getServiceData();
                }
            }
        });

        console.info('App Routes "OK"');
    }
}());
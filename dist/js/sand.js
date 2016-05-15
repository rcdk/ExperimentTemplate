(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
    'use strict';

    var app = angular.module('sand', ['ui.router', 'ui.bootstrap', 'ngAnimate', 'ngPrettyJson']);

    console.info('App init "OK"');
})();

},{}],2:[function(require,module,exports){
'use strict';

(function () {
    'use strict';

    angular.module('sand').controller('castleCtrl', castleCtrl);

    castleCtrl.$inject = ['$scope', 'ctrlData'];

    function castleCtrl($scope, ctrlData) {

        var vm = this;

        vm.jsonData = ctrlData;

        console.info('castleCtrl "OK"');
    };
})();

},{}],3:[function(require,module,exports){
'use strict';

(function () {
    'use strict';

    angular.module('sand').run(loading);

    loading.$inject = ['$rootScope'];

    function loading($rootScope) {}
})();

},{}],4:[function(require,module,exports){
'use strict';

(function () {
    'use strict';

    angular.module('sand').config(routes);

    routes.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

    function routes($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('castle', {
            url: '/',
            controller: 'castleCtrl',
            controllerAs: 'vm',
            templateUrl: '/app/components/castlePage/castlePage.html',
            resolve: {
                ctrlData: function ctrlData(castleService) {
                    return castleService.getServiceData();
                }
            }
        });

        console.info('App Routes "OK"');
    }
})();

},{}],5:[function(require,module,exports){
'use strict';

(function () {
    'use strict';

    angular.module('sand').factory('castleService', castleService);

    castleService.$inject = ['$http'];

    function castleService($http) {

        return {
            getServiceData: getServiceData,
            postServiceData: postServiceData
        };

        function getServiceData() {

            return $http({
                url: 'app/mochupData/data.json',
                method: 'GET'
            }).then(success)['catch'](fail);

            function success(response) {
                console.info('XHR Succeded for getServiceData');
                return response.data;
            }

            function fail(error) {
                console.warn('XHR Failed for getCategories ' + error.data);
                return error.data;
            }
        }

        function postServiceData() {

            return $http({
                url: '',
                method: 'POST',
                data: "",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            });
        }

        console.info('castleService "OK"');

        return service;
    };
})();

},{}]},{},[1,2,3,4,5]);

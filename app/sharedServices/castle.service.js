(function () {
    'use strict';

    angular
	.module('sand')
	.factory('castleService', castleService);

    castleService.$inject = ['$http'];

    function castleService($http) {

        return {
            getServiceData: getServiceData,
            postServiceData: postServiceData
        }

        function getServiceData() {

            return $http({ 
                url: 'app/mochupData/data.json', 
                method: 'GET'
                })
                .then(success)
                .catch(fail);

            function success(response) {
                console.info('XHR Succeded for getServiceData');
                return response.data;
            }

            function fail(error) {
                console.warn('XHR Failed for getCategories ' + error.data);
                return error.data
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
}());
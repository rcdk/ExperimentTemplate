(function () {
    'use strict';

    angular
	.module('sand')
	.controller('castleCtrl', castleCtrl);

    castleCtrl.$inject = ['$scope', 'ctrlData'];

    function castleCtrl($scope, ctrlData) {

        var vm = this;

        vm.jsonData = ctrlData;

        console.info('castleCtrl "OK"');
    };
}());
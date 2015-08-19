(function () {

    function AdminCtrl($scope, $location) {
        console.log($location.search());
    }

    angular.module("MyApp").controller("AdminCtrl", AdminCtrl);
})();

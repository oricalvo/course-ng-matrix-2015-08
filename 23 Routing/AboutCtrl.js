(function () {

    function AboutCtrl($scope, $location) {
        console.log($location.search());
    }

    angular.module("MyApp").controller("AboutCtrl", AboutCtrl);
})();

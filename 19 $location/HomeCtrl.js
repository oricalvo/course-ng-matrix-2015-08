(function () {

    function HomeCtrl($scope, $location, $locationProvider) {
        $scope.change = function () {
            $location.url("blabla");
            $location.search({ id: 123 });
            $location.hash("Ori");
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();

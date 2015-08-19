(function () {

    function HomeCtrl($scope, $location) {
        $scope.message = "Hello Angular";

        $scope.run = function () {
            //$location.url("/xxx");
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();

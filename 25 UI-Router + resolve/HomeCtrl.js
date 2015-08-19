(function () {

    function HomeCtrl($scope, $location) {
        $scope.message = "Hello Routing";

        $scope.run = function () {
        }

        $scope.save = function () {
            $location.url("/about?id=1&name=ori");
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();

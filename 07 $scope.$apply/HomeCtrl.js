(function () {

    function HomeCtrl($scope) {
        $scope.message = "Hello Ng";

        setInterval(function () {
            $scope.message += "X";

            $scope.$apply();
        }, 1000);
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();

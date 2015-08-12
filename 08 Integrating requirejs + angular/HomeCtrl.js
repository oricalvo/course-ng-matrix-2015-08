define(["App"], function (module) {

    function HomeCtrl($scope) {
        $scope.message = "Hello Ng";

        setInterval(function () {
            //$scope.message += "X";

            //$scope.$apply();

            $scope.$apply(function () {
                $scope.message += "X";
            });
        }, 1000);

        $scope.run = function () {
            $scope.$apply();
        }
    }

    module.controller("HomeCtrl", HomeCtrl);
});

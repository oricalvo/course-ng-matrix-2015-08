(function () {

    function HomeCtrl($scope) {
        $scope.message = "Hello Angular";

        //$scope.clockFormat = "ss";

        $scope.clockDef = {
            format: "HH:mm:ss",
        };

        $scope.changeFormat = function () {
            $scope.clockDef.format = "yyyy";
        }

        $scope.onClockTick = function (time) {
            console.log("Tick: " + time);
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();

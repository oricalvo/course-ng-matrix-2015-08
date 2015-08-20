(function () {

    function ClockController($scope, $attrs, $parse, $interval) {
        $scope.time = new Date();

        //$scope.format = "dd/MM/yyyy";

        //var parentTickHandler = null;
        //if ($attrs.onTick) {
        //    parentTickHandler = $parse($attrs.onTick);
        //}

        var intervalId = null;

        function start() {
            if (intervalId) {
                return;
            }

            intervalId = $interval(function () {
                $scope.time = new Date();
                $scope.onTick({ time: $scope.time });
            }, 1000);
        }

        function stop() {
            if (intervalId) {
                $interval.cancel(intervalId);
                intervalId = null;
            }
        }

        if ($attrs.name) {
            var expr = $parse($attrs.name);

            var setter = expr.assign;
            if (setter) {
                setter($scope.$parent, {
                    start: start,
                    stop: stop,
                });
            }
        }

        start();

        /*if ($attrs.format) {
            console.log($attrs.format);

            //var expr = $parse($attrs.format);
            //$scope.format = expr($scope.$parent);

            $scope.$parent.$watch($attrs.format, function (newValue) {
                $scope.format = newValue;
            });
        }*/

    }

    angular.module("MyApp").directive("clock", function () {
        var ddo = {
            templateUrl: "/Clock.html",
            controller: ClockController,
            scope: {
                format: "=", // this is a two way data binding
                onTick: "&",
            }
        };

        return ddo;
    });

})();

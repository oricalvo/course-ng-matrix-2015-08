(function (module) {

    function HomeCtrl($scope) {
        $scope.message = {
            text: {
                subtext: "Hello",
            },
        };

        $scope.$watchCollection("message", function (newValue, oldValue) {
            if (newValue == oldValue) {
                return;
            }

            console.log("CHANGED: " + oldValue + " --> " + newValue);
        }, true);

        $scope.run = function () {
            $scope.message.text.subtext += "X";
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();


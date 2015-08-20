(function () {

    function HomeCtrl($scope, $element) {
        //$element.find("input").datepicker();

        $scope.dump = function () {
            console.log($scope.birthday);
        }

        $scope.change = function () {
            $scope.birthday = new Date();
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();

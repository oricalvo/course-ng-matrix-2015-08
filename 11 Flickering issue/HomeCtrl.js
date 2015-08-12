(function () {

    function HomeCtrl($scope) {
        $scope.message = "Hello Angular";

        $scope.role = "Admin";

        var doc = "<h1>My Document</h1>";

        $scope.doc = doc;
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();

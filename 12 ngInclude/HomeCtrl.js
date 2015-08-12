(function () {

    function HomeCtrl($scope) {
        $scope.url = "/Admin.html";
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();

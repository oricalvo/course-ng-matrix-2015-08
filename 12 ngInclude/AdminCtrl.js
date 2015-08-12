(function () {

    function AdminCtrl($scope) {
        $scope.title = "Hello ngInclude";
    }

    angular.module("MyApp").controller("AdminCtrl", AdminCtrl);
})();

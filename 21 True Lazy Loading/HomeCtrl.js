(function () {

    function HomeCtrl($scope, $injector) {
        $scope.contacts = [];

        $scope.load = function () {
            require(["ContactService"], function () {
                var contactService = $injector.get("contactService");
                $scope.contacts = contactService.getAll();

                $scope.$apply();
            });
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();

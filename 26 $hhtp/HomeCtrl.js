(function () {

    function HomeCtrl($scope, contactService) {

        $scope.refresh = function () {
            contactService.getAll().then(function (contacts) {
                $scope.contacts = contacts;
            }).catch(function () {
                console.log("ERROR");
            });
        }

        $scope.refresh();
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();

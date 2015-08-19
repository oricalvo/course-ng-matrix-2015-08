(function () {

    function HomeCtrl($scope, contactService) {
        $scope.contacts = contactService.getAll().map(function (contact) {
            return contact;
        });

        $scope.$on("contactAdded", function (e, contact) {
            $scope.contacts.push(contact);
        });
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();

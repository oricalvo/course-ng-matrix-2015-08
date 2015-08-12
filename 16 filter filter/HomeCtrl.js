(function () {

    function HomeCtrl($scope) {
        var originalContacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];

        $scope.contacts = originalContacts;

        $scope.run = function () {
        }

        $scope.search = function (searchStr) {
            $scope.contacts = originalContacts.filter(function (contact) {
                return contact.name.indexOf(searchStr) != -1;
            });
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();

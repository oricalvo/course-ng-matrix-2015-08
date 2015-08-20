(function () {

    function HomeCtrl($scope) {
        $scope.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];

        $scope.add = function () {
            var contact = {
                id: -1,
                name: $scope.name,
            };

            $scope.contacts.push(contact);
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();

(function () {

    function HomeCtrl($scope) {
        $scope.birthday = new Date();

        $scope.run = function () {
            $scope.contacts.push({ id: -1, name: "Udi" });

            $scope.contacts[0].name += "X";
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();

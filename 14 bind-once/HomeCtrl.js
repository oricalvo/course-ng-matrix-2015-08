(function () {

    function HomeCtrl($scope) {
        $scope.url = "/Admin.html";

        var ori = { id: 1, name: "Ori" };
        var roni = { id: 2, name: "Roni" };

        $scope.contacts = [
            ori,
            roni,
        ];

        $scope.run = function () {
            $scope.contacts.push({ id: -1, name: "Udi" });

            $scope.contacts[0].name += "X";
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();

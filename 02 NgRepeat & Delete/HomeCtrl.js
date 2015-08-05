(function () {

    function HomeCtrl($scope) {
        $scope.message = "Hello Angular";

        $scope.sayHello = function () {
            alert("Hello Ng");
        }

        $scope.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];

        $scope.remove = function (index) {
            $scope.contacts.splice(index, 1);
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();

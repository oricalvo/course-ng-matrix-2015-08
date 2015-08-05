(function () {

    function HomeCtrl($scope, $rootScope) {
        this.message = "Hello Angular";

        $rootScope.mydata = 123;

        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];

        $scope.$watch("ctrl.data", function (newValue, oldValue) {
            if (newValue == oldValue) {
                return;
            }

            console.log(oldValue + " --> " + newValue);
        });
    }

    HomeCtrl.prototype.change = function () {
        this.data = "XXX";
    }

    HomeCtrl.prototype.remove = function (index) {
        this.contacts.splice(index, 1);

        this.$http.post("/api/contact/delete");
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();

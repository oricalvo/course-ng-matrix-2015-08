(function () {

    function HomeCtrl($http) {
        this.message = "Hello Angular";

        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];

        this.$http = $http;
    }

    HomeCtrl.prototype.sayHello = function () {
        alert("Hello Ng");
    }

    HomeCtrl.prototype.remove = function (index) {
        this.contacts.splice(index, 1);

        this.$http.post("/api/contact/delete");
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();

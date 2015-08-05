class HomeCtrl {
    message: string;
    contacts: Contact[];

    constructor($interval) {
        this.message = "Hello Angular";

        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];

        //var me = this;
        //$interval(function () {
        //    me.message += "X";
        //}, 1000);

        $interval(() => {
            this.message += "X";
        }, 1000);
    }

    sayHello() {
        alert("Hello Ng");
    }

    remove(index) {
        this.contacts.splice(index, 1);
    }
}

interface Contact {
    id: number;
    name: string;
}

declare var angular;

angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

/*(function () {


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
})();*/

(function () {

    //function ContactServiceFactory ($rootScope) {
    //    console.log("contactService factory");

    //    var contacts = [
    //        { id: 1, name: "Ori" },
    //        { id: 2, name: "Roni" },
    //    ];

    //    return {
    //        getAll: function () {
    //            return contacts;
    //        },
    //        add: function (contact) {
    //            contacts.push(contact);

    //            $rootScope.$broadcast("contactAdded", contact);
    //        }
    //    };
    //}

    //angular.module("MyApp").factory("contactService", ContactServiceFactory);

    //angular.module("MyApp").value("jQuery", $);

    function ContactService ($rootScope) {
        console.log("contactService factory");

        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];

        this.$rootScope = $rootScope;
    }

    ContactService.prototype.getAll = function () {
        return this.contacts;
    };

    ContactService.prototype.add = function (contact) {
        this.contacts.push(contact);

        this.$rootScope.$broadcast("contactAdded", contact);
    }

    angular.module("MyApp").service("contactService", ContactService);

})();

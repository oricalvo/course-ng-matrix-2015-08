(function () {

    var cachingEnabled = false;

    angular.module("MyApp").provider("contactService", {
        $get: function ($rootScope) {
            console.log("contactService factory");

            var contacts = [
                { id: 1, name: "Ori" },
                { id: 2, name: "Roni" },
            ];

            return {
                getAll: function () {
                    if (cachingEnabled) {
                    }

                    return contacts;
                },
                add: function (contact) {
                    contacts.push(contact);

                    $rootScope.$broadcast("contactAdded", contact);
                }
            };
        },
        enableCaching: function (enabled) {
            console.log("enableCaching: " + enabled);

            cachingEnabled = enabled;
        }
    });

})();

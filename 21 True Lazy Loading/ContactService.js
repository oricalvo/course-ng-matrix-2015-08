define([], function () {

    var cachingEnabled = false;

    window.$provide.factory("contactService", function () {
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
    });
});

(function () {

    angular.module("MyApp").factory("contactService", function ($http, $q) {

        var contacts = null;

        function delay(timeout, result) {
            var deferred = $q.defer();

            setTimeout(function () {
                deferred.resolve(result);
            }, timeout);

            return deferred.promise;
        }

        return {
            getAll: function () {

                if (contacts) {
                    console.log("FROM CACHE");

                    return $q.when(contacts);
                }

                return $http.get("/contacts.html").then(function (response) {
                    console.log("FROM SERVER");

                    //throw new Error("Ooops");
                    //return $q.reject(new Error("Ooops"));

                    return delay(2500, contacts = response.data);
                });
            }
        };
    });

})();

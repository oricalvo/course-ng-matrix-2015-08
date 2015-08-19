angular.module("MyApp", ["ui.router"])
    .config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "/Home.html",
                controller: "HomeCtrl",
            })
            .state("admin", {
                url: "/admin",
                templateUrl: "/Admin.html",
                controller: "AdminCtrl",
                resolve: {
                    delayedData: function ($q) {
                        var deferred = $q.defer();

                        setTimeout(function () {
                            deferred.resolve();
                        }, 2500);

                        return deferred.promise;
                    }
                }
            })
            .state("admin.users", {
                url: "/users",
                templateUrl: "/Users.html",
            });

        $urlRouterProvider.otherwise("/");
    })
    .run(function ($rootScope) {
    });

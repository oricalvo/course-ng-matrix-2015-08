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
            })
            .state("admin.users", {
                url: "/users",
                templateUrl: "/Users.html",
            });

        $urlRouterProvider.otherwise("/");
    })
    .run(function ($rootScope) {
    });

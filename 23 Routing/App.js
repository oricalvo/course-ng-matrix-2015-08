angular.module("MyApp", ["ngRoute"])
    .config(function ($locationProvider, $routeProvider) {
        //$locationProvider.html5Mode(true);

        $routeProvider
            .when("/", {
                templateUrl: "Home.html",
                controller: "HomeCtrl",
            })
            .when("/about", {
                templateUrl: "About.html",
                controller: "AboutCtrl",
            })
            .otherwise({
                redirectTo: "/",
            });
    })
    .run(function ($rootScope) {
        $rootScope.$on("$locationChangeStart", function (e) {
            console.log("Location changed");
            console.log(e);
        });
    });

angular.module("MyApp", [])
    .config(function (contactServiceProvider, $provide) {
        contactServiceProvider.enableCaching(true);
    })
    .run(function () {
    });



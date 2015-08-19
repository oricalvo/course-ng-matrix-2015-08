angular.module("MyApp", [])
    .config(function ($provide) {
        window.$provide = $provide;
    })
    .run(function () {
    });



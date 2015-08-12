angular.module("MyApp", []).run(function ($rootScope) {
    $rootScope.dateFormat = 'dd/MM/yyyy';
});

angular.module("MyApp").filter("mydate", function ($http, $compile) {
    return function (value, format) {
        return "XXX:" + format;
    }
});





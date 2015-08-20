angular.module("MyApp", []).run(function ($compile, $rootScope) {

    var template = angular.element("<span>{{name}}</span>");

    var linkFn = $compile(template);

    var scope = $rootScope.$new();
    scope.name = "Ori";

    linkFn(scope);

    scope.$apply();

    console.log(template[0].outerHTML);

    scope.name = "Roni";

    scope.$apply();

    console.log(template[0].outerHTML);

});




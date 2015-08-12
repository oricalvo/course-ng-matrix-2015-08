(function (module) {

    function ContentCtrl($scope, $rootScope) {
        //console.log("ContentCtrl was created: " + $scope.$id);

        var off = $rootScope.$on("pageChanged", function (e, page) {
            $scope.page = page;

            console.log("pageChanged: " + $scope.$id);
        });

        $scope.$on("$destroy", function () {
            off();
        });
    }

    angular.module("MyApp").controller("ContentCtrl", ContentCtrl);
})();


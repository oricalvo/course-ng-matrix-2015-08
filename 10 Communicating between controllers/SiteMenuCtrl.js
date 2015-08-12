(function (module) {

    function SiteMenuCtrl($scope, $rootScope) {
        $scope.pages = [
            "File",
            "Admin",
            "About"
        ];

        $scope.changePage = function (page) {

            $scope.currentPage = page;

            $rootScope.$emit("pageChanged", page);
            //$rootScope.$broadcast("pageChanged", page);
        }
    }

    angular.module("MyApp").controller("SiteMenuCtrl", SiteMenuCtrl);
})();


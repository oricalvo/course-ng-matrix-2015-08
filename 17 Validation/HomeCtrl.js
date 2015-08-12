(function () {

    function HomeCtrl($scope) {
        $scope.save = function () {

            $scope.form.$submitted = false;

            if ($scope.name == $scope.email) {
                $scope.form.name.$setValidity("strangeName", false);
            }
            else {
                $scope.form.name.$setValidity("strangeName", true);
            }

            if ($scope.form.$invalid) {
                return;
            }

            //
            //  Save to the server
            //
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();

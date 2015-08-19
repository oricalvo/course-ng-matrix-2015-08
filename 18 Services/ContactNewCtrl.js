(function () {

    function ContactNewCtrl($scope, contactService) {
        $scope.add = function () {
            var contact = { id: -1, name: $scope.name };
            contactService.add(contact);
        }
    }

    angular.module("MyApp").controller("ContactNewCtrl", ContactNewCtrl);

})();

(function () {

    angular.module("MyApp").directive("datepicker", function () {
        return {
            restrict: "A",
            require: "?ngModel",
            compile: function (element) {
                console.log("datepicker:compile");

                //element.datepicker();

                return function postLink(scope, element, attrs, ctrl) {
                    console.log("ngModel: " + !!ctrl);

                    var ngModel = ctrl;
                    if (ngModel) {
                        console.log(ngModel);

                        ngModel.$parsers.push(function (viewValue) {

                            var date = moment(viewValue, "M/D/YYYY").toDate();

                            return date;
                        });

                        ngModel.$formatters.push(function (modelValue) {
                            if (!modelValue) {
                                return "";
                            }

                            var str = moment(modelValue).format("M/D/YYYY");
                            return str;
                        });
                    }

                    element.datepicker();
                }
            }
        };
    });

})();

(function () {

    angular.module("MyApp").directive("tab", function () {
        return {
            restrict: "E",
            link: function () {
            },
            controller: function () {
                this.addPane = function (pane) {
                    console.log("Pane was added");
                }
            }
        };
    });

    angular.module("MyApp").directive("pane", function () {
        return {
            restrict: "E",
            require: "^tab",
            link: function (scope, element, attrs, tab) {
                tab.addPane(this);
            },
            scope: {
            }
        };
    });

})();

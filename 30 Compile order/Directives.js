(function () {

    angular.module("MyApp").directive("dir1", function () {
        return {
            restrict: "E",
            compile: function () {
                console.log("dir1:compile");

                return {
                    pre: function () {
                        console.log("dir1:prelink");
                    },
                    post: function () {
                        console.log("dir1:postlink");
                    }
                };
            }
            //link: function () {
            //}
        };
    });

    angular.module("MyApp").directive("dir2", function () {
        return {
            restrict: "E",
            compile: function () {
                console.log("dir2:compile");

                return {
                    pre: function () {
                        console.log("dir2:prelink");
                    },
                    post: function () {
                        console.log("dir2:postlink");
                    }
                };
            }
        };
    });

})();

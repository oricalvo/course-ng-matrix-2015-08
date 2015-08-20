(function () {

    function ClockController($scope, $attrs, $parse, $interval) {
        this.time = new Date();
        this.intervalId = null;
        this.$interval = $interval;

        if ($attrs.name) {
            $scope.$parent[$attrs.name] = this;
        }

        this.start();
    }

    ClockController.prototype.start = function () {
        var me = this;

        if (me.intervalId) {
            return;
        }

        me.intervalId = me.$interval(function () {
            me.time = new Date();
            me.onTick({ time: me.time });
        }, 1000);
    }

    ClockController.prototype.stop = function () {
        if (this.intervalId) {
            this.$interval.cancel(this.intervalId);
            this.intervalId = null;
        }
    }

    angular.module("MyApp").directive("clock", function () {
        var ddo = {
            templateUrl: "/Clock_Prototype.html",
            controller: ClockController,
            controllerAs: "ctrl",
            bindToController: true,
            scope: {
                format: "=", // this is a two way data binding
                onTick: "&",
            }
        };

        return ddo;
    });

})();

(function () {

    angular.module("MyApp").directive("grid", function () {
        return {
            restrict: "E",
            compile: function (element) {

                var columns = [];

                element.find("column").each(function () {
                    var column = $(this);

                    var jqTemplate = column.find("template");
                    if (jqTemplate.length) {
                        var template = jqTemplate.html();
                        console.log(template);
                    }
                    else {
                        var field = column.find("field").text();
                    }
                    var title = column.find("title").text();

                    columns.push({
                        field: field,
                        title: title,
                    });
                });

                element.empty();

                console.log(columns);

                return function postLink(scope, element) {
                    if (!scope.model) {
                        return;
                    }

                    var table = $("<table />");
                    element.append(table);

                    var thead = $("<thead />");
                    table.append(thead);

                    var tbody = $("<tbody />");
                    table.append(tbody);

                    var tr = $("<tr />");
                    thead.append(tr);

                    columns.forEach(function (column) {
                        var td = $("<td />");
                        td.text(column.title);
                        tr.append(td);
                    });

                    scope.$watchCollection("model", function (model) {

                        tbody.empty();

                        scope.model.forEach(function (dataItem) {
                            tr = $("<tr />");
                            tbody.append(tr);

                            columns.forEach(function (column) {
                                var td = $("<td />");
                                td.text(dataItem[column.field]);
                                tr.append(td);
                            });
                        });
                    });
                }
            },
            terminal: true,
            scope: {
                model: "=",
            },
        };
    });

})();

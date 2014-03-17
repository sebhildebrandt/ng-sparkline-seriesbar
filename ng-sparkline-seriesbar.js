angular.module("charts.ng.sparkline.seriesbar", [])
    .directive('ngSparklineSeriesbar', function () {
        'use strict';
        return {
            restrict: 'E',
            scope: {
                id: '@',
                value: '=',
                height: '@',
                barColor: '@',
                barWidth: '@',
                barSpacing: '@',
                tooltipSuffix: '@',
                tooltipPrefix: '@',
                numberDigitGroupSep: '@',
                numberDecimalMark: '@',
                colorMap: '@',
                points: '=myPoints',
                maxPoints: '=',
                chartRangeMin: '@',
                chartRangeMax: '@',
                tooltipClassname: '@',
                init: '@'
            },
            template: '<span id="{{id}}-sparktracker">Loading</span>',
            replace: false,
            link: function (scope, elem, attrs) {

                var render = function () {

                    var colorMap = null;
                    if (typeof scope.colorMap !== 'undefined') {
                        var customColors = {};
                        var csParse = scope.colorMap.split(' ')
                        csParse.forEach(function(element){
                            element = element.split('-');
                            customColors[element[0] + ':' + element[1]] = element[2]
                        });
                        colorMap = $.range_map(customColors);
                    }


                    $(elem).sparkline(scope.myPoints, { 
                        type: 'bar',
                        height: scope.height || 20,
                        barColor: scope.barColor || '#3f7f00',
                        barWidth: scope.barWidth || 4,
                        barSpacing: scope.barSpacing || 1,
                        tooltipSuffix: angular.isDefined(scope.tooltipSuffix) ? ' ' + scope.tooltipSuffix : '',
                        tooltipPrefix: angular.isDefined(scope.tooltipPrefix) ? scope.tooltipPrefix + ' ' : '',
                        numberDigitGroupSep: scope.numberDigitGroupSep,
                        numberDecimalMark: scope.numberDecimalMark,
                        colorMap: colorMap,
                        chartRangeMin: angular.isDefined(scope.chartRangeMin) ? scope.chartRangeMin : undefined,
                        chartRangeMax: angular.isDefined(scope.chartRangeMax) ? scope.chartRangeMax : undefined,
                        tooltipClassname: angular.isDefined(scope.tooltipClassname) ? scope.tooltipClassname : undefined
                    });
                }

                scope.myPoints = scope.myPoints || [];
                if (scope.init) {     // init with 0 values
                    for (var i = 0; i < scope.maxPoints; i++) {
                        scope.myPoints.push(0);
                    };
                }

                render();

                scope.$watch('value', function (updatedValue, oldValue, scope) {
                    scope.myPoints.push(updatedValue);    
                    scope.myPoints = scope.myPoints.filter(function(e) {return e !== undefined})

                    if (scope.myPoints.length > scope.maxPoints)
                        scope.myPoints.splice(0,1);
                    render();
                }, true);

            }
        }
    })
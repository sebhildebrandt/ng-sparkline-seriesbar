angular.module("charts.ng.sparkbartracker", [])
    .directive('sparklineBartrack', function () {
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
                points: '=myPoints',
                maxPoints: '='
            },
            template: '<span id="{{id}}-sparktracker">Loading</span>',
            replace: false,
            link: function (scope, elem, attrs) {

                var render = function () {

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
                        chartRangeMin: 0
                    });
                }

                scope.myPoints = scope.myPoints || [];
                render();

                scope.$watch('value', function (updatedValue, oldValue, scope) {
                    scope.myPoints.push(updatedValue);    

                    if (scope.myPoints.length > scope.maxPoints)
                        scope.myPoints.splice(0,1);
                    render();
                }, true);

            }
        }
    })
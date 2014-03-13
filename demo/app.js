angular.module('app', ['charts.ng.sparkline.seriesbar']).controller('myController', function($scope) {
    $scope.valuespark = 0;

    function getRandomInt (min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}

    setInterval(function(){
        $scope.$apply(function() {
            $scope.valuespark = getRandomInt(10, 90);
        });
    }, 300);
});

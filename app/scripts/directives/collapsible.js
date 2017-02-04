'use strict';
eventsApp.directive('collapsible', function () {
    // Directive defination object
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        template: '<div><h4 ng-click="toggle();">{{name}}</h4><div ng-show="visible" ng-transclude></div></div>',
        scope: {
            name: '@'
        },
        controller: function($scope) {
            $scope.visible = false;
            $scope.toggle = function() {
                $scope.visible = !$scope.visible;
            }
        },
    };
});
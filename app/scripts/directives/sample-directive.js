eventsApp.directive('mySample', function() {
    return {
        restrict: 'EAC',
        replace: true,
        scope: {
            
        },
        template: "<div><input tyep='text' ng-model='demoText' /> {{demoText}}</div>"
    };
})
.directive('observe', function() {
    return {
        restrict: 'E',
        link: function(scope, elem, attrs, controller) {}
    };
})
.directive('greeting', function() {
    return {
        restrict: 'E',
        transclude: true,
        template: "<div><button class='btn' ng-click='sayHello()'>SayHello</button><div ng-transclude></div></div>",
        link: function(scope) {
        },
        controller:"greetingCtrl"
    };
})
.directive('french', function() {
    return {
        require:'^greeting',
        restrict: 'A',
        link: function(scope, elem, attrs, controller) {
            controller.addMessage('Hola');
        }
    };
})
.directive('hindi', function() {
    return {
        require:'^greeting',
        restrict: 'A',
        link: function(scope, elem, attrs, controller) {
            controller.addMessage('Namaste');
        }
    };
})
.directive('datePicker', function() {
    return {
        link: function(scope, elem, attrs, controller) {
            console.log('$:');
        console.log($);

            $(elem).datepicker();
        }
    };
});

eventsApp.controller('greetingCtrl', function($scope) {
    var greetings = ['Hello'];
    $scope.sayHello = function() {
        alert(greetings.join());
    };
    this.addMessage = function(greeting) {
        greetings.push(greeting);
    }
});
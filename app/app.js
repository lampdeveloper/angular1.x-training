'use strict';

// Declare app level module which depends on views, and components
var apiUrl = "http://0.0.0.0:3000/api/";
var eventsApp = angular.module('eventsApp', ['ngRoute'])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider.when('/newEvent', {
                templateUrl: 'templates/new-event.html',
                controller: 'newEventCtrl'
            });
            $routeProvider.when('/eventList', {
                templateUrl: 'templates/event-list.html',
                controller: 'eventListCtrl'
            });
            $routeProvider.when('/eventDetails/:eventId/', {
                foo: 'bar',
                templateUrl: 'templates/event-details.html',
                controller: 'eventDetailsCtrl',
                resolve: {
                    eventDetails: function ($route, Events, $routeParams) {
                        return Events.get($route.current.params.eventId);
                    }
                }
            });

            $routeProvider.otherwise({redirectTo: '/eventList'});

            //$locationProvider.html5Mode(true);
        });

'use strict';
eventsApp.service('Events', function ($q, $http, API_URL) {
    var Events = {};
    Events.get = function (id) {
        if (!id) {
            throw 'Missing parameter "id"';
        }
        var dfd = $q.defer();
        $http({
            method: 'GET',
            url: API_URL + 'events/' + id
        }).success(function (response) {
            dfd.resolve(response);
        }).error(function (error) {
            dfd.reject(error);
        });
        return dfd.promise;
    };

    Events.list = function () {
        var dfd = $q.defer();
        $http({
            method: 'GET',
            url: API_URL + 'events',
            params: {}
        }).success(function (response) {
            dfd.resolve(response);
        }).error(function (error) {
            dfd.reject(error);
        });

        return dfd.promise;
    };
    Events.create = function (data) {
        var dfd = $q.defer();
        if (!data) {
            throw 'Missing parameter "data"';
        }
        $http({
            method: 'POST',
            url: API_URL + 'events',
            data: data
        }).success(function (response) {
            dfd.resolve(response);
        }).error(function (error) {
            dfd.reject(error);
        });

        return dfd.promise;
    };
    Events.save = function (id, data) {
        var dfd = $q.defer();
        if (!id) {
            throw 'Missing parameter "id"';
        }
        $http({
            method: 'PUT',
            url: API_URL + 'events/' + id,
            data: data
        }).success(function (response) {
            dfd.resolve(response);
            return response;
        }).error(function (error) {
            dfd.reject(error);
        });

        return dfd.promise;
    };

    Events.remove = function (id) {
        var dfd = $q.defer();
        if (!id) {
            throw 'Missing parameter "id"';
        }
        $http({
            method: 'DELETE',
            url: API_URL + 'events/' + id,
        }).success(function (response) {
            dfd.resolve(response);
            return response;
        }).error(function (error) {
            dfd.reject(error);
        });

        return dfd.promise;
    };

    return Events;
});
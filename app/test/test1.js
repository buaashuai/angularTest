'use strict';
describe("Counter", function() {
    var settingService,httpBackend;
    var scope, controllerFactory,http;
    beforeEach(module('phonecatServices'));
    beforeEach(function() {
        module('phonecatServices');

        inject(function(SearchSettingService, $httpBackend) {
            settingService = SearchSettingService;
            httpBackend = $httpBackend;
            var expected = {
                "period": "day",
                "date": "Sat Dec 21 12:56:53 EST 2013",
            };
            httpBackend.whenGET('/settings.json').respond(200,expected);
            //httpBackend.flush();
        });
    });

    //beforeEach(function() {
    //    module('myApp.view1');
    //    inject(function($rootScope, $controller, $q,$http) {
    //        controllerFactory = $controller;
    //        scope = $rootScope.$new();
    //        http=$http;
    //        q = $q;
    //    });
    //});

    it("should say Hi given a name", function() {
        sayHi("Tom").should.equal("Hi Tom");
  });

    it("should not say Hi if no input", function() {
        sayHi().should.equal("Nobody comes");
 });

    it('Total Load data success', function() {
        var result;
        var expected = {
            "period": "day",
            "date": "Sat Dec 21 12:56:53 EST 2013",
        };

        //httpBackend.expectGET('/settings.json').respond(expected);

        var promise = settingService.setting();
        promise.then(function(data) {
            console.log(data);
            result = data;
            alert(result);
            //var expect = require('chai').expect;
            //expect(result).toEqual(expected);
        });

        httpBackend.flush();

        //
    });
 });
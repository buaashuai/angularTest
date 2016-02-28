///**
// * Created by dell on 2015/11/3.
// */
//describe("Counter2", function() {
//    var scope,$httpBackend, $rootScope, createController, authRequestHandler;
//    //var settingService,httpBackend;
//    //beforeEach(function() {
//    //    module('phonecatServices');
//    //
//    //    inject(function(SearchSettingService, $httpBackend,$injector) {
//    //        httpBackend = $injector.get('$httpBackend');;
//    //        settingService = SearchSettingService;
//    //    });
//    //});
//
//    beforeEach(function() {
//        module('myApp.view1');
//        module('phonecatServices');
//        inject(function($injector,$http,Phone,SearchSettingService) {
//            $httpBackend = $injector.get('$httpBackend');
//
//            // backend definition common for all tests
//            authRequestHandler = $httpBackend.when('GET', '/settings.json')
//                .respond({userId: 'userX'}, {'A-Token': 'xxx'});
//
//            // Get hold of a scope (i.e. the root scope)
//            $rootScope = $injector.get('$rootScope');
//            scope = $rootScope.$new();
//            // The $controller service is used to create instances of controllers
//            var $controller = $injector.get('$controller');
//
//           // .controller('View1Ctrl', ['$scope','$http','Phone','SearchSettingService',function($scope,$http,Phone,SearchSettingService) {
//            createController = function() {
//                return $controller('View1Ctrl', {'$scope' : scope,'$http':$http,'Phone':Phone,'SearchSettingService':SearchSettingService });
//            };
//
//
//        });
//    });
//    it('should fetch authentication token', function() {
//        $httpBackend.expectGET('/settings.json');
//        var controller = createController();
//        scope.$digest();
//        $httpBackend.flush();
//    });
//    //afterEach(function() {
//    //    $httpBackend.verifyNoOutstandingExpectation();
//    //    $httpBackend.verifyNoOutstandingRequest();
//    //});
//
//    it("should say Hi given a name", function() {
//        sayHi("Tom").should.equal("Hi Tom");
//    });
//
//    it("should not say Hi if no input", function() {
//        sayHi().should.equal("Nobody comes");
//    });
//
//    it('should have settings from http request', function() {
//        //var result;
//        //var expected = {
//        //    "period": "day",
//        //    "date": "Sat Dec 21 12:56:53 EST 2013",
//        //};
//        //
//        //httpBackend.expectGET('/settings.json').respond(expected);
//        //
//        //var promise = settingService.setting();
//        //promise.then(function(data) {
//        //    console.log(data);
//        //    result = data;
//        //});
//        //
//        //httpBackend.flush();
//
//        //expect(result).toEqual(expected);
//    });
//});
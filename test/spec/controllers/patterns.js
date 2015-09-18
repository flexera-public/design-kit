'use strict';

describe('Controller: PatternsCtrl', function () {

  // load the controller's module
  beforeEach(module('designkitApp'));

  var PatternsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PatternsCtrl = $controller('PatternsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Controller: ComponentsCtrl', function () {

  // load the controller's module
  beforeEach(module('designkitApp'));

  var ComponentsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComponentsCtrl = $controller('ComponentsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ComponentsCtrl.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Controller: SpritesCtrl', function () {

  // load the controller's module
  beforeEach(module('designkitApp'));

  var SpritesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpritesCtrl = $controller('SpritesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SpritesCtrl.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Controller: IconsCtrl', function () {

  // load the controller's module
  beforeEach(module('designkitApp'));

  var IconsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IconsCtrl = $controller('IconsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of icons to the scope', function () {
    expect(scope.icons.length).toBe(18);
  });
});

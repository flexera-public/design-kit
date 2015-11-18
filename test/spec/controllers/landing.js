'use strict';

describe('Controller: LandingCtrl', function () {

  // load the controller's module
  beforeEach(module('designkitApp'));

  var LandingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LandingCtrl = $controller('LandingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of cards to the scope', function () {
    expect(scope.cards.length).toBe(7);
  });
});

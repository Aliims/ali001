'use strict';

describe('Component: Sta001Component', function () {

  // load the controller's module
  beforeEach(module('ali001App'));

  var Sta001Component, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    Sta001Component = $componentController('Sta001Component', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});

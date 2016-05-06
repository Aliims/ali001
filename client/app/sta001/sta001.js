'use strict';

angular.module('ali001App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sta001', {
        url: '/sta001',
        template: '<sta-001></sta-001>'
      });
  });

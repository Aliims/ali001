'use strict';

angular.module('ali001App.auth', [
  'ali001App.constants',
  'ali001App.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });

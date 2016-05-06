'use strict';
(function(){

class Sta001Component {
  constructor() {
    this.message = 'Hello';
  }

  getCount(num) {
  	console.log("getCount "+num);
    return new Array(num);
  }

}

angular.module('ali001App')
  .component('sta001', {
    templateUrl: 'app/sta001/sta001.html',
    controller: Sta001Component
  });

})();

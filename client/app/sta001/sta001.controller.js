'use strict';
(function(){

class Sta001Component {
  constructor() {
    this.message = 'Hello';
    this.barcode = '01234567890';
  }

  getCount(num) {
    console.log("getCount "+num);
    return new Array(num);
  }

  addSta001() {
  	console.log("sta001");
  }

}

angular.module('ali001App')
  .component('sta001', {
    templateUrl: 'app/sta001/sta001.html',
    controller: Sta001Component
  });

})();

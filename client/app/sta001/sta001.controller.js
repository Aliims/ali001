'use strict';
(function(){

class Sta001Component {
  constructor() {
    this.isBarcodeKitPreviewEnabled = false;
    this.kitBarcode = "";
    this.productCount = 1;
    this.productCodes = Array(this.productCount);
  }

  updateKitBarcode() {
    var tmp = "";
    if (this.newSta001.input.kitCode) {
      tmp += "kC"+this.newSta001.input.kitCode;
    }
    if (this.newSta001.input.lot) {
      tmp += "l"+this.newSta001.input.lot;
    }
    if (this.newSta001.input.expiry) {
      tmp += "e"+this.newSta001.input.expiry;
    }
    for (var productCode in this.newSta001.input.productCodes) {
      console.log("XXXXXXXXXXXXXXXXXX");
      if (productCode == "0") {
      	console.log(this.newSta001.input.productCodes.0);
        tmp += "pC"+productCode;
      }
    }
    // console.log(this.newSta001.input.productCodes);
    // for each (productCode in this.newSta001.input.productCodes) {
    //   if (productCode) {
    //     tmp += "pC"+productCode;
    //   }
    // }
    // if (this.isBarcodeKitPreviewEnabled) { this.generateBarcodeKitPreview(tmp);}
    this.kitBarcode = tmp;
    console.log("updateKitBarcode() with this.isBarcodeKitPreviewEnabled = "+this.isBarcodeKitPreviewEnabled+" and this.kitBarcode = "+this.kitBarcode);
  }

  generateBarcodeKitPreview(barcodeKit) {
    if ( document.body.getElementsByClassName('barcodeKitPreview')[0] ) {
      var O = document.body.getElementsByClassName('barcodeKitPreview')[0];
      // var I = document.body.getElementsByClassName('barcodeKit')[0].innerHTML.replace(/['"]+/g, '');
      console.log("barcodeKit: "+barcodeKit);
      // console.log("I: "+I);
      
      // JsBarcode(O, I, {
      JsBarcode(O, barcodeKit, {
        height:30//,
        // displayValue: false
      });
      console.log("generateBarcodeKitPreview()");
    };
  }

  addProductCode() {
    this.productCount += 1;
  }

  removeProductCode() {
    this.productCount -= 1;
  }

  getProductCode() {
    return this.productCount;
  }

  getProductCodeIterator() {
  	arr = new Array();
  	for (var i = 0; i < this.productCount; i++) {
  		Things[i]
  	}
    return new Array(this.productCount);
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

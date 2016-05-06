'use strict';
(function(){

class Sta001Component {
  constructor() {
    this.isKitBarcodePreviewEnabled = false;
    this.kitBarcode = "";
    this.productCodes = [];
  }

  updateKitBarcode(source) {
    var tmp = "";
    switch(source) {
      case 'kitCode':
        if (this.newSta001.input.kitCode) {
          tmp += "kC"+this.newSta001.input.kitCode;
        }
        break;
      case 'lot':
        if (this.newSta001.input.lot) {
          tmp += "l"+this.newSta001.input.lot;
        }
        break;
      case 'expiry':
        if (this.newSta001.input.expiry) {
          tmp += "e"+this.newSta001.input.expiry;
        }
        break;
      case 'productCode':
        
        // REFERENCE A GARDER
        // for (var key in this.newSta001.input.productCodes) {
        //   console.log(key);
        //   // console.log(this.newSta001.input.productCodes);
        //   // console.log(JSON.stringify(this.newSta001.input.productCodes));
        //   // console.log(this.newSta001.input.productCodes["0"]);
        //   console.log(this.newSta001.input.productCodes[key.toString()]);
        // }

        for (var i = 0; i < this.productCodes.length; i++) {
          if (this.productCodes[i] != "") {
            tmp += "pC"+i+this.productCodes[i];
          }
        }
        break;
      default:
        console.log("shit!");
    }

    this.kitBarcode = tmp;
    console.log("updateKitBarcode() with this.isKitBarcodePreviewEnabled = "+this.isKitBarcodePreviewEnabled+" and this.kitBarcode = "+this.kitBarcode);
  }

  generateKitBarcodePreview(barcodeKit) {
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
      console.log("generateKitBarcodePreview()");
    };
  }

  addProductCode() {
    this.productCodes.push("");
  }

  removeProductCode() {
    this.productCodes.pop();
    this.updateKitBarcode();
  }

  getProductCodesLength() {
    return this.productCodes.length;
  }

  getProductCodes() {
    return this.productCodes;
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

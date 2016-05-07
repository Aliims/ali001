'use strict';
(function(){

class Sta001Component {
  constructor() {
    this.isBarcodePreviewEnabled = false;
    this.kitBarcode = "";
    this.productCodes = [];
    this.parameters = [];
    // this.cutoff = 15;
  }

  updateKitBarcode(source) {
    var tmp = "";
    if (source == 'kitCode') {
        if (this.newSta001.input.kitCode) {
          tmp += "kC"+this.newSta001.input.kitCode;
          console.log("updateKitBarcode: kitCode");
        }
    } else if (source == 'kitLot') {
        if (this.newSta001.input.kitLot) {
          tmp += "kL"+this.newSta001.input.kitLot;
          console.log("updateKitBarcode: kitLot");
        }
    } else if (source == 'kitExpiry') {
        if (this.newSta001.input.kitExpiry) {
          tmp += "kE"+this.newSta001.input.kitExpiry;
          console.log("updateKitBarcode: kitExpiry");
        }
    } else if (source == 'countProductCodes') {
        if (this.newSta001.input.countProductCodes) {
          while(this.productCodes.length < this.newSta001.input.countProductCodes) {
            this.productCodes.push("");
          }
          while(this.productCodes.length > this.newSta001.input.countProductCodes) {
            this.productCodes.pop();
          }
          tmp += "cPC"+this.newSta001.input.countProductCodes;
          console.log("updateKitBarcode: countProductCodes");
        }
    } else if (source.startsWith('productCode')) {
      var index = source.charAt(source.length-1);
      if (this.newSta001.input.productCodes[index.toString()]) {
        this.productCodes[index] = this.newSta001.input.productCodes[index.toString()];
        tmp += "pC"+index+this.productCodes[index];
        console.log("updateKitBarcode: productCode "+index);
      }
    } else if (source == 'countParameters') {
        if (this.newSta001.input.countParameters) {
          while(this.parameters.length < this.newSta001.input.countParameters) {
            this.parameters.push("");
          }
          while(this.parameters.length > this.newSta001.input.countParameters) {
            this.parameters.pop();
          }
          tmp += "cP"+this.newSta001.input.countParameters;
          console.log("updateKitBarcode: countParameters");
        }
    } else if (source.startsWith('parameter')) {
      var index = source.charAt(source.length-1);
      if (this.newSta001.input.parameters[index.toString()]) {
        this.parameters[index] = this.newSta001.input.parameters[index.toString()];
        tmp += "p"+index+this.parameters[index];
        console.log("updateKitBarcode: parameter "+index);
      }
    } else {      console.log("updateKitBarcode: oups!");
    }
    this.newSta001.input.kitBarcode = tmp;
    if (this.isBarcodePreviewEnabled) {
      this.generateKitBarcodePreview();
    };
  }

  generateKitBarcodePreview() {
    if ( document.body.getElementsByClassName('kitBarcodePreview')[0] ) {
      var O = document.body.getElementsByClassName('kitBarcodePreview')[0];
      // var I = this.newSta001.input.kitBarcode;
      var I = 'this.newSta001.input.kitBarcode';
      // I = I.replace(/['"]+/g, '');
      console.log("generateKitBarcodePreview: I = "+I);
      var X = I.match(/(.{1,15})/g);
      for (var i = 0; i < X.length; i++) {
        var y = "A"+(X.length+i)+X[i]+"A";
        console.log(i+": "+X[i]+" -> "+y);
        JsBarcode(O, y, {
          height:30
        });
        // document.body.appendChild(canvas);
      }
    };
  }

  getProductCodesLength() {
    return this.productCodes.length;
  }

  getProductCodes() {
    return this.productCodes;
  }

  getParameters() {
    return this.parameters;
  }

  saveSta001() {
    console.log("saveSta001()");
  }

  clearSta001() {
    this.isBarcodePreviewEnabled = false;
    this.kitBarcode = "";
    this.productCodes = [];
    this.parameters = [];
    this.newSta001 = null;
    console.log("clearSta001()");
  }
}

angular.module('ali001App')
  .component('sta001', {
    templateUrl: 'app/sta001/sta001.html',
    controller: Sta001Component
  });

})();

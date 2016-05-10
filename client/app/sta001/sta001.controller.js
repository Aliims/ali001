'use strict';
(function(){

class Sta001Component {
  constructor() {

    this.isProductBarcodesPreviewEnabled = false;
    this.productBarcodes = [];
    this.productBarcodeEncoding = [['A', 'A'], ['A', 'B'], ['A', 'C'], ['A', 'D'], ['B', 'A'], ['B', 'B'], ['B', 'C'], ['B', 'D'], ['C', 'A'], ['C', 'B']];

    this.parameters = [];

    this.isKitBarcodePreviewEnabled = false;
    this.kitBarcode = "";

    this.kitBarcodeEncodingCut = 15;
    this.kitBarcodeEncoding = [[['A0', 'A']], [['A1', 'A'], ['A2', 'A']], [['A3', 'A'], ['A4', 'A'], ['A5', 'A']], [['A6', 'A'], ['A7', 'A'], ['A8', 'A'], ['A9', 'A']], [['A$', 'A'], ['A-', 'A'], ['A:', 'A'], ['A/', 'A'], ['A.', 'A']], [['A+', 'A'], ['A0', 'B'], ['A1', 'B'], ['A2', 'B'], ['A3', 'B'], ['A4', 'B']], [['A5', 'B'], ['A6', 'B'], ['A7', 'B'], ['A8', 'B'], ['A9', 'B'], ['A$', 'B'], ['A-', 'B']], [['A:', 'B'], ['A/', 'B'], ['A.', 'B'], ['A+', 'B'], ['A0', 'C'], ['A1', 'C'], ['A2', 'C'], ['A3', 'C']], [['A4', 'C'], ['A5', 'C'], ['A6', 'C'], ['A7', 'C'], ['A8', 'C'], ['A9', 'C'], ['A$', 'C'], ['A-', 'C'], ['A:', 'C']], [['A/', 'C'], ['A.', 'C'], ['A+', 'C'], ['A0', 'D'], ['A1', 'D'], ['A2', 'D'], ['A3', 'D'], ['A4', 'D'], ['A5', 'D'], ['A6', 'D']], [['A7', 'D'], ['A8', 'D'], ['A9', 'D'], ['A$', 'D'], ['A-', 'D'], ['A:', 'D'], ['A/', 'D'], ['A.', 'D'], ['A+', 'D'], ['B0', 'A'], ['B1', 'A']], [['B2', 'A'], ['B3', 'A'], ['B4', 'A'], ['B5', 'A'], ['B6', 'A'], ['B7', 'A'], ['B8', 'A'], ['B9', 'A'], ['B$', 'A'], ['B-', 'A'], ['B:', 'A'], ['B/', 'A']], [['B.', 'A'], ['B+', 'A'], ['B0', 'B'], ['B1', 'B'], ['B2', 'B'], ['B3', 'B'], ['B4', 'B'], ['B5', 'B'], ['B6', 'B'], ['B7', 'B'], ['B8', 'B'], ['B9', 'B'], ['B$', 'B']], [['B-', 'B'], ['B:', 'B'], ['B/', 'B'], ['B.', 'B'], ['B+', 'B'], ['B0', 'C'], ['B1', 'C'], ['B2', 'C'], ['B3', 'C'], ['B4', 'C'], ['B5', 'C'], ['B6', 'C'], ['B7', 'C'], ['B8', 'C']], [['B9', 'C'], ['B$', 'C'], ['B-', 'C'], ['B:', 'C'], ['B/', 'C'], ['B.', 'C'], ['B+', 'C'], ['B0', 'D'], ['B1', 'D'], ['B2', 'D'], ['B3', 'D'], ['B4', 'D'], ['B5', 'D'], ['B6', 'D'], ['B7', 'D']], [['B8', 'D'], ['B9', 'D'], ['B$', 'D'], ['B-', 'D'], ['B:', 'D'], ['B/', 'D'], ['B.', 'D'], ['B+', 'D'], ['C', 'A'], ['C', 'A'], ['C', 'A'], ['C', 'A'], ['C', 'A'], ['C', 'A'], ['C', 'A'], ['C', 'A']], [['C', 'A'], ['C', 'A'], ['C', 'A'], ['C', 'A'], ['C', 'A'], ['C', 'A'], ['C', 'A'], ['C', 'A'], ['C', 'B'], ['C', 'B'], ['C', 'B'], ['C', 'B'], ['C', 'B'], ['C', 'B'], ['C', 'B'], ['C', 'B'], ['C', 'B']], [['C', 'B'], ['C', 'B'], ['C', 'B'], ['C', 'B'], ['C', 'B'], ['C', 'B'], ['C', 'B'], ['C', 'C'], ['C', 'C'], ['C', 'C'], ['C', 'C'], ['C', 'C'], ['C', 'C'], ['C', 'C'], ['C', 'C'], ['C', 'C'], ['C', 'C'], ['C', 'C']], [['C', 'C'], ['C', 'C'], ['C', 'C'], ['C', 'C'], ['C', 'C'], ['C', 'D'], ['C', 'D'], ['C', 'D'], ['C', 'D'], ['C', 'D'], ['C', 'D'], ['C', 'D'], ['C', 'D'], ['C', 'D'], ['C', 'D'], ['C', 'D'], ['C', 'D'], ['C', 'D'], ['C', 'D']], [['C', 'D'], ['C', 'D'], ['D', 'A'], ['D', 'A'], ['D', 'A'], ['D', 'A'], ['D', 'A'], ['D', 'A'], ['D', 'A'], ['D', 'A'], ['D', 'A'], ['D', 'A'], ['D', 'A'], ['D', 'A'], ['D', 'A'], ['D', 'A'], ['D', 'A'], ['D', 'A'], ['D', 'B'], ['D', 'B']]];
  }

  generateParameters() {
    for (var i in this.newSta001.input.parameters) {
      var parameter = this.newSta001.input.parameters[i.toString()];
      var s = "";
      s+= parameter.replace(/[.]+/g, '');
      this.parameters[i] = s;
      console.log("generateParameters() @["+i+
        "] with parameter = ["+parameter+
        "] --> parameter = ["+s+
        "] stored in parameters table");
    }
  }
  parametersCountChange() {
    var fromLength = this.parameters.length;
    var toLength = this.newSta001.input.parametersCount;
    if (fromLength < toLength) {
      while(this.parameters.length < toLength) {
        this.parameters.push("");
      }
    } else if (fromLength > toLength) {
      while(this.parameters.length > toLength) {
        this.parameters.pop();
      }
    } else {
      console.log("\n### error in parameterChange() ###\n");
    }
    console.log("parametersCountChange() from fromLength = ["+fromLength+
      "] to toLength = ["+toLength+
      "]");
  }
  getParameters() {
    return this.parameters;
  }

  generateProductBarcodes() {
    for (var i in this.newSta001.input.productCodes) {
      var productCode = this.newSta001.input.productCodes[i.toString()];
      var kitLot = this.newSta001.input.kitLot;
      var s = "";
      s+= this.productBarcodeEncoding[Number(kitLot.substr(3,1))][0];
      s+= this.hex2cod(Number(productCode).toString(16).toUpperCase()); // to hex hexString = yourNumber.toString(16); reverse with yourNumber = parseInt(hexString, 16);
      s+= kitLot.substr(4);
      s+= this.productBarcodeEncoding[Number(kitLot.substr(3,1))][1];
      this.productBarcodes[i] = s;
      console.log("generateProductBarcodes() @["+i+
        "] with productCode = ["+productCode+
        "] and kitLot = ["+kitLot+
        "] --> productBarcode = ["+s+
        "] stored in productBarcodes table");
    }
    if (this.isProductBarcodesPreviewEnabled) {
      this.generateProductBarcodesPreview();
    }
  }
  generateProductBarcodesPreview() {
    if (document.body.getElementsByClassName('list-unstyled productBarcodesPreview col-lg-12')[0]) {
      var img = document.body.getElementsByClassName('list-unstyled productBarcodesPreview col-lg-12')[0];
      while (img.firstChild) {
        img.removeChild(img.firstChild);
      }
      for (var i = 0; i < this.productBarcodes.length; i++) {
        var l = document.createElement("li");
        img.appendChild(l);
        var c = document.createElement("canvas");
        c.className += "col-lg-12";
        l.appendChild(c);
        JsBarcode(c, this.productBarcodes[i], {
          height:30
        });
        console.log("generateProductBarcodesPreview() @["+i+
          "] with productBarcode = ["+this.productBarcodes[i]+
          "] --> canvas in productBarcodesPreview");
      }
    };
  }
  productsCountChange() {
    var fromLength = this.productBarcodes.length;
    var toLength = this.newSta001.input.productsCount;
    if (fromLength < toLength) {
      while(this.productBarcodes.length < toLength) {
        this.productBarcodes.push("");
      }
    } else if (fromLength > toLength) {
      while(this.productBarcodes.length > toLength) {
        this.productBarcodes.pop();
      }
    } else {
      console.log("\n### error in productsCountChange() ###\n");
    }
    console.log("productsCountChange() from fromLength = ["+fromLength+
      "] to toLength = ["+toLength+
      "]");
  }
  getProductCodes() {
    return this.productBarcodes;
  }

  generateKitBarcode() {
    var kit = "";
    if (this.newSta001.input.kitLot) {
      var kitLot = this.newSta001.input.kitLot;
      kit += kitLot;
      console.log("generateKitBarcode() with kitLot = ["+kitLot+
        "]");
    }
    if (this.newSta001.input.kitCode) {
      var kitCode = this.newSta001.input.kitCode;
      kit += kitCode;
      console.log("generateKitBarcode() with kitCode = ["+kitCode+
        "]");
    }
    if (this.newSta001.input.kitExpiry) {
      var kitExpiry = this.newSta001.input.kitExpiry;
      kit += kitExpiry;
      console.log("generateKitBarcode() with kitExpiry = ["+kitExpiry+
        "]");
    }
    if (this.newSta001.input.productsCount) {
      var productsCount = this.newSta001.input.productsCount;
      kit += productsCount;
      console.log("generateKitBarcode() with productsCount = ["+productsCount+
        "]");
    }
    if (this.newSta001.input.productCodes) {
      for (var i in this.newSta001.input.productCodes) {
        var productCode = this.newSta001.input.productCodes[i.toString()];
        kit += productCode;
        console.log("generateKitBarcode() @["+i+
          "] productCode = ["+productCode+
          "]");
      }
    }
    for (var i = 0; i < this.parameters.length; i++) {
      var parameter = this.parameters[i];
      kit += parameter;
      console.log("generateKitBarcode() @["+i+
        "] paramter = ["+parameter+
        "]");
    }
    // var CS = this.generateKitBarcodeCS(s);
    // kit += CS;
    console.log("generateKitBarcode() --> kit = ["+kit+
      "] stored as kitBarcode value");
    if (this.isKitBarcodePreviewEnabled) {
      this.generateKitBarcodePreview();
    }
  }




  // refresh() {
  //   updateKitBarcode();
  //   generateProductBarcodes();
  // }

  updateKitBarcode(source) {
    var tmp = "";
    if (this.newSta001.input.kitLot) tmp += this.newSta001.input.kitLot;
    if (this.newSta001.input.kitCode) tmp += this.newSta001.input.kitCode;
    if (this.newSta001.input.kitExpiry) tmp += this.newSta001.input.kitExpiry;
    if (this.newSta001.input.productsCount) tmp += this.newSta001.input.productsCount;
    for (var index in this.newSta001.input.productCodes) {
      tmp += this.newSta001.input.productCodes[index.toString()];
    }
    for (var index in this.newSta001.input.parameters) {
      tmp += this.newSta001.input.parameters[index.toString()].replace(/[.]+/g, '');
    }
    tmp += this.getCS(tmp);

    if (source == 'kitCode') {
        if (this.newSta001.input.kitCode) {
          console.log("updateKitBarcode: kitCode");
        }
    } else if (source == 'kitLot') {
        if (this.newSta001.input.kitLot) {
          console.log("updateKitBarcode: kitLot");
        }
    } else if (source == 'kitExpiry') {
        if (this.newSta001.input.kitExpiry) {
          console.log("updateKitBarcode: kitExpiry");
        }
    // } else if (source == 'countProductCodes') {
    //     if (this.newSta001.input.productsCount) {
    //       while(this.productBarcodes.length < this.newSta001.input.productsCount) {
    //         this.productBarcodes.push("");
    //       }
    //       while(this.productBarcodes.length > this.newSta001.input.productsCount) {
    //         this.productBarcodes.pop();
    //       }
    //       console.log("updateKitBarcode: countProductCodes");
    //     }
    } else if (source.startsWith('productCode')) {
      var index = source.charAt(source.length-1);
      if (this.newSta001.input.productCodes[index.toString()]) {
        this.productBarcodes[index] = this.newSta001.input.productCodes[index.toString()];
        console.log("updateKitBarcode: productCode "+index);
      }
    // } else if (source == 'countParameters') {
    //     if (this.newSta001.input.countParameters) {
    //       while(this.parameters.length < this.newSta001.input.countParameters) {
    //         this.parameters.push("");
    //       }
    //       while(this.parameters.length > this.newSta001.input.countParameters) {
    //         this.parameters.pop();
    //       }
    //       console.log("updateKitBarcode: countParameters");
    //     }
    // } else if (source.startsWith('parameter')) {
    //   var index = source.charAt(source.length-1);
    //   if (this.newSta001.input.parameters[index.toString()]) {
    //     this.parameters[index] = this.newSta001.input.parameters[index.toString()];
    //     // tmp += "p"+index+this.parameters[index];
    //     console.log("updateKitBarcode: parameter "+index);
    //   }
    } else {      console.log("updateKitBarcode: oups!");
    }

    this.generateParameters();
    this.generateProductBarcodes();
    this.generateKitBarcode();

    // this.newSta001.input.kitBarcode = tmp;
    // if (this.isKitBarcodePreviewEnabled) {
    //   this.generateKitBarcodePreview();
    // };
    // if (this.isProductBarcodesPreviewEnabled) {
    //   this.generateProductBarcodesPreviews();
    // };
  }

  generateKitBarcodePreview() {
    if ( document.body.getElementsByClassName('kitBarcodePreview')[0] ) {
      var O = document.body.getElementsByClassName('kitBarcodePreview')[0];
      while (O.firstChild) {
        O.removeChild(O.firstChild);
      }
      var I = this.newSta001.input.kitBarcode;
      // I = I.replace(/['"]+/g, '');
      console.log("generateKitBarcodePreview: I = "+I);

      var re = new RegExp(".{1,"+this.kitBarcodeEncodingCut+"}","g")
      var X = I.match(re);

      for (var i = 0; i < X.length; i++) {
        var y = this.kitBarcodeEncoding[X.length-1][i][0]+X[i]+this.kitBarcodeEncoding[X.length-1][i][1];
        console.log(i+": "+X[i]+" -> "+y);
        var l = document.createElement("li");
        O.appendChild(l);
        var c = document.createElement("canvas");
        // c.className += "col-lg-12";
        l.appendChild(c);
        JsBarcode(c, y, {
          height:30
        });
      }
    };
  }

  saveSta001() {
    console.log("saveSta001()");
  }

  clearSta001() {
    this.isKitBarcodePreviewEnabled = false;
    this.kitBarcode = "";
    this.productBarcodes = [];
    this.parameters = [];
    this.newSta001 = null;
    console.log("clearSta001()");
  }

  getCS(s) {
    var I = new String(s);
    var chk = I.charCodeAt(0).toString(16).toUpperCase(); //hex
    for (var i = 1; i < I.length; i++) {
      chk = (parseInt(chk, 16) ^ I.charCodeAt(i)).toString(16).toUpperCase(); // xor only work on javascript numeric values
    }
    chk = (parseInt(chk, 16) | parseInt('40', 16)).toString(16).toUpperCase();
    var pF = ((parseInt(chk, 16) & parseInt('F0', 16)) / 16).toString(16).toUpperCase();
    // pF = this.hex2cod(pF);
    var pf = ((parseInt(chk, 16) & parseInt('0F', 16))).toString(16).toUpperCase();
    // pf = this.hex2cod(pf);
    var CS = pF+pf;
    return CS;
  }

  hex2cod(si) {
    var so = "";
    for (var i = 0; i < si.length; i++) {
      switch (si.charAt(i)) {
        case '0':
          so+=  '0';
          break;
        case '1':
          so+=  '1';
          break;
        case '2':
          so+=  '2';
          break;
        case '3':
          so+=  '3';
          break;
        case '4':
          so+=  '4';
          break;
        case '5':
          so+=  '5';
          break;
        case '6':
          so+=  '6';
          break;
        case '7':
          so+=  '7';
          break;
        case '8':
          so+=  '8';
          break;
        case '9':
          so+=  '9';
          break;
        case 'A':
          so+=  '$';
          break;
        case 'B':
          so+=  '-';
          break;
        case 'C':
          so+=  ':';
          break;
        case 'D':
          so+=  '/';
          break;
        case 'E':
          so+=  '.';
          break;
        case 'F':
          so+=  '+';
          break;
        default:
          console.log("\n### error in hex2cod() ###\n");
          break;
      }
    }
    return so;
  }


  // hex2cod(s) {
  //   switch (c) {
  //     case '0':
  //       return '0';
  //       break;
  //     case '1':
  //       return '1';
  //       break;
  //     case '2':
  //       return '2';
  //       break;
  //     case '3':
  //       return '3';
  //       break;
  //     case '4':
  //       return '4';
  //       break;
  //     case '5':
  //       return '5';
  //       break;
  //     case '6':
  //       return '6';
  //       break;
  //     case '7':
  //       return '7';
  //       break;
  //     case '8':
  //       return '8';
  //       break;
  //     case '9':
  //       return '9';
  //       break;
  //     case 'A':
  //       return '$';
  //       break;
  //     case 'B':
  //       return '-';
  //       break;
  //     case 'C':
  //       return ':';
  //       break;
  //     case 'D':
  //       return '/';
  //       break;
  //     case 'E':
  //       return '.';
  //       break;
  //     case 'F':
  //       return '+';
  //       break;
  //     default:
  //       console.log("error");
  //       break;
  //   }
  // }

  cod2hex(c) {
    switch (c) {
      case '0':
        return '0';
        break;
      case '1':
        return '1';
        break;
      case '2':
        return '2';
        break;
      case '3':
        return '3';
        break;
      case '4':
        return '4';
        break;
      case '5':
        return '5';
        break;
      case '6':
        return '6';
        break;
      case '7':
        return '7';
        break;
      case '8':
        return '8';
        break;
      case '9':
        return '9';
        break;
      case '$':
        return 'A';
        break;
      case '-':
        return 'B';
        break;
      case ':':
        return 'C';
        break;
      case '/':
        return 'D';
        break;
      case '.':
        return 'E';
        break;
      case '+':
        return 'F';
        break;
      default:
        console.log("error");
        break;
    }
  }

}

angular.module('ali001App')
  .component('sta001', {
    templateUrl: 'app/sta001/sta001.html',
    controller: Sta001Component
  });

})();

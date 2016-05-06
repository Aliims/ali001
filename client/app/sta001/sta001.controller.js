'use strict';
(function(){

class Sta001Component {
  constructor() {
    this.isBarcodeKitPreviewEnabled = false;
    // this.barcodeKit = null;
  }

  getCount(num) {
    // console.log("getCount "+num);
    return new Array(num);
  }

  addSta001() {
    console.log("sta001");
  }

  generateBarcodeKit() {
    this.barcodeKit = null;
    if (this.newSta001.input.kitCode) {
      this.barcodeKit += this.newSta001.input.kitCode*1;
    }
    if (this.newSta001.input.lot) {
      this.barcodeKit += this.newSta001.input.lot*2;
    }
    if (this.newSta001.input.expiry) {
      this.barcodeKit += this.newSta001.input.expiry*3;
    }
    if (this.isBarcodeKitPreviewEnabled) { this.generateBarcodeKitPreview();}
    console.log("generateBarcodeKit() with this.isBarcodeKitPreviewEnabled="+this.isBarcodeKitPreviewEnabled+" and this.barcodeKit="+this.barcodeKit);
  }

  generateBarcodeKitPreview() {
    // API
    //   Option 	Default value 	Type
    //   format 	"auto" (CODE128) 	String
    //   width 	2 	Number
    //   height 	100 	Number
    //   displayValue 	true 	Boolean
    //   fontOptions 	"" 	String
    //   font 	"monospace" 	String
    //   textAlign 	"center" 	String
    //   textPosition 	"bottom" 	String
    //   textMargin 	2 	Number
    //   fontSize 	20 	Number
    //   background 	"#ffffff" 	String (CSS color)
    //   lineColor 	"#000000" 	String (CSS color)
    //   margin 	10 	Number
    //   marginTop 	undefined 	Number
    //   marginBottom 	undefined 	Number
    //   marginLeft 	undefined 	Number
    //   marginRight 	undefined 	Number
    //   valid 	function(valid){} 	Function
    if ( document.body.getElementsByClassName('barcodeKitPreview')[0] && this.barcodeKit > 1 ) {
      var O = document.body.getElementsByClassName('barcodeKitPreview')[0];
      var I = document.body.getElementsByClassName('barcodeKit')[0].innerHTML.replace(/['"]+/g, '');
      JsBarcode(O, I, {
        height:30//,
        // displayValue: false
      });
      console.log("generateBarcodeKitPreview()");
    };
  }

}

angular.module('ali001App')
  .component('sta001', {
    templateUrl: 'app/sta001/sta001.html',
    controller: Sta001Component
  });

})();

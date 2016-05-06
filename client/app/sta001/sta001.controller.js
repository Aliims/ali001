'use strict';
(function(){

class Sta001Component {
  constructor() {
    this.barcodeData = "";
  }

  getCount(num) {
    // console.log("getCount "+num);
    return new Array(num);
  }

  addSta001() {
    console.log("sta001");
  }

  generateBarcodeData() {
    console.log("generateBarcodeData()");
    this.barcodeData = "";
    if (this.newSta001.input.kitCode) {
      this.barcodeData += this.newSta001.input.kitCode*1;
    }
    if (this.newSta001.input.lot) {
      this.barcodeData += this.newSta001.input.lot*2;
    }
    if (this.newSta001.input.expiry) {
      this.barcodeData += this.newSta001.input.expiry*3;
    }
    console.log(this.barcodeData);
    // Protection of image generation
    if (this.barcodeData>1) {
      this.generateBarcodeImage();
    }
    
  }

  generateBarcodeImage() {
    console.log("generateBarcodeImage()");
    if (document.body.getElementsByClassName('barcodeImage')[0]) {
      var O = document.body.getElementsByClassName('barcodeImage')[0];
      var I = document.body.getElementsByClassName('barcodeData')[0].innerHTML.replace(/['"]+/g, '');
      JsBarcode(O, I, {
        height:30,
        displayValue: false
      });

    // Option 	Default value 	Type
    // format 	"auto" (CODE128) 	String
    // width 	2 	Number
    // height 	100 	Number
    // displayValue 	true 	Boolean
    // fontOptions 	"" 	String
    // font 	"monospace" 	String
    // textAlign 	"center" 	String
    // textPosition 	"bottom" 	String
    // textMargin 	2 	Number
    // fontSize 	20 	Number
    // background 	"#ffffff" 	String (CSS color)
    // lineColor 	"#000000" 	String (CSS color)
    // margin 	10 	Number
    // marginTop 	undefined 	Number
    // marginBottom 	undefined 	Number
    // marginLeft 	undefined 	Number
    // marginRight 	undefined 	Number
    // valid 	function(valid){} 	Function

    };
  }

}

angular.module('ali001App')
  .component('sta001', {
    templateUrl: 'app/sta001/sta001.html',
    controller: Sta001Component
  });

})();

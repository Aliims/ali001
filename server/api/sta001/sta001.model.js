'use strict';

import mongoose from 'mongoose';

var Sta001Schema = new mongoose.Schema({
  i: {
    kitCode: String,
    kitLot: String,
    kitExpiry: String,
    parametersCount: Number,
    // parameters: { type: String, index: true },
    // parameters: [{type: mongoose.Schema.Types.Mixed }],
    // parameters: Array,
    productsCount: Number,
    // productCodes: { type: String, index: true }
    // productCodes: [{type: mongoose.Schema.Types.Mixed }]
    // productCodes: Array
  },
  o: {
    kitBarcode: String,
    updated: { type: Date, default: Date.now },
    online: { type: Boolean, default: false },
    active: { type: Boolean, default: true }
  }
});

// , { autoIndex: false }
// Sta001Schema.index({ name: 1, type: -1 });

export default mongoose.model('Sta001', Sta001Schema);

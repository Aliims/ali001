'use strict';

import mongoose from 'mongoose';

var Sta001Schema = new mongoose.Schema({
  input: {
    kitCode: String,
    kitLot: String,
    kitExpiry: String,
    parametersCount: Number,
    // parameters: { type: [String], index: true },
    productsCount: Number
    // productCodes: { type: [String], index: true }
  },
  kitBarcode: String,
  updated: { type: Date, default: Date.now },
  // user: { type: String, default: "none" },
  online: { type: Boolean, default: false },
  active: { type: Boolean, default: true }
});

// , { autoIndex: false }
// Sta001Schema.index({ name: 1, type: -1 });

export default mongoose.model('Sta001', Sta001Schema);

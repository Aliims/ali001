'use strict';

import mongoose from 'mongoose';

var Sta001Schema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Sta001', Sta001Schema);

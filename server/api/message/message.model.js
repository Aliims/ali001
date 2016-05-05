'use strict';

import mongoose from 'mongoose';

var MessageSchema = new mongoose.Schema({
  email: String,
  info: String,
  content: String,
  active: Boolean
});

export default mongoose.model('Message', MessageSchema);

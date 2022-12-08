var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
  date_order: Date,
  wide: Number,
  long: Number,
  high: Number,
  weight: Number,
  status_order: String,
  pickup_address: String,
  pickup_city: String,
  recipient_name: String,
  recipient_id: Number,
  recipient_address: String,
  recipient_city: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);

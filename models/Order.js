const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const orderSchema = new Schema({
	id: String,
	payment: String,
	status: String,
	type: String,
	customerName: String,
	customerEmail: String
});

module.exports = mongoose.model('Order', orderSchema);
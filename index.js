const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./keys');

const Order = require('./models/Order');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect( process.env.MONGODB_URI || keys.MONGOURI);

app.get('/', (req, res) => {
	res.send('Hey! Hi There! \n I am just a Backend! I cannot do much. So, Please do not expect things from me! Expectations Hurt! 😉😉😉 ');
});

app.post('/saveTransaction', async (req, res) => {
	console.log(req.body);
	const order = new Order(req.body);
	await order.save();
	console.log('Saved');
	res.send(order);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);
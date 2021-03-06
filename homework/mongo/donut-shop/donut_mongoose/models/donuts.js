//requirements: require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create your donut schema:
const donutSchema = new Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
});

var donutModel = mongoose.model('Donut', donutSchema);
//export your donut with module.exports()
module.exports = donutModel;
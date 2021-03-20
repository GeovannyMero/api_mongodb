const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductoSchema = Schema({
    id: Number,
    name: String,
    quantity: Number
});

module.exports = mongoose.model('productos', ProductoSchema);

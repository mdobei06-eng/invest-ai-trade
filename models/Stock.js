const mongoose = require('mongoose');

// Define the Stock schema
const stockSchema = new mongoose.Schema({
    symbol: {
        type: String,
        required: true,
        unique: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    openPrice: {
        type: Number,
        required: true,
    },
    highPrice: {
        type: Number,
    },
    lowPrice: {
        type: Number,
    },
    volume: {
        type: Number,
    },
    marketCap: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});

// Create the Stock model
const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
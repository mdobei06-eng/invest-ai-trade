const mongoose = require('mongoose');

const mutualFundSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    manager: { type: String, required: true },
    totalAssets: { type: Number, required: true },
    expenseRatio: { type: Number, required: true },
    inceptionDate: { type: Date, required: true },
    historicalReturns: [{ year: Number, return: Number }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MutualFund', mutualFundSchema);
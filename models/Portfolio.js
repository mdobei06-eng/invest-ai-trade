const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    stocks: [
        {
            stockId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Stock',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    mutualFunds: [
        {
            fundId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'MutualFund',
                required: true
            },
            amountInvested: {
                type: Number,
                required: true
            }
        }
    ],
    metrics: {
        totalValue: {
            type: Number,
            required: true
        },
        riskLevel: {
            type: String,
            enum: ['low', 'medium', 'high'],
            required: true
        },
        returnRate: {
            type: Number,
            required: true
        }
    }
}, { timestamps: true });

module.exports = mongoose.model('Portfolio', portfolioSchema);
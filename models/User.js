const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true, },
    lastName: { type: String, required: true, },
    email: { type: String, required: true, unique: true, lowercase: true, },
    phone: { type: String, unique: true, sparse: true, },
    password: { type: String, required: true, },
    pan: String,
    aadhaar: String,
    kycVerified: { type: Boolean, default: false, },
    bankAccount: { accountNumber: String, ifscCode: String, bankName: String, },
    riskProfile: { type: String, enum: ['Conservative', 'Moderate', 'Aggressive'], default: 'Moderate', },
    availableBalance: { type: Number, default: 0, },
    totalInvested: { type: Number, default: 0, },
    twoFactorEnabled: { type: Boolean, default: false, },
    biometricEnabled: { type: Boolean, default: false, },
    createdAt: { type: Date, default: Date.now, },
    updatedAt: { type: Date, default: Date.now, },
});

module.exports = mongoose.model('User', userSchema);
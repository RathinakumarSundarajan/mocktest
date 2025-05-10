const mongoose = require('mongoose');

const QuestionbankSchema = new mongoose.Schema({
    qid: {
        type: String,
        required: true,
        unique: true
    },
    question: {
        type: String,
        required: true
    },
    optionA: {
        type: String,
        required: true
    },
    optionB: {
        type: String,
        required: true
    },
    optionC: {
        type: String,
        required: true
    },
    optionD: {
        type: String,
        required: true
    },
    correctAnswer: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Questionbank', QuestionbankSchema);
